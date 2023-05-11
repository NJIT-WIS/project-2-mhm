import { useRouter } from 'next/router';
import articles from '../../data/articles.json';
import Article from '../../components/article';

export default function ArticlePage({ article }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <Article article={article} />;
}

export async function getStaticProps({ params }) {
  const article = articles.find((article) => article.id === parseInt(params.id));

  return {
    props: {
      article,
    },
  };
}

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return { paths, fallback: false };
}
