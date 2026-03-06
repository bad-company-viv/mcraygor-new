import { HeroSlider } from "../components/home/HeroSlider";
import { StatsSection } from "../components/home/StatsSection";
import { ProductsShowcase } from "../components/home/ProductsShowcase";
import { ClienteleMarquee } from "../components/home/ClienteleMarquee";
import { ManufacturingSection } from "../components/home/ManufacturingSection";
import { CTASection } from "../components/home/CTASection";
import { BlogSection } from "../components/home/BlogSection";

export function Home() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <ProductsShowcase />
      <ClienteleMarquee />
      <ManufacturingSection />
      <CTASection />
      <BlogSection />
    </>
  );
}
