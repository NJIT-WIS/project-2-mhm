import Link from 'next/link';
import styles from '../styles/blog.module.css';
import articles from '../data/articles.json';

export default function BlogCards() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.articlesContainer}>
        {articles.map((article) => (
          <div className={styles.articleCard} key={article.id}>
            <Link href={`/articles/${article.id}`}>
                <img src={article.image} alt={article.title} />
                <div>
                  <h4 className={styles.articleTitle}>{article.title}</h4>
                  <p className={styles.author}>
                    By {article.author} on {article.date}
                  </p>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
