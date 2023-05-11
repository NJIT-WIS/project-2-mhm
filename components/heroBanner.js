import Link from 'next/link';
import styles from '../styles/hero.module.css';

export default function HeroBanner() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBannerOverlay}>
        <h1>MyWebClass</h1>
        <p>Nourish Your Mind</p>
        <Link href="/blog" className={styles.button}>
          Browse Articles
        </Link>
      </div>
    </header>
  );
}
