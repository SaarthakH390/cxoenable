import type { Metadata } from 'next';
import { ibmPlexSans, sourceSerif } from '@/lib/fonts';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://cxoenable.com'),
  title: {
    default: 'CXOEnable Advisors | Executive Search & Leadership Advisory',
    template: '%s | CXOEnable Advisors',
  },
  description: 'Executive Search and Leadership Advisory for organizations building high-impact leadership teams. We help founders, CEOs, and boards make better leadership decisions.',
  icons: {
    icon: '/files_4204649-2026-06-16T11-31-47-575Z-files_4204649-2026-06-16T11-25-19-430Z-Artboard_2_copy.png',
    shortcut: '/files_4204649-2026-06-16T11-31-47-575Z-files_4204649-2026-06-16T11-25-19-430Z-Artboard_2_copy.png',
    apple: '/files_4204649-2026-06-16T11-31-47-575Z-files_4204649-2026-06-16T11-25-19-430Z-Artboard_2_copy.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cxoenable.com',
    siteName: 'CXOEnable Advisors',
    title: 'CXOEnable Advisors | Executive Search & Leadership Advisory',
    description: 'Executive Search and Leadership Advisory for organizations building high-impact leadership teams.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CXOEnable Advisors',
    description: 'Executive Search and Leadership Advisory for organizations building high-impact leadership teams.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${sourceSerif.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
