import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/Home.module.css';
import './index.css';
import 'tailwindcss/tailwind.css';
export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactNode {
  return <Component {...pageProps} />;
}
