import { Footer } from "@/components/layout/footer/Footer";
import { Newsletter } from "@/components/layout/footer/Newsletter";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { FaqSection } from "@/components/sections/faq/FaqSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { ServicesSection } from "@/components/sections/services/ServicesSection";
import { TestimonialsSection } from "@/components/sections/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <main id="main" className="flex min-h-screen w-full flex-col items-center bg-page py-[41px]">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <FaqSection />
      <Footer />
      <Newsletter />
    </main>
  );
}
