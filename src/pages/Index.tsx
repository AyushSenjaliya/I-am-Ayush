import CustomCursor from "@/components/CustomCursor";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Header from "@/components/Header";
import LiveSystemBar from "@/components/LiveSystemBar";
import HeroSection from "@/components/HeroSection";
import MarqueeRibbon from "@/components/MarqueeRibbon";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import TechStackSection from "@/components/TechStackSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechRadarSection from "@/components/TechRadarSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AIChatModal from "@/components/AIChatModal";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy text-slate relative overflow-hidden">
      {/* Custom Physics Magnetic Cursor Follower */}
      <CustomCursor />

      {/* Dynamic ambient mouse particle canvas background */}
      <BackgroundCanvas />

      {/* Main Page Layout */}
      <Header />
      <div className="pt-20">
        <LiveSystemBar />
      </div>

      <main className="relative z-10">
        <HeroSection />
        
        <ScrollReveal direction="zoom" delay={100}>
          <MarqueeRibbon />
        </ScrollReveal>

        <ScrollReveal direction="up">
          <StatsSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <EducationSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <TechStackSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <ProjectsSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <TechRadarSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <ArchitectureSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <ExperienceSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <TestimonialsSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <FAQSection />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={100}>
          <ContactSection />
        </ScrollReveal>
      </main>

      <Footer />

      {/* Interactive AI Chatbot Widget */}
      <AIChatModal />
    </div>
  );
};

export default Index;
