import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Contact } from "./pages/Contact";
import { CSR } from "./pages/CSR";
import { RD } from "./pages/RD";
import { GovernmentTender } from "./pages/GovernmentTender";
import { Spares } from "./pages/Spares";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "products/:slug", Component: ProductDetail },
      { path: "spares", Component: Spares },
      { path: "csr", Component: CSR },
      { path: "rd", Component: RD },
      { path: "government-tender", Component: GovernmentTender },
      { path: "contact", Component: Contact },
    ],
  },
]);
