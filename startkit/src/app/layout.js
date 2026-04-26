

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import NextThemeProvider from "@/Providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'StartKit',
  description: 'Created by Summa',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
   <NextThemeProvider>
         <Navbar/>
    <main>
          {children}
            <ToastContainer
  position="top-center"
  autoClose={2500}
  theme="dark"
/>
    </main>
   </NextThemeProvider>
        </body>
    </html>
  );
}
