import Head from 'next/head';
import Link from 'next/link';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import HeroBanner from '../components/heroBanner';
import styles from '../styles/global.module.css';
import Newsletter from './NewsletterForm';
import SEO from '../components/SEO';


export default function Home() {
  return (
    <div className={styles.webBody}>
      <NavMenu />
       <SEO title="MyWebClass" description="Create a network of professionals dedicated to revolutionizing education and preparing students for success in the AI-driven world." />
      <Head>
        <title>MyWebClass</title>
        <link rel="icon" type="image/png" href="../public/favicon.ico"/>
      </Head>
      <HeroBanner />
      <main>
        <section>
          <h2>Current Events and Tech Breakthroughs</h2>
          <p>Read and write articles about recent tech breakthroughs and how it can better the world.</p>
          <p>MyWebClass aims to be a top distributor in tech news, for the people.</p>
        </section>
      </main>
      <SignUpForm />
      <Footer />
    </div>
  );
}
