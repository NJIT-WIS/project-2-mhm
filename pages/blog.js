import Head from 'next/head';
import Link from 'next/link';
import NavMenu from '../components/NavMenu';
import BlogCards from '../components/blogCards';
import Footer from '../components/Footer';
import styles from '../styles/global.module.css';

export default function Blog() {
  return (
    <div className={styles.webBody}>
      <Head>
        <title>Next.js Blog</title>
      </Head>
      <NavMenu />
      <main className={styles.container}>
      <h2>Latest Blog Posts</h2>
        <BlogCards />
      </main>
      <Footer />
    </div>
  );
}
