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
          <p>Are you a student or a teacher looking to improve your tech skills? Look no further than MyWebClass.org. We offer a wide range of courses in programming, web development, graphic design, and more. Our courses are designed to help you succeed in your career or your studies.</p>
          <p>With a monthly subscription, you can access all of our courses at any time. We offer flexible learning options to fit your schedule and your budget.</p>
          <Link href="/signup" passHref>
            Sign Up for Updates
          </Link>
        </section>
      </main>
      <Footer />
    </div>
    
  );
}
