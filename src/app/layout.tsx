import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My.Smccd.Edu Student Portal",
  description:
    "Access the SMCCD Student Portal for essential academic and administrative tools. Find resources for online learning, course registration, student email, and more. Enhance your educational journey at Cañada College, College of San Mateo, and Skyline College with seamless access to Canvas, WebSMART, and other critical services.",
  keywords: [
    "SMCCD",
    "Student Portal",
    "Canvas",
    "WebSMART",
    "WebSchedule",
    "Student Email",
    "online learning",
    "course registration",
    "College of San Mateo",
    "Cañada College",
    "Skyline College",
    "college services",
    "academic resources",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="bg-gray-100">{children}</main>
      </body>
    </html>
  );
}
