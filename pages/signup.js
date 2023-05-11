import Head from 'next/head';
import Link from 'next/link';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import styles from '../styles/global.module.css';
import SignUpForm from '../components/signUpForm';
import SEO from '../components/SEO';

export default function SignUp() {
  return (
    <div className={styles.webBody}>
      <NavMenu />
      <SEO title="MyWebClass" description="Create a network of professionals dedicated to revolutionizing education and preparing students for success in the AI-driven world." />
      <Head>
        <title>MyWebClass.org - Sign Up for Updates</title>
        <meta name="description" content="Join our learning community and receive regular updates on the latest resources, blogs, and tips for learning new skills and staying up-to-date in the tech world." />
      </Head>
      <h1>Join MyWebClass!</h1>
      <p>Join our email newsletter to receive regular updates on the latest resources, blogs, and tips for staying up-to-date in the tech world.</p>
      <p>Plus, by joining our community, you'll have the opportunity to share your own insights and ideas!</p>
      <SignUpForm />
      <Footer />
    </div>
  );
}
