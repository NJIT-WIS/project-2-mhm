import Head from 'next/head';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import HeroBanner from '../components/heroBanner';
import TeamPanel from '../components/teamPanel';
import styles from '../styles/global.module.css';
import teamData from '../data/team.json';
import faqData from '../data/faq.json';
import SEO from '../components/SEO';

export default function Story() {
  return (
    <div className={styles.webBody}>
      <NavMenu />
      <SEO title="MyWebClass" description="Create a network of professionals dedicated to revolutionizing education and preparing students for success in the AI-driven world." />
      <Head>
        <title>About Us - MyWebClass</title>
      </Head>
      <HeroBanner />
      <main>
        <section className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.sectionHeading}>About Us</h1>
            <p className={styles.sectionContent}>MyWebClass is a platform that aims to be a top distributor of tech news for the people. Our mission is to provide our readers with the latest information on current events and tech breakthroughs and how they can better the world.</p>
            <p className={styles.sectionContent}>We are passionate about technology and believe that it has the power to transform lives and shape the future. Our team of writers and editors are dedicated to bringing you the most accurate, engaging and informative content on the web.</p>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={`${styles.column} ${styles.teamColumn}`}>
                <h2 className={styles.sectionHeading}>Meet the Team</h2>
                <div className={styles.teamGrid}>
                  {teamData.map(member => (
                    <TeamPanel key={member.name} name={member.name} position={member.position} image={member.image} bio={member.bio} />
                  ))}
                </div>
              </div>
              <div className={`${styles.column} ${styles.faqColumn}`}>
                <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
                <div className={styles.faqGrid}>
                  {faqData.map(faq => (
                    <div key={faq.question}>
                      <h4 className={styles.faqQuestion}>{faq.question}</h4>
                      <p className={styles.faqAnswer}>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
