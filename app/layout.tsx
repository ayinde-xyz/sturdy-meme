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
  title: "The Chrome Green Club",
  description: "Official website of The Chrome Green Club",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  authors: { name: "Ayinde AbdurRahman" },
  openGraph: {
    title: "The Chrome Green Club",
    description: "Official website of The Chrome Green Club",
    url: "https://thechromegreen.vercel.app",
    siteName: "The Chrome Green Club",
    images: [
      {
        url: "https://res.cloudinary.com/dbgxwchuy/image/upload/v1769897077/faruq_z6vmuu.png",
        width: 800,
        height: 600,
        alt: "The Chrome Green Club Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Chrome Green Club",
    description: "Official website of The Chrome Green Club",
    site: "@chromegreenclub",
    creator: "@ayinde_dev",
    images: [
      "https://res.cloudinary.com/dbgxwchuy/image/upload/v1769897077/faruq_z6vmuu.png",
    ],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

// Fonts to be used in the project

// alpha-slab one
// roboto
// geist sans

// Colors to be used in the project

// oklch(0.5985 0.2072 145.59)
// oklch(0.9267 0.1579 89.47)
