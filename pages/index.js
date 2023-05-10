import Head from 'next/head';
import Link from 'next/link';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import styles from '../styles/global.module.css';

export default function Home() {
  return (
    <div className={styles.webBody}>
      <NavMenu />
  <Head>
  <title>MyWebClass.org - Learn Tech Skills</title>
</Head>
      <header>
        <h1>MyWebClass.org</h1>
      </header>
      <main>
        <section>
          <h2>Learn Tech Skills with MyWebClass.org</h2>
          <p>Looking to improve your tech skills? Look no further!</p>
          <p>Our courses are designed to help you succeed in your career or your studies.</p>
        </section>
      </main>
      <Footer />
    </div>

  );
}
