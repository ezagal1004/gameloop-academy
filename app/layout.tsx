// app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const bmHanna = localFont({
  src: "./fonts/BMHANNAPro.woff2",
  variable: "--font-bm-hanna",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Gameloop Academy - Learn Coding Through Games",
  description: "Live online coding classes where kids build their own video games using MakeCode Arcade. Ages 10-14.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: "Gameloop Academy - Learn Coding Through Games",
    description: "Live online coding classes where kids build their own video games using MakeCode Arcade. Ages 10-14.",
    siteName: "Gameloop Academy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${bmHanna.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}