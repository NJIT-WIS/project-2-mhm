import styles from '../styles/team.module.css';

export default function TeamPanel({ name, position, image }) {
  return (
    <div className={styles.panel}>
      <img src={image} alt={`Photo of ${name}`} className={styles.photo} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.title}>{position}</p>
    </div>
  );
}
