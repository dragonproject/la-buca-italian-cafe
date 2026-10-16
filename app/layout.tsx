import '../styles/globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'La Buca | 三田の街角で味わう手作りイタリアン',
  description:
    '港区三田の隠れ家イタリアンLa Buca（ラ・ブカ）。シェフの温もり伝わる手打ちパスタと、ご近所さんのような親しみやすいおもてなしで、至福のひとときをご提供します。',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen selection:bg-primary/30 selection:text-white bg-stone-950 font-sans">
        <div className="grain-overlay" />
        <Header />
        <main className="grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
