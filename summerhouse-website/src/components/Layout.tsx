import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-cream-50">
      <div className="sticky top-0 z-50">
        <Header onMenuToggle={() => setMenuOpen((v) => !v)} />
      </div>
      <div className="flex flex-1 items-start">
        <Sidebar open={menuOpen} onNavigate={() => setMenuOpen(false)} />
        <main className="min-w-0 flex-1">
          <div key={location.pathname} className="animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
