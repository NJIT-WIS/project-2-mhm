import '../styles/global.module.css';
import styles from '../styles/NavMenu.module.css';
import Layout from '../components/Layout'
import Script from "next/script"
import { useRouter } from 'next/router';
import { useEffect } from "react";
import * as gtag from "../lib/gtag"

<Script src="" strategy="afterInteractive" />

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-TF72BVCT9P" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TF72BVCT9P', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
