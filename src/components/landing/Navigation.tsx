import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content } from "@/content/landing";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (item: string) => {
    const sectionId = item.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white tracking-tight">
              {content.nav.logo}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {content.nav.menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-slate-800"
            >
              {content.nav.ctaSecondary}
            </Button>
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
              {content.nav.ctaPrimary}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed inset-y-0 right-0 w-full sm:w-80 bg-slate-950 border-l border-slate-800 shadow-2xl"
          >
            <div className="flex flex-col h-full pt-20 px-6 pb-6">
              <div className="flex flex-col space-y-4 flex-1">
                {content.nav.menuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-slate-300 hover:text-white transition-colors text-lg font-medium text-left py-2"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="flex flex-col space-y-3 pt-6 border-t border-slate-800">
                <Button
                  variant="outline"
                  className="w-full border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  {content.nav.ctaSecondary}
                </Button>
                <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                  {content.nav.ctaPrimary}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
