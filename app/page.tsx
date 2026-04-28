import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import ServicesPreview from "@/components/ServicesPreview";
import ContactCTA from "@/components/ContactCTA";
import { siteContent } from "@/lib/content";

export default function Home() {
  return (
    <>
      <HeroSection
        title={siteContent.home.hero.title}
        subtitle={siteContent.home.hero.subtitle}
        ctaText={siteContent.home.hero.cta}
        ctaLink="/contact"
        backgroundVideo="/videos/video01.mp4"
        backgroundImage={siteContent.home.hero.image}
        showScrollIndicator
      />
      <AboutSection
        title={siteContent.home.about.title}
        description={siteContent.home.about.description}
        image={siteContent.home.about.image}
      />
      <WhyUsSection items={siteContent.home.whyUs} />
      <ServicesPreview services={siteContent.home.servicesPreview} />
      <ContactCTA />
    </>
  );
}

