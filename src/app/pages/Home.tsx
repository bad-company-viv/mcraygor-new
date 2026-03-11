import { HeroSlider } from "../components/home/HeroSlider";
import { StatsSection } from "../components/home/StatsSection";
import { ProductsShowcase } from "../components/home/ProductsShowcase";
import { ClienteleMarquee } from "../components/home/ClienteleMarquee";
import { ManufacturingSection } from "../components/home/ManufacturingSection";
import { CTASection } from "../components/home/CTASection";
import { QuotationSection } from "../components/home/QuotationSection";
import { BlogSection } from "../components/home/BlogSection";
import { ProjectsInstallationsSection } from "../components/home/ProjectsInstallationsSection";
import { WorldwidePresenceSection } from "../components/home/WorldwidePresenceSection";
import { SEO } from "../components/SEO";

export function Home() {
  return (
    <>
      <SEO pageKey="home" />
      <HeroSlider />
      <StatsSection />
      <ProductsShowcase />
      <CTASection />
      <ClienteleMarquee />
      <ProjectsInstallationsSection />
      <ManufacturingSection />
      <QuotationSection />
      <BlogSection />
      <WorldwidePresenceSection />
    </>
  );
}
