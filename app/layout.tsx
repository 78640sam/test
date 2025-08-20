import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VedAqua - Premium Customized Water Bottles | Coming Soon',
  description: 'Discover VedAqua premium customized water bottles. Sustainable, stylish, and personalized hydration solutions launching soon.',
  keywords: 'water bottles, custom water bottles, sustainable, eco-friendly, personalized bottles, VedAqua',
  authors: [{ name: 'VedAqua Team' }],
  creator: 'VedAqua',
  publisher: 'VedAqua',
  openGraph: {
    title: 'VedAqua - Premium Customized Water Bottles',
    description: 'Coming soon - Premium customized water bottles that blend style, sustainability, and personalization.',
    type: 'website',
    locale: 'en_US',
    siteName: 'VedAqua',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VedAqua - Premium Customized Water Bottles',
    description: 'Coming soon - Premium customized water bottles that blend style, sustainability, and personalization.',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}