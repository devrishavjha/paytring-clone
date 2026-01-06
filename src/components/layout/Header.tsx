import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">P</span>
            </div>
            <span className="font-bold text-xl text-foreground">Paytring</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-body-sm text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-background border-b border-border shadow-lg"
        >
          <nav className="container-custom py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-body text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border mt-2">
              <Button variant="hero" size="lg" className="w-full">
                Request Demo
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
