import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        width={150}
        height={150}
        className={styles.avatar}
      />
      <h1 className={styles.title}>Hello, I'm Your Name</h1>
      <p className={styles.subtitle}>A passionate developer.</p>
    </section>
  );
}
