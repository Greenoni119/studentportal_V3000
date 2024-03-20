"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];


export default function NavigationMenuDemo() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#002F65] bg-opacity-100">
    <div className=" flex items-center ">
    <Image
            src="/smccdlogo.png"
            alt="SMCCCD Logo"
            width={200}
            height={100}
            className="m-3 "
          />
 <div className="">
    <NavigationMenu className="hidden md:flex ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white">Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white">Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref >
           <span className="text-white hover:text-black">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Documentation
            </NavigationMenuLink>
            </span> 
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <div className="absolute right-0 top-7 md:hidden z-10">
        <button onClick={toggleMenu} className=" text-slate-200  hover:text-white ">
          <RxHamburgerMenu className="w-20 h-6  text-white" />
        </button>
    </div>

    
    </div>
    </div>
    {showMenu && (
            <NavigationMenu className="">
              <NavigationMenuList>
                <div className="menu md:hidden" id="navbar">
                  <ul className="flex items-center ">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-xs">
                        Get started
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-6 p-6 md:w-[600px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                <Icons.logo className="h-6 w-6" />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  NavItem 1
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Some brief description of this item.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <ListItem href="/docs" title="Item 2">
                            Item 2 description
                          </ListItem>
                          <ListItem href="/docs/installation" title="Item 3">
                            Item 3 description
                          </ListItem>
                          <ListItem
                            href="/docs/primitives/typography"
                            title="Item 4"
                          >
                            Item 4 description
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="m-2">
                      <NavigationMenuTrigger className="text-xs">
                        Tutorials
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {components.map((component) => (
                            <ListItem
                              className=""
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem className="m-1">
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Support
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link href="" passHref>
                        <NavigationMenuLink className=" text-[#ffffff] sm:text-lg rounded md:p-0 hover:text-red-700">
                          <Button variant="default" className="text-xs ">
                            Need Help?
                          </Button>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </ul>
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          )}
    </nav>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
