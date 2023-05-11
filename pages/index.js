import Head from 'next/head';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import HeroBanner from '../components/heroBanner';
import SEO from '../components/SEO';

import Cookie from '../components/cookie';
import styles from '../styles/global.module.css';

export default function Home() {
  return (
    <div className={styles.webBody}>
      <SEO title="MyWebClass" description="Create a network of professionals dedicated to revolutionizing education and preparing students for success in the AI-driven world." />
      <Head>
        <title>MyWebClass</title>
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <HeroBanner />
      <main>
        <section>
          <h2>Current Events and Tech Breakthroughs</h2>
          <p>Read and write articles about recent tech breakthroughs and how it can better the world.</p>
          <p>MyWebClass aims to be a top distributor in tech news, for the people.</p>
        </section>
      </main>
      <Footer />
      {/* <Cookie /> */}
    </div>
  );
}
