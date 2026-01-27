import type { Metadata } from "next";
import "./globals.css";
import TopNav from "./components/layout/TopNav";


export const metadata: Metadata = {
  title: "PadiSquare Store",
  description: "A multi-vendor e-commerce platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="min-h-screen overflow-x-hidden"
      >
        <TopNav />
        {children}
      </body>
    </html>
  );
}
