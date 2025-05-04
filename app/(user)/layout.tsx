import type { Metadata } from "next";
import { Cabin, Istok_Web } from "next/font/google";
import "../globals.css";

import NavBar from "../../Components/NavBar";
import { ThemeProvider } from "@/Components/theme-provider";

const cabin = Cabin({
  variable: "--font-cabin",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Istok_web = Istok_Web({
  variable: "--font-Istok_web",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patrionics",
  description: "Precision. Protection. Patrionics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${cabin.variable} ${Istok_web.variable} antialiased`} suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > 
          <NavBar />
          {children}
         </ThemeProvider> 
      </body>
    </html>
  );
}