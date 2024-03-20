"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, KeyRound } from "lucide-react";

export default function AppPortal() {
  return (
    <section className="container mt-20">
      <h2 className="text-3xl text-center pb-8">Commonly Used Applications</h2>
      <div className="grid grid-cols-1 gap-5 pb-10 md:grid-cols-3">
        {data.map((item) => (
          <div key={item.title} className="group block cursor-pointer">
            <Card>
              <CardHeader className="flex flex-grow flex-col">
                <div className="flex h-6 justify-end">
                  {item.isPopular && (
                    <Badge className="max-w-md bg-green-600">Popular</Badge>
                  )}
                </div>
                <div className="flex h-40 w-full items-center justify-center overflow-hidden rounded group-hover:bg-slate-50">
                  <Image
                    className="min-h-40 object-contain p-5 pb-8 transition-transform group-hover:scale-105"
                    src={item.imgUrl}
                    alt=""
                    height={item.imgHeight}
                    width={item.imgWidth}
                  />
                </div>
                <CardTitle className="truncate pt-3 text-3xl text-indigo-900 group-hover:text-indigo-600">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-5 font-medium text-gray-900">
                <p className="line-clamp-2 h-20 overflow-hidden text-lg">
                  {item.content}
                </p>
                <div className="flex justify-end gap-3">
                  {item.moreInformationPage && (
                    <a
                      className="flex flex-grow-0 justify-center rounded-md bg-white py-4 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50"
                      href={item.moreInformationPage}
                      aria-label={`More information about ${item.title}`}
                    >
                      <span className="text-sm">Support &rarr;</span>
                    </a>
                  )}
                  <a
                    className="flex-1 flex-grow-1 rounded-md bg-indigo-50 px-2 py-4 text-center text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                    href={item.signInUrl}
                    aria-label="Sign in to ${item.title}"
                  >
                    {item.canSignIn === true ? "Sign in" : "Browse"}
                    {item.canSignIn === true ? (
                      <KeyRound size={18} className="ml-1 inline" />
                    ) : (
                      <ExternalLink size={18} className="ml-1 inline" />
                    )}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
