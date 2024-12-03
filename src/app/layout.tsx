import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/index.scss';
import { Footer } from '@/layout/Footer/Footer';
import { ReactNode } from 'react';
import clsx from 'clsx';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: 'Gustavo Cerbasi',
  description: 'Gustavo Cerbasi',
};

type IRootLayout = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang='en'>
      <body className={clsx(inter.className, 'container')}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
