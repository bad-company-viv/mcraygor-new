import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Industries } from "./pages/Industries";
import { IndustryDetail } from "./pages/IndustryDetail";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Contact } from "./pages/Contact";
import { GovernmentTender } from "./pages/GovernmentTender";
import { Spares } from "./pages/Spares";
import { Sitemap } from "./pages/Sitemap";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";
import { BlogDetail } from "./pages/BlogDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "products/:slug", Component: ProductDetail },
      // Trademark Direct Links
      { path: "COMBINATOR", Component: ProductDetail },
      { path: "HYPERVAC", Component: ProductDetail },
      { path: "McGRAB", Component: ProductDetail },
      { path: "McJET", Component: ProductDetail },
      { path: "POWERBUCKET", Component: ProductDetail },
      { path: "McRODDER", Component: ProductDetail },
      { path: "VYUK", Component: ProductDetail },
      { path: "PAC", Component: ProductDetail },
      { path: "McCLEAN", Component: ProductDetail },
      { path: "HYPERVAC-IVC", Component: ProductDetail },
      { path: "McFOGGER", Component: ProductDetail },
      { path: "McLIFT", Component: ProductDetail },
      { path: "MOSRU", Component: ProductDetail },
      { path: "industries", Component: Industries },
      { path: "industries/:industryId", Component: IndustryDetail },
      { path: "projects", Component: Projects },
      { path: "projects/:slug", Component: ProjectDetail },
      { path: "spares", Component: Spares },
      { path: "government-tender", Component: GovernmentTender },
      { path: "contact", Component: Contact },
      { path: "blog/:slug", Component: BlogDetail },
      { path: "sitemap", Component: Sitemap },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-of-use", Component: TermsOfUse },
    ],
  },
]);
