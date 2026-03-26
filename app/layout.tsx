import type { Metadata } from "next";
import { Hind } from "next/font/google";

import "./globals.css";
import NavBar from "./navbar";

const hind = Hind({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "CoderMana | Enterprise Engineering Excellence",
  description: "We architect, train, and scale high-performance engineering teams for the world's most demanding technology organizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
              }
            `,
          }}
        />
      </head>
      <body className={`${hind.className} antialiased overflow-x-hidden bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white`}>
        <NavBar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
