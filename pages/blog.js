import Head from 'next/head';
import Link from 'next/link';
import NavMenu from '../components/navMenu';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>My Blog - Welcome</title>
      </Head>
      <h1>Welcome to My Blog</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/story">Courses</Link></li>
        <li><Link href="/blog">blog</Link></li>
        <li><Link href="/signup">Contact</Link></li>
      </ul>
    </div>
  );
}
