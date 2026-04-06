import { useState, useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#F7FAFC] font-onest text-[#16212B]">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#D7E2EA]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#1E4E79] flex items-center justify-center">
              <Icon name="Droplets" size={14} className="text-white" />
            </div>
            <span className="font-semibold text-[#1E4E79] text-[15px] tracking-tight">
              Zurich Plumbing Co.
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-[#1E4E79]"
                    : "text-[#16212B]/70 hover:text-[#1E4E79]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+41XXXXXXXX"
              className="flex items-center gap-1.5 text-sm text-[#1E4E79] font-medium hover:text-[#5E8FB1] transition-colors"
            >
              <Icon name="Phone" size={14} />
              +41 XX XXX XX XX
            </a>
            <Link
              to="/contact"
              className="bg-[#FF8A3D] hover:bg-[#e97a30] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Request Service
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#F7FAFC]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#D7E2EA] px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium ${
                  location.pathname === link.to
                    ? "text-[#1E4E79]"
                    : "text-[#16212B]/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#FF8A3D] text-white text-sm font-semibold px-4 py-2.5 rounded-lg w-full mt-2 text-center"
            >
              Request Service
            </Link>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-[#16212B] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-md bg-[#1E4E79] flex items-center justify-center">
                  <Icon name="Droplets" size={12} className="text-white" />
                </div>
                <span className="font-semibold text-white text-sm">
                  Zurich Plumbing Co.
                </span>
              </Link>
              <p className="text-xs text-white/40">
                Reliable plumbing services in Zürich.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-8 mt-8 pt-6 border-t border-white/5">
            {[
              { icon: "Phone", text: "+41 XX XXX XX XX" },
              { icon: "Mail", text: "hello@zurichplumbing.ch" },
              { icon: "MapPin", text: "Zurich, Switzerland" },
            ].map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-xs text-white/40"
              >
                <Icon name={icon} size={12} className="text-[#5E8FB1]" />
                {text}
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-white/25">
              © 2026 Zurich Plumbing Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
