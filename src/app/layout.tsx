import type { Metadata } from 'next';
import { Cabin_Condensed, PT_Serif } from 'next/font/google';
import { NextAuthProvider } from '@/modules/auth/providers/next-auth.provider';

import { Layout } from '@/modules/core/containers';

import classNames from 'classnames';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/modules/core/styles/global/index.scss';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={classNames(pt.variable, cabin.variable)}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
