import type { Metadata } from "next";
import "./globals.css";


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
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
