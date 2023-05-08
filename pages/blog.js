import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/blog.module.css';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

const articles = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    author: 'John Doe',
    date: 'May 1, 2023',
    image: '/nextjs-blog-article-1.jpg',
    excerpt: 'In this article, we will cover the basics of getting started with Next.js and building your first Next.js app.',
    url: '/articles/getting-started-with-nextjs',
  },
  {
    id: 2,
    title: 'Next.js vs. Create React App',
    author: 'Jane Smith',
    date: 'May 2, 2023',
    image: '/nextjs-blog-article-2.jpg',
    excerpt: 'If you are trying to decide between Next.js and Create React App for your next project, this article will help you make an informed decision.',
    url: '/articles/nextjs-vs-create-react-app',
  },
  {
    id: 3,
    title: 'Building a Blog with Next.js and Markdown',
    author: 'Bob Johnson',
    date: 'May 3, 2023',
    image: '/nextjs-blog-article-3.jpg',
    excerpt: 'In this article, we will show you how to build a blog using Next.js and Markdown, making it easy to create and manage your blog content.',
    url: '/articles/building-a-blog-with-nextjs-and-markdown',
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Next.js Blog</title>
      </Head>
      <NavMenu />
      <main>
        <section className={styles.blogSection}>
          <h1>Latest Articles</h1>
          <div className={styles.articlesContainer}>
            {articles.map((article) => (
              <div className={styles.articleCard} key={article.id}>
                <Link href={article.url}>
                    <img src={article.image} alt={article.title} />
                    <div>
                      <h2>{article.title}</h2>
                      <p className={styles.author}>
                        by {article.author} on {article.date}
                      </p>
                      <p className={styles.excerpt}>{article.excerpt}</p>
                    </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
