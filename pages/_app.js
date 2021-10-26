import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import Layout from '../components/Layout';
import parse from 'postcss/lib/parse';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from '../store';
import { ToastProvider } from 'react-toast-notifications';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNprogress
                color='#29D'
                startPosition={0.5}
                stopDelayMs={100}
                height={2}
                showOnShallow={false}
            />
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <Provider store={store}>
                <Layout>
                    <ToastProvider
                        placement='bottom-left'
                        autoDismiss
                        autoDismissTimeout={6000}
                    >
                        <Component {...pageProps} />
                    </ToastProvider>
                </Layout>
            </Provider>
        </>
    );
}

export default MyApp;
