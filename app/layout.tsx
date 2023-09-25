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
      <body className={`${inter.className} text-gray-950 h-[1000px] `}>
        <div className='main'>
          <div className='gradient' />
        </div>
        <Header />
        <main className='app'>{children}</main>
      </body>
    </html>
  );
}
