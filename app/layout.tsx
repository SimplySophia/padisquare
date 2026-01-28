
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Padisquare - Multi-Vendor Marketplace',
  description: 'Discover unique products from multiple vendors in our premium marketplace',
  openGraph: {
    title: 'Padisquare - Multi-Vendor Marketplace',
    description: 'Discover unique products from multiple vendors',
    url: '/',
    siteName: 'Padisquare',
    images: [
      {
        url: '/assets/hero/hero-3.jpg',
        width: 1200,
        height: 630,
        alt: 'Padisquare Marketplace',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Padisquare - Multi-Vendor Marketplace',
    description: 'Discover unique products from multiple vendors',
    images: ['/assets/hero/hero-3.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
