import type { Metadata } from "next";
import { Hind } from "next/font/google";

import "./globals.css";
import NavBar from "./navbar";

// const karma = Karma({ subsets: ["latin"] });
const hind = Hind({weight: "400", subsets: ["latin"] });
// const inter = Inter({weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoderMana",
  description: "Enterprise Engineering Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={
        hind.className + " font-sans overflow-x-hidden bg-white text-gray-900 dark:bg-[#0f0f0f] dark:text-white transition-colors duration-300"}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
