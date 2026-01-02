import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gab — Developer",
  description: "Game & Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
