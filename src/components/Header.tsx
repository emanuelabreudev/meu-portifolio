import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import logoLightImage from "../assets/logo-light.png";
import logoDarkImage from "../assets/logo-dark.png";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const navItems = [
  { label: "Serviços", id: "services" },
  { label: "Portfólio", id: "portfolio" },
  { label: "Sobre", id: "about" },
  { label: "Contato", id: "contact" },
];

export function Header({ theme, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#0F1724]/80 backdrop-blur-md shadow-lg border-b border-[#0F1724]/10 dark:border-white/10"
          : "bg-white/80 dark:bg-[#0F1724]/80 backdrop-blur-md shadow-lg border-b border-[#0F1724]/10 dark:border-white/10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - MAIOR E RESPONSIVO */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={logoLightImage}
              alt="Emanuel Abreu"
              className="h-14 sm:h-16 md:h-20 w-auto dark:hidden transition-all duration-300 group-hover:scale-105"
            />
            <img
              src={logoDarkImage}
              alt="Emanuel Abreu"
              className="h-14 sm:h-16 md:h-20 w-auto hidden dark:block transition-all duration-300 group-hover:scale-105"
            />
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#0F1724] dark:text-white hover:text-[#17A2B8] dark:hover:text-[#17A2B8] transition-colors relative group text-base font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#17A2B8] group-hover:w-full transition-all duration-300" />
              </button>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 hover:bg-[#0F1724]/5 dark:hover:bg-white/5"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </motion.div>
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#17A2B8] hover:bg-[#17A2B8]/90 text-white shadow-md shadow-[#17A2B8]/25"
            >
              Solicitar Orçamento
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-[#0F1724]/5 dark:hover:bg-white/5"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-[#0F1724]/5 dark:hover:bg-white/5"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 py-6 border-t border-[#0F1724]/10 dark:border-white/10">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-[#0F1724] dark:text-white hover:text-[#17A2B8] dark:hover:text-[#17A2B8] transition-colors py-2 text-base font-medium"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-[#17A2B8] hover:bg-[#17A2B8]/90 text-white w-full shadow-md shadow-[#17A2B8]/25"
                  >
                    Solicitar Orçamento
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
