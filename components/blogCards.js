import Link from 'next/link';
import styles from '../styles/blog.module.css';

const articles = [
  {
    id: 1,
    title: 'Quantum Computing',
    author: 'Sarah Lee',
    date: 'May 1, 2023',
    image: '/article-1.jpg',
    url: '/articles/quantum-computing',
  },
  {
    id: 2,
    title: 'The Rise of Artificial Intelligence',
    author: 'James Chen',
    date: 'May 2, 2023',
    image: '/article-2.jpg',
    url: '/articles/artificial-intelligence',
  },
  {
    id: 3,
    title: '5G Networks: The Next Generation',
    author: 'Linda Kim',
    date: 'May 3, 2023',
    image: '/article-3.jpg',
    url: '/articles/5g-networks',
  },
  {
    id: 4,
    title: 'Blockchain: Beyond Cryptocurrencies',
    author: 'David Park',
    date: 'May 4, 2023',
    image: '/article-4.jpg',
    url: '/articles/blockchain',
  },
  {
    id: 5,
    title: 'Virtual and Augmented Reality',
    author: 'Grace Wong',
    date: 'May 5, 2023',
    image: '/article-5.jpg',
    url: '/articles/vr-ar',
  },
  {
    id: 6,
    title: 'The Power of Cloud Computing',
    author: 'Jonathan Lee',
    date: 'May 6, 2023',
    image: '/article-6.jpg',
    url: '/articles/cloud-computing',
  },
  {
    id: 7,
    title: 'The Future of Cybersecurity',
    author: 'Amy Lee',
    date: 'May 7, 2023',
    image: '/article-7.jpg',
    url: '/articles/cybersecurity',
  },
  {
    id: 8,
    title: 'The Legitimacy of Self-Driving Cars',
    author: 'Harold Drive',
    date: 'May 8, 2023',
    image: '/article-8.jpg',
    url: '/articles/self-driving-cars',
  }
];


export default function BlogCards() {
  return (
    <section className={styles.blogSection}>
      <h2 className={styles.sectionTitle}>Latest Blog Posts</h2>
      <div className={styles.articlesContainer}>
        {articles.map((article) => (
          <div className={styles.articleCard} key={article.id}>
            <Link href={article.url}>
                <img src={article.image} alt={article.title} />
                <div>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
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