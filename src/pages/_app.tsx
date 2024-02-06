import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@1&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}