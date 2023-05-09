import Link from 'next/link';
import styles from '../styles/foot.module.css';

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src="/mywebclass-logo.png" alt="MyWebClass.org Logo" />
        </div>
        <nav className={styles.footerNav}>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/sign up">Sign Up</Link>
            </li>
            <li>
                <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; MyWebClass.org {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  )
}
