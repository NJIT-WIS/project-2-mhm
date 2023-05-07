import Head from 'next/head';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>MyWebClass.org - Sign Up for Updates</title>
        <meta name="description" content="Join our learning community and receive regular updates on the latest resources, blogs, and tips for learning new skills and staying up-to-date in the tech world." />
      </Head>

      <h1>Join Our Learning Community!</h1>
      <p>Are you looking to learn and grow in the exciting world of technology? Then MyWebClass.org is the perfect place for you! Our community of passionate teachers, students, and learners share a common goal of advancing their skills and knowledge in technology. </p>
      <p>Join our email newsletter to receive regular updates on the latest resources, blogs, and tips for learning new skills and staying up-to-date in the tech world. Plus, by joining our community, you'll have the opportunity to share your own insights and ideas! So don't wait, sign up now and become a part of our amazing learning community! </p>
      <form action="your-server-side-script.php" method="post">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        <input type="submit" value="Join Now" />
      </form>
    </>
  );
}
