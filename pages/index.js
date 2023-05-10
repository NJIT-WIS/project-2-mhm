import Head from 'next/head';
import Link from 'next/link';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import styles from '../styles/global.module.css';

export default function Home() {
  return (
    <div className={styles.webBody}>
      <NavMenu />
      <Head>
        <title>MyWebClass</title>
      </Head>
      <HeroBanner />
      <main>
        <section>
          <h2>Current Events and Tech Breakthroughs</h2>
          <p>Read and write articles about recent tech breakthroughs and how it can better the world.</p>
          <p>MyWebClass aims to be a top distributor in tech news, for the people.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
