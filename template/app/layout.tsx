import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});
const SFProSemiBold = localFont({
  src: "./fonts/SFProSemiBold.woff",
  variable: "--font-sf-pro-semi-bold",
  weight: "600",
});
const SFProRegular = localFont({
  src: "./fonts/SFProRegular.woff",
  variable: "--font-sf-pro-regular",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Starter Template",
  description: "Starter Template (NextJS, Typescript, Tailwind, Framer Motion)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${SFProSemiBold.variable} ${SFProRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
