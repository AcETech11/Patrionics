import type { Metadata } from "next";
import { Cabin, Istok_Web } from "next/font/google";
import "../globals.css";




import NavBar from "../../Components/NavBar";
import MobileNav from "../../Components/MobileNav"; 
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
        <head>
        <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
        </head>
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
            <MobileNav/>
          </ThemeProvider> 
        </body>
      </html>
  );
}