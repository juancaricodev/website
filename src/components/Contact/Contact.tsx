import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.info}>
        I'm currently open to new opportunities. Feel free to reach out at{" "}
        <a href="mailto:juancaricodev@gmail.com">juancaricodev@gmail.com</a>
      </p>
    </section>
  );
}
