import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.section} id="work">
      <h1 className={styles.title}>Projects</h1>

      <div className={styles.item}>
        <h2>Flag Pilot</h2>
        <p>
          Feature flag management system with a real-time dashboard, client SDK
          for flag evaluation, and role-based access control. Full-stack monorepo
          with CI/CD, Docker containerization, and automated deployment on AWS
          EC2 and Vercel. 272 tests.
        </p>
        <div className={styles.stack}>
          <span>Next.js 16</span>
          <span>NestJS</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
          <span>AWS EC2</span>
        </div>
        <div className={styles.links}>
          <a
            href="https://flag-pilot-dashboard.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/juancaricodev/flag-pilot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>

      <div className={styles.item}>
        <h2>Pomodoro Timer</h2>
        <p>
          Interactive Pomodoro timer with testing, CI/CD, and automated
          deployment via Vercel. Hexagonal architecture with domain, application,
          and infrastructure separation. 52 tests.
        </p>
        <div className={styles.stack}>
          <span>React</span>
          <span>TypeScript</span>
          <span>Vite</span>
          <span>Vitest</span>
          <span>Hexagonal Architecture</span>
        </div>
        <div className={styles.links}>
          <a
            href="https://pomodoro-timer-xi-fawn.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/juancaricodev/pomodoro-timer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
    </section>
  );
}
