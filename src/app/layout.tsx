import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://robertosartoro.adv.br'),
  title: {
    default: 'Roberto Sartoro | Advogado em Presidente Prudente - SP',
    template: '%s | Roberto Sartoro Advogado',
  },
  description:
    'Roberto Sartoro Advogado – Escritório de Advocacia em Presidente Prudente, SP. Especialista em Direito Civil, Trabalhista, Família e Previdenciário. Consulta informativa e atendimento ético.',
  keywords: [
    'advogado Presidente Prudente',
    'escritório de advocacia',
    'direito civil',
    'direito trabalhista',
    'direito de família',
    'consultoria jurídica',
    'Roberto Sartoro',
    'advogado SP',
  ],
  authors: [{ name: 'Roberto Sartoro Advogado' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Roberto Sartoro Advogado',
    title: 'Roberto Sartoro | Advogado em Presidente Prudente - SP',
    description:
      'Escritório de Advocacia em Presidente Prudente. Atuação ética e informativa em Direito Civil, Trabalhista, Família e Previdenciário.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1e3a5f" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
