import React from "react";
import Head from 'next/head';
import styles from '../styles/global.module.css';
import articles from '../data/articles.json';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

export default function Article({ article }) {
  return (
    <div className={styles.webBody}>
      <Head>
        <title>{article.title}</title>
      </Head>
      <main className={styles.container}>
        <NavMenu />
        <article>
          <h1 className={styles.sectionHeading}>{article.title}</h1>
          <p className={styles.author}>
            By {article.author} on {article.date}
          </p>
          <img className={styles.articleImage} src={article.image} alt={article.title} />
          <p className={styles.sectionContent}>{article.content}</p>
        </article>
        <Footer />
      </main>
    </div>
  );
}
