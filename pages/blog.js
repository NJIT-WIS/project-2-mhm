import Head from 'next/head';
import Link from 'next/link';
import NavMenu from '../components/NavMenu';
import BlogCards from '../components/blogCards';
import Footer from '../components/Footer';
import styles from '../styles/global.module.css';
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <div className={styles.webBody}>
      <SEO title="MyWebClass" description="Create a network of professionals dedicated to revolutionizing education and preparing students for success in the AI-driven world." />
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
