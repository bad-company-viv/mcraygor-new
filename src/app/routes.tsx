import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import { Layout } from "./components/layout/Layout";

// Lazy load components for performance
const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Products = lazy(() => import("./pages/Products").then(m => ({ default: m.Products })));
const ProductDetail = lazy(() => import("./pages/ProductDetail").then(m => ({ default: m.ProductDetail })));
const Industries = lazy(() => import("./pages/Industries").then(m => ({ default: m.Industries })));
const IndustryDetail = lazy(() => import("./pages/IndustryDetail").then(m => ({ default: m.IndustryDetail })));
const Projects = lazy(() => import("./pages/Projects").then(m => ({ default: m.Projects })));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail").then(m => ({ default: m.ProjectDetail })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const GovernmentTender = lazy(() => import("./pages/GovernmentTender").then(m => ({ default: m.GovernmentTender })));
const Spares = lazy(() => import("./pages/Spares").then(m => ({ default: m.Spares })));
const Sitemap = lazy(() => import("./pages/Sitemap").then(m => ({ default: m.Sitemap })));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy").then(m => ({ default: m.PrivacyPolicy })));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse").then(m => ({ default: m.TermsOfUse })));
const BlogDetail = lazy(() => import("./pages/BlogDetail").then(m => ({ default: m.BlogDetail })));
const Blogs = lazy(() => import("./pages/Blogs").then(m => ({ default: m.Blogs })));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-[#e8612c] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: "about", element: withSuspense(About) },
      { path: "products", element: withSuspense(Products) },
      { path: "products/:slug", element: withSuspense(ProductDetail) },
      // Trademark Direct Links
      { path: "COMBINATOR", element: withSuspense(ProductDetail) },
      { path: "HYPERVAC", element: withSuspense(ProductDetail) },
      { path: "McGRAB", element: withSuspense(ProductDetail) },
      { path: "McJET", element: withSuspense(ProductDetail) },
      { path: "POWERBUCKET", element: withSuspense(ProductDetail) },
      { path: "McRODDER", element: withSuspense(ProductDetail) },
      { path: "VYUK", element: withSuspense(ProductDetail) },
      { path: "PAC", element: withSuspense(ProductDetail) },
      { path: "McCLEAN", element: withSuspense(ProductDetail) },
      { path: "HYPERVAC-IVC", element: withSuspense(ProductDetail) },
      { path: "McFOGGER", element: withSuspense(ProductDetail) },
      { path: "McLIFT", element: withSuspense(ProductDetail) },
      { path: "MOSRU", element: withSuspense(ProductDetail) },
      { path: "industries", element: withSuspense(Industries) },
      { path: "industries/:industryId", element: withSuspense(IndustryDetail) },
      { path: "projects", element: withSuspense(Projects) },
      { path: "projects/:slug", element: withSuspense(ProjectDetail) },
      { path: "spares", element: withSuspense(Spares) },
      { path: "government-tender", element: withSuspense(GovernmentTender) },
      { path: "contact", element: withSuspense(Contact) },
      { path: "blog", element: withSuspense(Blogs) },
      { path: "blog/:slug", element: withSuspense(BlogDetail) },
      { path: "sitemap", element: withSuspense(Sitemap) },
      { path: "privacy-policy", element: withSuspense(PrivacyPolicy) },
      { path: "terms-of-use", element: withSuspense(TermsOfUse) },
    ],
  },
]);
