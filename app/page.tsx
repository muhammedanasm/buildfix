import About from "@/components/home/About";
import CTASection from "@/components/home/CTASection";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import MissionVision from "@/components/home/MissionVision";
import Partners from "@/components/home/Partners";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import ComingSoon from "@/components/layout/ComingSoon";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* <ComingSoon /> */}
      <Hero />
      <About />
      <Projects />
      <Partners />
      <CTASection />
      <Services />
      <MissionVision />
      <Stats />
      <Testimonials />
      <FinalCTA />

      <Footer />

      <WhatsAppButton />

    </>
  );
}