import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
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
        <div className={styles.menu}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#about">
                <p className={styles.navLink}>About</p>
              </a>
            </li>
            <li>
              <a href="#experience">
                <p className={styles.navLink}>Experience</p>
              </a>
            </li>
            <li>
              <a href="#work">
                <p className={styles.navLink}>Projects</p>
              </a>
            </li>
            <li>
              <a href="#contact">
                <p className={styles.navLink}>Contact</p>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/juancaricodev/cv/blob/main/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className={styles.navLink}>CV</p>
              </a>
            </li>
          </ul>
          <div className={styles.divider} />
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
      </nav>
    </header>
  );
}
