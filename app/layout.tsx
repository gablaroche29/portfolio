import type { Metadata } from "next";
import "./globals.css";
import CommandPalette from "@/components/CommandPalette";

export const metadata: Metadata = {
  title: "Gabriel — Developer",
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
        <CommandPalette />
        {children}
      </body>
    </html>
  );
}
