import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/Header";

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
  title: "BūvcenuGuru - Professional Construction Services | Profesionāli Būvniecības Pakalpojumi",
  description: "Professional construction services in Latvia. Quality building, renovation, and project management. Kvalitatīvi būvniecības pakalpojumi Latvijā.",
  keywords: ['construction', 'building', 'renovation', 'Latvia', 'būvniecība', 'renovācija', 'projektēšana'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv" className={`${roboto.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <div className="pt-20"> {/* Add padding to account for fixed header */}
          {children}
        </div>
      </body>
    </html>
  );
}
