import Link from 'next/link';
import styles from '../styles/signup.module.css';
import Head from 'next/head';
import Newsletter from './NewsletterForm';

export default function SignUp() {
  return (
    <div>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TF72BVCT9P"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)};
              gtag('js', new Date());
              gtag('config', 'G-TF72BVCT9P');
            `,
          }}
        />
      </Head>
      <Newsletter/>
    </div>
  );
}
