import type React from 'react';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Seamless Smart Solutions - Smart Home Automation',
  description:
    'Transform your home with cutting-edge smart automation technology',
  generator: 'v0.app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${geist.variable} ${manrope.variable}`}
        suppressHydrationWarning
      >
        <body className="font-sans antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
      <Toaster />
    </ClerkProvider>
  );
}
