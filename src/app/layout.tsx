import type React from 'react';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import Navbar from '@/components/Navbar';

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
  title: 'NexusHome - Smart Home Automation',
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
        </ThemeProvider>
      </body>
    </html>
  );
}
