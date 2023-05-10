import Link from 'next/link';
import styles from '../styles/foot.module.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogo}>
          <img src="https://cdn4.iconfinder.com/data/icons/education-196/52/Education__EarthGlobe__GraduationCap__GraduationCaps__Planet__Earth__Globe__Tool__Tools-512.png" alt="Logo" className={styles.logo} />
        </div>
        <div
          style={{
            marginTop: 10,
            marginBottom: 15,
            height: 40,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <ButtonGroup aria-label="Basic example">
            <a href="https://facebook.com" target='_blank'>
              <Button variant="secondary">Facebook</Button>
            </a>
            <a href="https://linkedin.com" target='_blank'>
              <Button variant="secondary">LinkedIn</Button>
            </a>
            <a href="https://twitter.com" target='_blank'>
            <Button variant="secondary">Twitter</Button>
            </a>
          </ButtonGroup>
        </div>
        <nav className={styles.footerNav}>
          <ul>
            <li>
              <Link href="/story">About Us</Link>
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
