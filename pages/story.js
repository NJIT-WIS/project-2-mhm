import Head from 'next/head';
import Link from 'next/link';
import NavMenu from '../components/NavMenu';
import styles from '../styles/global.module.css';

export default function Story() {
  return (
    <>
      <Head>
        <title>Our Story - MyWebClass.org</title>
      </Head>
      <NavMenu />
      <main>
        <section>
          <h1>Our Story</h1>
          <p>MyWebClass.org was founded in 2021 with the mission to provide affordable and accessible tech education to anyone who wants to learn. Our founders, Jane and John Doe, both had careers in tech and were passionate about giving back to the community by sharing their knowledge and expertise.</p>
          <p>At MyWebClass.org, we believe that everyone should have the opportunity to learn and succeed in tech. We offer a wide range of courses in programming, web development, graphic design, and more, designed to help you achieve your goals and advance your career.</p>
          <h2>Our Vision</h2>
          <p>Our vision is to create a world where tech education is accessible to everyone, regardless of their background or financial situation. We believe that by providing affordable and high-quality education, we can empower individuals and communities to achieve their full potential.</p>
        </section>
      </main>
      <footer>
        <p>&copy; MyWebClass.org 2021. All rights reserved.</p>
      </footer>
    </>
  );
}
