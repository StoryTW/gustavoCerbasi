import type { Metadata } from 'next';
import '@/assets/styles/index.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';
import localFont from 'next/font/local'
import Footer from '@/layout/Footer/Footer';

const aa_stetica = localFont({
  src: [
    {
      path: '/fonts/AA-Stetica-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/AA-Stetica-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '/fonts/AA-Stetica-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/AA-Stetica-Bold-Italic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '/fonts/AA-Stetica-Black_0.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '/fonts/AA-Stetica-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Gustavo Cerbasi',
  description: 'Gustavo Cerbasi',
};

type IRootLayout = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang='pt-br'>
      <body className={clsx(aa_stetica.className, 'container')}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
