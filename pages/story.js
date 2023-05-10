import Head from 'next/head';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import HeroBanner from '../components/heroBanner';
import TeamPanel from '../components/teamPanel';
import styles from '../styles/global.module.css';

const teamData = [
  {
    name: 'Mike Massotto',
    position: 'Front-End Developer',
    image: '/mike.jpg',
    bio: '22, Information Technology Undergraduate of NJIT'
  },
  {
    name: 'Mithil Patel',
    position: 'Project Manager, Playwright Tester',
    image: '/mithil.jpg',
    bio: '[age],[degree]'
    },
  {
    name: 'Hehjun Lim',
    position: 'SEO and Analytics Manager',
    image: '/hehjun.jpg',
    bio: '[age], [degree]'
  }
  // ... add more team members as needed
];


export default function Story() {
  return (
    <div className={styles.webBody}>
      <NavMenu />
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
            <h2 className={styles.sectionHeading}>Meet the Team</h2>
            <div className={styles.teamGrid}>
              {teamData.map(member => (
                <TeamPanel key={member.name} name={member.name} title={member.title} imgSrc={member.imgSrc} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
