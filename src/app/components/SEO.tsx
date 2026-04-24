import { useEffect } from "react";
import { useLocation } from "react-router";
import { updatePageSEO, seoConfig, type SEOMetadata } from "../utils/seo";

interface SEOProps {
  metadata?: SEOMetadata;
  pageKey?: keyof typeof seoConfig;
}

export function SEO({ metadata, pageKey }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    // Use provided metadata or get from config
    const seoData = metadata || (pageKey ? seoConfig[pageKey] : null);

    if (seoData) {
      updatePageSEO(seoData);
    }
  }, [location.pathname, metadata, pageKey]);

  return null;
}
