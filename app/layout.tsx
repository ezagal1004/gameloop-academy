// app/layout.tsx
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css"

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gameloop Academy - Learn Coding Through Games",
  description: "Live online coding classes where kids build their own video games using MakeCode Arcade. Ages 7-17.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: "Gameloop Academy - Learn Coding Through Games",
    description: "Live online coding classes where kids build their own video games using MakeCode Arcade. Ages 7-17.",
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
        className={`${fredoka.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}