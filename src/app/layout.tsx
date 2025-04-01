import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});


export const metadata: Metadata = {
  title: "Lever",
  description: "Commonsense Yield on Bitcoin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
