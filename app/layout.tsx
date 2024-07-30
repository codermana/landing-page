import type { Metadata } from "next";
import { Hind, Karma } from "next/font/google";
import "./globals.css";

// const karma = Karma({ subsets: ["latin"] });
const hind = Hind({weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoderMana",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hind.className + " min-w-full flex flex-col items-center"}>{children}</body>
    </html>
  );
}
