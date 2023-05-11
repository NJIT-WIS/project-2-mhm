import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/cookie.module.css';
import Cookies from 'js-cookie';

const Cookie = () => {
  const [accepted, setAccepted] = useState(false);

  const acceptCookie = () => {
    setAccepted(true);
    Cookies.set('cookieAccepted', true); // save cookie acceptance using js-cookie
  };

  const cookieAccepted = Cookies.get('cookieAccepted') === 'true' || accepted;

  if (cookieAccepted) {
    return null;
  }

  return (
    <div className={styles.cookie}>
      <p>This website uses cookies to improve your experience. By clicking "Accept", you agree to our use of cookies. <Link href="/privacy">Learn more</Link></p>
      <div>
        <button onClick={acceptCookie}>Accept</button>
      </div>
    </div>
  );
};

export default Cookie;
