import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Construction Company - Professional Building Services",
  description: "Professional construction services in Latvia. Quality building, renovation, and project management.",
  keywords: ['construction', 'building', 'renovation', 'Latvia', 'būvniecība'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv" className={`${roboto.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
