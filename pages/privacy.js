import Head from 'next/head';
import Link from 'next/link';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import styles from '../styles/global.module.css';
import Policy from '../components/Policy';

export default function Privacy() {
  return (
    <div className={styles.webBody}>
      <Head>
        <title>MyWebClass Privacy Policy</title>
      </Head>
      <NavMenu />
      <main>
        <Policy />
      </main>
      <Footer />
    </div>
  );
}

