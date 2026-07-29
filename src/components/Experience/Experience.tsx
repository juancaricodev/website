import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <h1 className={styles.title}>Experience</h1>

      <div className={styles.item}>
        <div className={styles.itemHeader}>
          <h2>Mercado Libre</h2>
          <span>May 2021 – Dec 2024</span>
        </div>

        <div className={styles.role}>
          <p className={styles.roleTitle}>
            Software Engineer <em>— Mar 2023 – Dec 2024</em>
          </p>
          <ul className={styles.achievements}>
            <li>
              Led technical design for seller marketing tools — catalog sync
              with Meta and TikTok, Ads creation
            </li>
            <li>
              Designed BI dashboards using Looker and Tableau to measure feature
              adoption and guide product decisions
            </li>
            <li>
              Managed production incidents during on-call rotations (DataDog,
              New Relic), coordinating cross-functional response
            </li>
          </ul>
        </div>

        <div className={styles.role}>
          <p className={styles.roleTitle}>
            Development Analyst <em>— May 2021 – Mar 2023</em>
          </p>
          <ul className={styles.achievements}>
            <li>
              Built SSR micro-frontends with headless CMS architecture (React +
              TypeScript), optimizing performance and SEO
            </li>
            <li>
              Contributed backend endpoints in Go and Java — learned
              independently to reduce backend team workload
            </li>
            <li>
              Mentored two senior engineers during onboarding, recognized as key
              factor in promotion to Software Engineer
            </li>
          </ul>
        </div>

        <div className={styles.stack}>
          <span>React</span>
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>Go</span>
          <span>Java</span>
          <span>PostgreSQL</span>
          <span>DataDog</span>
          <span>New Relic</span>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.itemHeader}>
          <h2>Seico Technology</h2>
          <span>May 2020 – Aug 2020</span>
        </div>
        <div className={styles.role}>
          <p className={styles.roleTitle}>Frontend Developer</p>
          <ul className={styles.achievements}>
            <li>
              Created a complete Design System using SCSS, BEM, and Atomic
              Design methodology
            </li>
            <li>
              Contributed to redesign and refactoring of the QualyFlight
              application
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
