import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SIdeNav from "./components/SIdeNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aniket Portfolio",
  description: "Aniket Sharma | Front-End Developer & UI Designer from Jalandhar. Building modern web apps with React, Next.js . Check out my projects and let's collaborate!",
};

export default function RootLayout({ children }) {
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
