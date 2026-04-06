import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Vision } from "./pages/Vision";
import { Legacy } from "./pages/Legacy";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Industries } from "./pages/Industries";
import { IndustryDetail } from "./pages/IndustryDetail";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { Contact } from "./pages/Contact";
import { CSR } from "./pages/CSR";
import { RD } from "./pages/RD";
import { GovernmentTender } from "./pages/GovernmentTender";
import { Spares } from "./pages/Spares";
import { Sitemap } from "./pages/Sitemap";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfUse } from "./pages/TermsOfUse";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "vision", Component: Vision },
      { path: "legacy", Component: Legacy },
      { path: "products", Component: Products },
      { path: "products/:slug", Component: ProductDetail },
      { path: "industries", Component: Industries },
      { path: "industries/:industryId", Component: IndustryDetail },
      { path: "projects", Component: Projects },
      { path: "projects/:slug", Component: ProjectDetail },
      { path: "spares", Component: Spares },
      { path: "csr", Component: CSR },
      { path: "rd", Component: RD },
      { path: "government-tender", Component: GovernmentTender },
      { path: "contact", Component: Contact },
      { path: "sitemap", Component: Sitemap },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms-of-use", Component: TermsOfUse },
    ],
  },
]);
