"use client";

import { useState } from "react";
import styles from "./MobileNavbar.module.css";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile drawer */}
      <div
        className={`${styles.drawer} ${!isOpen ? styles.drawerHidden : ""}`}
      >
        <ul className={styles.navLinks}>
          <li>
            <a href="#about" className={styles.navLink} onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#work" className={styles.navLink} onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink} onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://github.com/juancaricodev/cv/blob/main/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
              onClick={closeMenu}
            >
              CV
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
              onClick={closeMenu}
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
              onClick={closeMenu}
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

      {/* Burger button */}
      <button
        className={styles.burger}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span
          className={`${styles.burgerBar} ${isOpen ? styles.bar1Open : ""}`}
        />
        <span
          className={`${styles.burgerBar} ${isOpen ? styles.bar2Open : ""}`}
        />
        <span
          className={`${styles.burgerBar} ${isOpen ? styles.bar3Open : ""}`}
        />
      </button>
    </>
  );
}
