import { useEffect, useRef } from "react";
import { Outlet } from "react-router";
import { PreHeader } from "./PreHeader";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import ScrollToTop from "./ScrollToTop";

export function Layout() {
  const headerStackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;

    const updateHeaderHeight = () => {
      const height = headerStackRef.current?.offsetHeight ?? 0;
      root.style.setProperty("--site-header-height", `${height}px`);
    };

    updateHeaderHeight();

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && headerStackRef.current) {
      observer = new ResizeObserver(updateHeaderHeight);
      observer.observe(headerStackRef.current);
    }

    window.addEventListener("resize", updateHeaderHeight);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", updateHeaderHeight);
      root.style.removeProperty("--site-header-height");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <ScrollToTop />
      <div 
        ref={headerStackRef} 
        className="fixed top-0 left-0 w-full z-[100] flex-shrink-0 will-change-transform"
        style={{ transform: 'translateZ(0)' }}
      >
        <PreHeader />
        <Header />
      </div>
      <main className="flex-1" style={{ paddingTop: 'var(--site-header-height)' }}>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
