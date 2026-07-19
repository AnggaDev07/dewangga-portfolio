import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechSkills from "@/components/TechSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SocialSidebar from "@/components/SocialSidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <SocialSidebar />

      <main className={styles.main}>
        <HeroSection />
        
        <ExperienceSection />

        {/* Render the newly renamed component */}
        <TechSkills />

        <ProjectsSection />

        <ContactSection />
      </main>
    </div>
  );
}