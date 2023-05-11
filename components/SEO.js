import Head from 'next/head';
import { Helmet } from 'react-helmet';

const SEO = () => {
  const title = 'MyWebClass';
  const description =
    'Create a network of professionals dedicated to revolutionizing education and preparing students for success in the AI-driven world';

  return (
    <Head>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Add more meta tags as needed */}
      </Helmet>
    </Head>
  );
};

export default SEO;