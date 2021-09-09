import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextNprogress from 'nextjs-progressbar';

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#29D"
        startPosition={0.5}
        stopDelayMs={100}
        height={2}
        showOnShallow={false}
      />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />


      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;