import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanmay's Birthday Bash - You're Invited!",
  description: "Join Tanmay Mishra for an unforgettable birthday celebration on 19th November 2025 at REAL URBAN DECK THE RESTRO CAFE. Good food, great company, music, and memorable moments await!",
  keywords: ["Tanmay Mishra", "Birthday Party", "Invitation", "Celebration", "19 November 2025", "REAL URBAN DECK"],
  authors: [{ name: "Tanmay Mishra" }],
  icons: {
    icon: "https://aozoradesu.com/wp-content/uploads/2025/09/Aozora.svg",
  },
  openGraph: {
    title: "Tanmay's Birthday Bash - You're Invited!",
    description: "Join Tanmay for an unforgettable birthday celebration on 19th November 2025. Good food, great company, music, and memorable moments await!",
    url: "https://instagram.com/tanmayisdev",
    siteName: "Tanmay's Birthday Party",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanmay's Birthday Bash - You're Invited!",
    description: "Join Tanmay for an unforgettable birthday celebration on 19th November 2025. Good food, great company, music, and memorable moments await!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
