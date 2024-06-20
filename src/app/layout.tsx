import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GallerySync",
  description: "Store your favorite Images here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
        <SideMenu />
        <div className="w-full px-4 pt-8">{children}</div>
        </div>
        <div className="pt-5">
        <Footer />
        </div>
        </body>
    </html>
  );
}
