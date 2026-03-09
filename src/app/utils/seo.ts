// SEO metadata configuration for all pages

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
}

const BASE_URL = "https://www.mcraygor.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/mcraygor-logo.jpeg`;

export const seoConfig: Record<string, SEOMetadata> = {
  home: {
    title: "McRAYGOR® – Municipal & Industrial Waste Handling Technology",
    description: "McRAYGOR® is a leading manufacturer of municipal and industrial waste handling equipment, including sewer cleaning machines, vacuum trucks, and specialized municipal equipment. Committed to clean cities and safe worker sanitation.",
    keywords: "McRAYGOR, sewer cleaning machines, vacuum trucks, municipal waste handling, industrial waste handling, sanitation equipment, road sweepers, refuse compactors, India",
    canonical: BASE_URL,
    ogTitle: "McRAYGOR® – Municipal & Industrial Waste Handling Technology",
    ogDescription: "Leading manufacturer of municipal and industrial waste handling equipment in India. 25+ years of manufacturing legacy.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  },
  about: {
    title: "About McRAYGOR Mechanicals Infrastructure | Company Profile",
    description: "Learn about McRAYGOR Mechanicals Infrastructure - 25+ years of manufacturing legacy in municipal and industrial waste handling equipment. Operational since 2019 with focus on clean cities and safe sanitation.",
    keywords: "McRAYGOR about, company profile, manufacturing legacy, waste handling equipment manufacturer, India",
    canonical: `${BASE_URL}/about`,
    ogTitle: "About McRAYGOR - 25+ Years Manufacturing Legacy",
    ogDescription: "Manufacturer of municipal and industrial waste handling equipment since 2007. Current operations under McRAYGOR Mechanicals Infrastructure.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  },
  vision: {
    title: "Vision & Mission - Our Commitment | McRAYGOR®",
    description: "McRAYGOR's vision for cleaner cities and safer sanitation practices through mechanized infrastructure. Supporting Make in India and sustainable infrastructure development.",
    keywords: "vision mission, company values, Make in India, sustainable infrastructure, mechanized sanitation, clean cities",
    canonical: `${BASE_URL}/vision`,
    ogTitle: "McRAYGOR Vision & Mission",
    ogDescription: "Committed to cleaner cities, safer sanitation practices, and eliminating manual scavenging through technology.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  },
  legacy: {
    title: "Company Legacy - 25+ Years of Excellence | McRAYGOR®",
    description: "Explore McRAYGOR's 25+ year journey in manufacturing municipal and industrial waste handling equipment. From 2007 brand establishment to current technology-led positioning.",
    keywords: "company legacy, manufacturing history, McRAYGOR timeline, brand heritage, engineering excellence",
    canonical: `${BASE_URL}/legacy`,
    ogTitle: "McRAYGOR Legacy - Engineering Excellence Since 2007",
    ogDescription: "25+ years of building trust through engineering excellence in waste handling equipment manufacturing.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  },
  products: {
    title: "Products - Waste Handling Equipment | McRAYGOR®",
    description: "Comprehensive range of municipal and industrial waste handling equipment including sewer cleaning machines, vacuum trucks, road sweepers, refuse compactors, and specialized equipment.",
    keywords: "sewer cleaning machines, vacuum trucks, road sweepers, refuse compactors, industrial vacuum cleaners, waste handling equipment, municipal equipment",
    canonical: `${BASE_URL}/products`,
    ogTitle: "McRAYGOR Products - Complete Waste Handling Solutions",
    ogDescription: "Browse our complete range of liquid waste, solid waste, industrial vacuum, and special purpose equipment.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  },
  spares: {
    title: "Spares & Service - Spare Parts for Waste Handling Equipment | McRAYGOR®",
    description: "Comprehensive spare parts catalog for sewer cleaning machines and waste handling equipment. Sewer cleaning rods, jetting nozzles, jetting hoses, wear parts, and accessories.",
    keywords: "sewer cleaning spare parts, jetting nozzles, jetting hoses, sewer rods, waste handling equipment spares, maintenance parts",
    canonical: `${BASE_URL}/spares`,
    ogTitle: "McRAYGOR Spares & Service",
    ogDescription: "Complete spare parts catalog with fast delivery and technical support.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  },
  csr: {
    title: "CSR Initiatives - Corporate Social Responsibility | McRAYGOR®",
    description: "McRAYGOR's commitment to eliminating manual scavenging, worker safety, and environmental protection through mechanized sanitation solutions. Engineering social change.",
    keywords: "CSR initiatives, manual scavenging elimination, worker safety, sanitation worker dignity, environmental protection, mechanized sanitation",
    canonical: `${BASE_URL}/csr`,
    ogTitle: "McRAYGOR CSR - Engineering Social Change",
    ogDescription: "Committed to eliminating manual scavenging and ensuring worker safety through mechanized sanitation technology.",
    ogImage: `${BASE_URL}/images/csr-hero.png`,
    ogType: "website",
  },
  rd: {
    title: "Research & Development - Innovation in Waste Handling | McRAYGOR®",
    description: "McRAYGOR's in-house R&D focuses on product validation, continuous innovation, custom engineering, and pioneering technology in mechanized sanitation equipment.",
    keywords: "R&D, research and development, product innovation, custom engineering, waste handling technology, sanitation equipment development",
    canonical: `${BASE_URL}/rd`,
    ogTitle: "McRAYGOR R&D - Precision Engineering",
    ogDescription: "In-house R&D driving innovation in municipal and industrial waste handling technology.",
    ogImage: `${BASE_URL}/images/rd-hero.png`,
    ogType: "website",
  },
  governmentTender: {
    title: "Government & Tender Support - GeM Portal | McRAYGOR®",
    description: "Dedicated support for government procurement and tender processes. GeM portal registered. Technical specification matching, compliance documentation, and bid preparation support.",
    keywords: "government tenders, GeM portal, municipal procurement, tender support, government contracts, public sector procurement",
    canonical: `${BASE_URL}/government-tender`,
    ogTitle: "McRAYGOR Government & Tender Support",
    ogDescription: "Comprehensive support for government procurement with GeM portal registration and dedicated tender desk.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  },
  contact: {
    title: "Contact Us - Get in Touch | McRAYGOR®",
    description: "Contact McRAYGOR for machine enquiries, tender support, spares, and service requirements. Located in Gurugram, Haryana. Phone: +91 8447745599, Email: support@mcraygor.com",
    keywords: "contact McRAYGOR, enquiry, quote request, Gurugram office, customer support, technical support",
    canonical: `${BASE_URL}/contact`,
    ogTitle: "Contact McRAYGOR",
    ogDescription: "Get in touch for machine enquiries, tender support, and service requirements.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  },
  sitemap: {
    title: "Sitemap - Website Navigation | McRAYGOR®",
    description: "Complete sitemap of McRAYGOR website. Browse all pages including products, services, company information, and resources.",
    keywords: "sitemap, website navigation, site structure, McRAYGOR pages",
    canonical: `${BASE_URL}/sitemap`,
    ogTitle: "McRAYGOR Sitemap",
    ogDescription: "Complete overview of all pages and sections on the McRAYGOR website.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  },
  privacyPolicy: {
    title: "Privacy Policy & Legal Disclaimer | McRAYGOR®",
    description: "McRAYGOR Privacy Policy and legal disclaimer. Information about intellectual property protection, legal restrictions, and patented technologies.",
    keywords: "privacy policy, legal disclaimer, intellectual property, McRAYGOR legal, terms and conditions, data protection",
    canonical: `${BASE_URL}/privacy-policy`,
    ogTitle: "McRAYGOR Privacy Policy & Legal Disclaimer",
    ogDescription: "Privacy policy and legal information for McRAYGOR Mechanicals Infrastructure.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  },
  projects: {
    title: "Projects & Applications - Case Studies | McRAYGOR®",
    description: "Explore McRAYGOR's global impact cases across government, private, and international sectors. Real-world applications of municipal and industrial waste handling equipment.",
    keywords: "case studies, project applications, municipal projects, government contracts, industrial applications, McRAYGOR projects",
    canonical: `${BASE_URL}/projects`,
    ogTitle: "McRAYGOR Projects - Global Impact Cases",
    ogDescription: "Real-world case studies demonstrating McRAYGOR's equipment in action across diverse sectors.",
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "website",
  },
};

// Product-specific SEO metadata generator
export function getProductSEO(slug: string, productName: string, category: string, description: string): SEOMetadata {
  return {
    title: `${productName} - ${category} Equipment | McRAYGOR®`,
    description: `${description} Manufactured by McRAYGOR. Get specifications, applications, and request a quote for ${productName}.`,
    keywords: `${productName.toLowerCase()}, ${category.toLowerCase()}, waste handling equipment, municipal equipment, industrial equipment, McRAYGOR`,
    canonical: `${BASE_URL}/products/${slug}`,
    ogTitle: productName,
    ogDescription: description,
    ogImage: DEFAULT_OG_IMAGE,
    ogType: "product",
  };
}

// Helper function to update document head
export function updatePageSEO(metadata: SEOMetadata) {
  // Update title
  document.title = metadata.title;

  // Update or create meta tags
  const metaTags = [
    { name: "description", content: metadata.description },
    { name: "keywords", content: metadata.keywords },
    { property: "og:title", content: metadata.ogTitle || metadata.title },
    { property: "og:description", content: metadata.ogDescription || metadata.description },
    { property: "og:image", content: metadata.ogImage || DEFAULT_OG_IMAGE },
    { property: "og:type", content: metadata.ogType || "website" },
    { property: "og:url", content: metadata.canonical },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: metadata.ogTitle || metadata.title },
    { name: "twitter:description", content: metadata.ogDescription || metadata.description },
    { name: "twitter:image", content: metadata.ogImage || DEFAULT_OG_IMAGE },
  ];

  metaTags.forEach(({ name, property, content }) => {
    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    let element = document.querySelector(selector);

    if (!element) {
      element = document.createElement("meta");
      if (name) element.setAttribute("name", name);
      if (property) element.setAttribute("property", property);
      document.head.appendChild(element);
    }

    element.setAttribute("content", content);
  });

  // Update canonical link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", metadata.canonical);
}
