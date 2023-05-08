import Head from 'next/head';
import Link from 'next/link';
import NavMenu from '../components/NavMenu';

export default function Blog() {
  return (
    <div className={styles.webBody}>
      <Head>
        <title>Next.js Blog</title>
      </Head>
      <NavMenu />
      <main>
        <h1>Latest Articles</h1>
        <BlogCards />
      </main>
      <Footer />
    </div>
  );
}
