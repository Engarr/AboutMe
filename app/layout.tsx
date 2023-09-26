import Header from '@/components/header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Łukasz Woś - Personal Portfolio',
  description: 'Łukasz Frontend developer is searching for a first job',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} text-gray-950 relative h-[10000px]  `}>
        <div className='main'>
          <div className='gradient' />
        </div>
        <Header />
        <main className='app pt-28 sm:pt-36'>{children}</main>
      </body>
    </html>
  );
}
