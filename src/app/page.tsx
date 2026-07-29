import Navbar from "@/components/Navbar/Navbar";
import MobileNavbar from "@/components/MobileNavbar/MobileNavbar";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <main className={styles.page}>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
