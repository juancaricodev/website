import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section id="about" className={styles.section} />
      <section id="experience" className={styles.section} />
      <section id="work" className={styles.section} />
      <section id="contact" className={styles.section} />
    </main>
  );
}
