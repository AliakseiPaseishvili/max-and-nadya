import type { Metadata } from "next";
import { Forum, Marck_Script } from "next/font/google";
import "./globals.css";

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  display: "swap",
});

const marckScript = Marck_Script({
  variable: "--font-script",
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
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
    <html lang="ru" className={`${forum.variable} ${marckScript.variable}`}>
      <body>{children}</body>
    </html>
  );
}
