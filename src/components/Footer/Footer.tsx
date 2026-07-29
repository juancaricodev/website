import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.description}>
        <a href="#" className={styles.logo}>
          <img
            src="/assets/img/favicon.png"
            alt="juancaricodev"
            className={styles.logoIcon}
          />
          <p className={styles.logoText}>
            juancarico<span>dev</span>
          </p>
        </a>
        <p className={styles.copyright}>&copy; 2026</p>
      </div>

      <div className={styles.divider} />

      <div className={styles.contact}>
        <p className={styles.email}>juancaricodev@gmail.com</p>
        <ul className={styles.socialLinks}>
          <li>
            <a
              href="https://github.com/juancaricodev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/icons/github.svg"
                alt="github icon"
                className={styles.socialIcon}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/juancaricodev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/icons/linkedin.svg"
                alt="linkedin icon"
                className={styles.socialIcon}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
