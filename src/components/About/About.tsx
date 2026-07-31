import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <h1 className={styles.name}>Juanca Rico</h1>
      <p className={styles.content}>
        I'm a Software Engineer with 4+ years of experience building web
        products at scale at Mercado Libre. After an intentional sabbatical year
        dedicated to music and personal projects, I'm now returning to
        development with renewed energy — currently building Flag Pilot, a
        feature flag management system with Next.js 16, NestJS, PostgreSQL, and
        AWS.
      </p>
      <p className={styles.content}>
        My background combines a strong Frontend focus (React, TypeScript,
        Next.js, SSR micro-frontends) with hands-on experience in Backend (REST
        APIs with Node.js, Go, and Java), analytics (Looker, Tableau), and
        production infrastructure (DataDog, New Relic, CI/CD).
      </p>
      <p className={styles.content}>
        At Mercado Libre, I contributed to building marketing tools for sellers
        — catalog sync with Meta and TikTok, Ad creation — impacting thousands
        of merchants across Latin America. I also designed BI dashboards to
        measure feature adoption, managed production incidents during on-call
        rotations, and actively participated in architectural decisions.
      </p>
      <p className={styles.content}>When I'm not coding, I'm making music.</p>
    </section>
  );
}
