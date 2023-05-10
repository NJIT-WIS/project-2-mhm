import Link from 'next/link';
import styles from '../styles/signup.module.css';
import Head from 'next/head';

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
      <form action="/submit-form.php" method="post" className={styles["form-container"]}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required className={styles["form-field"]} />
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required className={styles["form-field"]} />
        <input type="submit" value="Join Now" className={styles["form-field"]} />
      </form>
    </div>
  );
}
