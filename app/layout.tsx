import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dark Serenity | Luxury Hair Salon by Amberrose Seiferth",
  description: "Experience luxury hair artistry at Dark Serenity. Premium hair services from $200-$400. Where beauty meets edge in gothic elegance.",
  keywords: "luxury hair salon, gothic hair, premium hair services, Amberrose Seiferth, hair transformation, NYC hair salon",
  openGraph: {
    title: "Dark Serenity | Luxury Hair Salon",
    description: "Where beauty meets edge. Premium hair services in a gothic luxury atmosphere.",
    type: "website",
    locale: "en_US",
    siteName: "Dark Serenity",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
