import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import CalculatorSection from "@/components/CalculatorSection";
import ProductLabSection from "@/components/ProductLabSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogSection from "@/components/BlogSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] relative antialiased">
      {/* 1. Sticky Nav */}
      <Header />

      <main>
        {/* 2. Hero */}
        <HeroSection />

        {/* 3. About */}
        <AboutSection />

        {/* 4. Skills */}
        <SkillsSection />

        {/* 5. Featured Projects */}
        <ProjectsSection />

        {/* 6. "See It In Action" — Live Interactive Calculator */}
        {/* <CalculatorSection /> */}

        {/* 7. Product Lab / Case Studies */}
        <ProductLabSection />

        {/* 8. Experience Timeline */}
        <ExperienceSection />

        {/* 9. Blog */}
        <BlogSection />

        {/* 10. Education */}
        <EducationSection />

        {/* 11. Contact / Footer */}
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
