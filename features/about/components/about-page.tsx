import HeroSection from "./hero-section";
import ImageShowcase from "./image-showcacr";
import FeaturesBanner from "./features-banner";
import ProductTypesSection from "./productTypes-section";
import CtaSection from "./CtaSection";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#111111] antialiased">
      <HeroSection />
      <ImageShowcase />
      <FeaturesBanner />
      <ProductTypesSection />
      <CtaSection />
    </div>
  );
}
