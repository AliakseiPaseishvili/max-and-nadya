import type { Metadata } from "next";
import { Cormorant, Raleway } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
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
    <html lang="ru" className={`${cormorant.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
