import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import logoLightImage from "../assets/logo-light.png";
import logoDarkImage from "../assets/logo-dark.png";

const footerSections = [
  {
    title: "Links Rápidos",
    links: [
      { label: "Serviços", id: "services" },
      { label: "Portfólio", id: "portfolio" },
      { label: "Sobre", id: "about" },
      { label: "Contato", id: "contact" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Automação & Integrações" },
      { label: "Agentes de IA" },
      { label: "Dashboards" },
      { label: "Sites & Landing Pages" },
      { label: "APIs Backend" },
      { label: "Consultoria" },
    ],
  },
  {
    title: "Tecnologias",
    links: [
      { label: "Node.js" },
      { label: "TypeScript" },
      { label: "Python" },
      { label: "React" },
      { label: "AWS" },
      { label: "Docker" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id?: string) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0F1724] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#17A2B8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B6B]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src={logoLightImage}
                alt="Emanuel Abreu"
                className="h-16 dark:hidden"
              />
              <img
                src={logoDarkImage}
                alt="Emanuel Abreu"
                className="h-16 hidden dark:block"
              />
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Engenheiro de software especializado em backend e IA. Transformo
              tecnologia em resultados práticos para negócios locais.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open("https://github.com/emanuelabreudev", "_blank")
                }
                className="border-white/20 hover:border-[#17A2B8] hover:bg-[#17A2B8]/10 hover:text-[#17A2B8] transition-colors"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/emanuelabreudev",
                    "_blank"
                  )
                }
                className="border-white/20 hover:border-[#17A2B8] hover:bg-[#17A2B8]/10 hover:text-[#17A2B8] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open("mailto:emanuelabreudev@gmail.com", "_blank")
                }
                className="border-white/20 hover:border-[#17A2B8] hover:bg-[#17A2B8]/10 hover:text-[#17A2B8] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-white/60">
              <p>emanuelabreudev@gmail.com</p>
              <p>+55 (85) 98142-4244</p>
              <p>Fortaleza, CE - Brasil</p>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {link.id ? (
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-white/70 hover:text-[#17A2B8] transition-colors"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <span className="text-white/70">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-white/60">
            <p>© {currentYear} Emanuel Abreu.</p>
            <p className="flex items-center gap-2">
              Desenvolvido com{" "}
              <Heart className="h-4 w-4 text-[#FF6B6B] fill-[#FF6B6B]" />e
              tecnologia
            </p>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            className="border-white/20 hover:border-[#17A2B8] hover:bg-[#17A2B8]/10 hover:text-[#17A2B8] transition-colors"
          >
            <ArrowUp className="mr-2 h-4 w-4" />
            Voltar ao topo
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-white/40 text-center">
            Este site não se destina à coleta de informações pessoais sensíveis
            (PII). Dados de contato são tratados com confidencialidade total e
            não são compartilhados com terceiros.
          </p>
        </div>
      </div>
    </footer>
  );
}
