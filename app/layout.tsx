import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SessionProviderCtx from "@/components/SessionProviderCtx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Ghatgpt App",
  description: "Ghatgpt brought to you by NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProviderCtx>
    <html lang="en">
      <body className={`${inter.className} px-2 md:px-5`}>
        <Header/>
        <div className="flex flex-col md:flex-row">
          <div className="flex-grow">{children}</div>
        </div>
        </body>
    </html>
    </SessionProviderCtx>
  );
}
