import { HeroSlider } from "../components/home/HeroSlider";
import { StatsSection } from "../components/home/StatsSection";
import { ProductsShowcase } from "../components/home/ProductsShowcase";
import { FlagshipProducts } from "../components/home/FlagshipProducts";
import { AboutUsSection } from "../components/home/AboutUsSection";
import { IndustriesWeServe } from "../components/home/IndustriesWeServe";
import { MachinesInAction } from "../components/home/MachinesInAction";
import { ClienteleMarquee } from "../components/home/ClienteleMarquee";
import { CTASection } from "../components/home/CTASection";
import { QuotationSection } from "../components/home/QuotationSection";
import { BlogSection } from "../components/home/BlogSection";
import { ProjectsInstallationsSection } from "../components/home/ProjectsInstallationsSection";
import { ServiceLocationsSection } from "../components/home/ServiceLocationsSection";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO";

export function Home() {
  return (
    <>
      <SEO pageKey="home" />
      <HeroSlider />
      <StatsSection />
      <AboutUsSection />
      <section className="bg-white pt-16 pb-10 text-center">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="inline-block bg-[#fff7ed] px-6 py-2 rounded-full mb-8">
            <span className="text-[#e8612c] text-xs font-black uppercase tracking-[0.2em]">Product Categories</span>
          </div>
          <h2 className="text-[#1c2535] text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-8">
            Our Product Range
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Comprehensive solutions for waste management, industrial cleaning, and specialized municipal operations. Engineered for performance and reliability.
          </p>
          <div className="flex justify-center">
            <Link
              to="/products"
              className="group flex items-center gap-3 bg-[#e8612c] text-white px-10 py-5 rounded-xl text-base font-black uppercase tracking-widest transition-all hover:bg-[#1c2535] hover:shadow-2xl"
            >
              View All Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      <ProductsShowcase />
      <section className="bg-white pt-20 pb-12 text-center border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="inline-block bg-[#fff7ed] px-6 py-2 rounded-full mb-8">
            <span className="text-[#e8612c] text-xs font-black uppercase tracking-[0.2em]">Precision Engineering</span>
          </div>
          <h2 className="text-[#1c2535] text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            Our Flagship<br className="hidden md:block" /> Products
          </h2>
          <div className="h-[1px] w-24 bg-gray-200 mx-auto mt-12" />
        </div>
      </section>
      <FlagshipProducts />
      <IndustriesWeServe />
      <MachinesInAction />
      <CTASection />
      <ClienteleMarquee />
      <ProjectsInstallationsSection />
      <QuotationSection />
      <BlogSection />
      <ServiceLocationsSection />
    </>
  );
}
