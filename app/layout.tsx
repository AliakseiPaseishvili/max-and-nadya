import type { Metadata } from "next";
import { Forum } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  display: "swap",
});

const floriselScript = localFont({
  src: "../public/Шрифты/Floriselscript.ttf",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Максим & Надя · 3 сентября 2026",
  description: "Приглашение на свадьбу Максима и Нади — 3 сентября 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${forum.variable} ${floriselScript.variable}`}>
      <body>{children}</body>
    </html>
  );
}
