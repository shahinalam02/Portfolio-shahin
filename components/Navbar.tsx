import { AnimatePresence, motion } from "framer-motion";
import { AlignRight, ArrowRight, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
          isScrolled ? "pt-4" : "pt-6 md:pt-8"
        }`}
      >
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`
            flex items-center justify-between px-2 md:px-3
            transition-all duration-500 ease-in-out
            ${
              isScrolled
                ? "w-[90%] max-w-5xl py-2 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-brand-green/5"
                : "w-full max-w-7xl py-2 bg-transparent border-transparent"
            }
          `}
        >
          {/* Logo Section */}
          <div className="pl-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-brand-green rounded-3xl p-6 flex items-center justify-center text-white font-bold text-lg group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-green/20">
                SA
              </div>
              <span
                className={`font-display font-bold text-lg tracking-tight transition-opacity duration-300 ${
                  isScrolled ? "hidden lg:block" : "block"
                }`}
              >
                SHAHIN.
              </span>
            </a>
          </div>

          {/* Desktop Nav - Clean Pill Style */}
          <div className="hidden md:flex items-center bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-sm mx-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-6 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-brand-green/10 rounded-full transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side: CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 pr-1">
            <a
              href="#contact"
              className={`
                    hidden md:flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300
                    ${
                      isScrolled
                        ? "bg-brand-green text-white hover:bg-black hover:scale-105"
                        : "bg-white text-black hover:bg-brand-green hover:text-white"
                    }
                `}
            >
              Let's Talk
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>

            <button
              className="md:hidden p-3 text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <AlignRight size={22} strokeWidth={1.5} />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] bg-black/90 flex flex-col items-center justify-center space-y-8"
          >
            <button
              className="absolute top-8 right-8 text-gray-400 hover:text-white p-4 rounded-full border border-white/10 hover:bg-white/10 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <div className="flex flex-col items-center gap-6">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-display font-bold text-white hover:text-brand-green transition-colors hover:scale-105 transform duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 px-10 py-4 bg-brand-green text-black font-bold rounded-full text-lg flex items-center gap-2"
            >
              Let's Talk <ArrowRight size={20} strokeWidth={1.5} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
