import Link from 'next/link';
import styles from '../styles/NavMenu.module.css';

export default function NavMenu() {
  return (
    <nav className={styles.navMenu}>
      <img src="https://cdn4.iconfinder.com/data/icons/education-196/52/Education__EarthGlobe__GraduationCap__GraduationCaps__Planet__Earth__Globe__Tool__Tools-512.png" alt="Logo" className={styles.logo} />
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/story">About Us</Link></li>
        <li><Link href="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  )
}
