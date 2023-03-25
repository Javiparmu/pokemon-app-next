import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import '@/styles/globals.css';
import { darkTheme } from '@/themes';
import { Layout } from '@/components/layouts/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
}
