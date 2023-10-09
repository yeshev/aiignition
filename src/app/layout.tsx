import { FC, PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Cabin_Condensed, PT_Serif } from 'next/font/google';
import { NextAuthProvider } from '@/modules/auth/providers/next-auth.provider';

import { Layout } from '@/modules/core/containers/layout';

import classNames from 'classnames';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/modules/core/styles/global/index.scss';
import 'swiper/css';

const cabin = Cabin_Condensed({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cabin',
});

const pt = PT_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pt',
});

export const metadata: Metadata = {
  title: 'AI Ignition',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={classNames(pt.variable, cabin.variable)}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
