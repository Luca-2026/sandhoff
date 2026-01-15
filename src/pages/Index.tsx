import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ReferencesTeaser } from "@/components/home/ReferencesTeaser";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <ProcessTimeline />
      <PartnersSection />
      <ReferencesTeaser />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
