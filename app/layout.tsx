import type { Metadata } from "next";
import "./globals.css";
import CommandPalette from "@/components/CommandPalette";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gabriel — Developer",
  description: "Game & Web Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-text antialiased cursor-crosshair">
        <Header />
        <CommandPalette />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
