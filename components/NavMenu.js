import Link from 'next/link';
import styles from '../styles/NavMenu.module.css';

export default function NavMenu() {
  return (
    <nav className={styles.navMenu}>
      <img src="/images/Earth.png" alt="logo" />

      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/story">Story</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  )
}
