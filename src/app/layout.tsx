import type { Metadata } from 'next';
import { Cabin_Condensed, PT_Serif } from 'next/font/google';

import { Layout } from '@/modules/core/containers';

import classNames from 'classnames';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/modules/core/styles/globals.scss';

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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
