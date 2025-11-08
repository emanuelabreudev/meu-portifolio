import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

const staticProjects = [
  {
    title: "Sistema de Agendamentos Automatizado",
    client: "Clínica de Estética",
    segment: "Saúde & Bem-estar",
    description:
      "Chatbot com IA integrado ao WhatsApp Business + calendário automático + lembretes.",
    problem:
      "Perda de 30% dos agendamentos por demora no retorno. Sobrecarga da recepcionista.",
    impact: [
      { label: "Conversão", value: "+45%" },
      { label: "Tempo economizado", value: "20h/sem" },
      { label: "Satisfação", value: "92%" },
    ],
    stack: ["Node.js", "TypeScript", "PostgreSQL", "WhatsApp API", "OpenAI"],
    color: "#17A2B8",
    image:
      "https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwbWVzc2FnaW5nJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MjYxMTE1OHww&ixlib=rb-4.1.0&q=80&w=1080",
    url: "#",
  },
  {
    title: "Dashboard de Performance",
    client: "Salão de Beleza",
    segment: "Beleza & Estética",
    description:
      "Dashboard web com métricas em tempo real: receita por serviço, ticket médio, retenção.",
    problem:
      "Dificuldade em identificar serviços rentáveis e acompanhar performance de profissionais.",
    impact: [
      { label: "Ticket médio", value: "+35%" },
      { label: "Decisões", value: "Data-driven" },
      { label: "ROI", value: "280%" },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Recharts"],
    color: "#FF6B6B",
    image:
      "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyNTI2NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    url: "#",
  },
  {
    title: "Automação de Marketing",
    client: "Consultório Odontológico",
    segment: "Saúde",
    description:
      "Sistema de automação de e-mails e SMS personalizados baseado em histórico do paciente.",
    problem:
      "Baixa taxa de retorno após primeira consulta. Sem processo estruturado de follow-up.",
    impact: [
      { label: "Taxa de retorno", value: "+60%" },
      { label: "Redução de faltas", value: "85%" },
      { label: "ROI 3 meses", value: "320%" },
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SendGrid", "Twilio"],
    color: "#17A2B8",
    image:
      "https://images.unsplash.com/photo-1566918621183-ff90d3e0553f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzYyNjExMTU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    url: "#",
  },
];

export function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);
  const [allProjects, setAllProjects] = useState(staticProjects);
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(allProjects.length / itemsPerPage);

  // Fetch GitHub repos
  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/emanuelabreudev/repos?sort=updated&per_page=2"
        );
        const repos = await response.json();

        if (Array.isArray(repos)) {
          const githubProjects = repos.map((repo: any, index: number) => ({
            title: repo.name
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l: string) => l.toUpperCase()),
            client: "Projeto Open Source",
            segment: "GitHub",
            description:
              repo.description ||
              "Projeto de desenvolvimento disponível no GitHub",
            problem:
              "Projeto open source hospedado no GitHub. Consulte o repositório para detalhes.",
            impact: [
              { label: "Stars", value: `⭐ ${repo.stargazers_count}` },
              { label: "Forks", value: `🔱 ${repo.forks_count}` },
              { label: "Linguagem", value: repo.language || "N/A" },
            ],
            stack:
              repo.topics?.slice(0, 5) ||
              (repo.language ? [repo.language] : []),
            color: index % 2 === 0 ? "#17A2B8" : "#FF6B6B",
            image: `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`,
            url: repo.html_url,
          }));

          setAllProjects([...staticProjects, ...githubProjects]);
        }
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubRepos();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const currentProjects = allProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-white dark:bg-[#0F1724]/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B6B]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#FF6B6B]/10 dark:bg-[#FF6B6B]/20 text-[#FF6B6B] rounded-full">
              Portfólio
            </span>
          </div>
          <h2 className="mb-6 text-[#0F1724] dark:text-white max-w-3xl mx-auto">
            Projetos que transformaram negócios reais
          </h2>
          <p className="text-[#0F1724]/70 dark:text-white/70 max-w-2xl mx-auto">
            Cases de sucesso com resultados mensuráveis e impacto direto no
            faturamento.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 pointer-events-none">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                  <Button
                    onClick={prevPage}
                    variant="outline"
                    size="icon"
                    className="pointer-events-auto bg-white dark:bg-[#0F1724] border-[#0F1724]/20 dark:border-white/20 hover:bg-[#17A2B8]/10 hover:border-[#17A2B8] shadow-lg"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    onClick={nextPage}
                    variant="outline"
                    size="icon"
                    className="pointer-events-auto bg-white dark:bg-[#0F1724] border-[#0F1724]/20 dark:border-white/20 hover:bg-[#17A2B8]/10 hover:border-[#17A2B8] shadow-lg"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {isLoading
              ? // Loading skeletons
                [1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-[#0F1724]/50 border border-[#0F1724]/10 dark:border-white/10 rounded-2xl overflow-hidden h-[600px] animate-pulse"
                  >
                    <div className="h-48 bg-[#0F1724]/10 dark:bg-white/10" />
                    <div className="p-8 space-y-4">
                      <div className="h-4 bg-[#0F1724]/10 dark:bg-white/10 rounded w-3/4" />
                      <div className="h-4 bg-[#0F1724]/10 dark:bg-white/10 rounded w-1/2" />
                      <div className="h-20 bg-[#0F1724]/10 dark:bg-white/10 rounded" />
                    </div>
                  </div>
                ))
              : currentProjects.map((project, index) => (
                  <motion.div
                    key={`${currentPage}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative bg-white dark:bg-[#0F1724]/50 border border-[#0F1724]/10 dark:border-white/10 rounded-2xl overflow-hidden h-full hover:border-[#17A2B8]/50 transition-all duration-300 hover:shadow-2xl"
                    >
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#F5F7FA] to-[#E5E7EB] dark:from-[#0F1724] dark:to-[#1a2332]">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div
                          className="absolute inset-0 opacity-60"
                          style={{
                            background: `linear-gradient(to bottom, transparent 0%, ${project.color}15 100%)`,
                          }}
                        />
                        {/* Accent bar */}
                        <div
                          className="absolute top-0 left-0 right-0 h-1"
                          style={{ backgroundColor: project.color }}
                        />
                      </div>

                      <div className="p-8">
                        {/* Segment Badge */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className="border-current"
                              style={{ color: project.color }}
                            >
                              {project.segment}
                            </Badge>
                            {project.segment === "GitHub" && (
                              <Github className="h-4 w-4 text-[#0F1724]/40 dark:text-white/40" />
                            )}
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 45 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ExternalLink className="h-5 w-5 text-[#0F1724]/40 dark:text-white/40" />
                          </motion.div>
                        </div>

                        {/* Title and Client */}
                        <h3 className="mb-2 text-[#0F1724] dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-[#0F1724]/60 dark:text-white/60 mb-4">
                          {project.client}
                        </p>

                        {/* Description */}
                        {project.description && (
                          <p className="text-[#0F1724]/70 dark:text-white/70 mb-6">
                            {project.description}
                          </p>
                        )}

                        {/* Impact Metrics */}
                        {project.impact && project.impact.length > 0 && (
                          <div className="space-y-3 mb-6">
                            {project.impact.map((metric, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between p-3 bg-[#F5F7FA] dark:bg-[#0F1724]/30 rounded-lg"
                              >
                                <span className="text-[#0F1724]/70 dark:text-white/70">
                                  {metric.label}
                                </span>
                                <span
                                  className="font-mono"
                                  style={{ color: project.color }}
                                >
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tech Stack */}
                        {project.stack && project.stack.length > 0 && (
                          <div className="pt-6 border-t border-[#0F1724]/10 dark:border-white/10">
                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-[#0F1724]/5 dark:bg-white/5 text-[#0F1724]/70 dark:text-white/70 rounded-lg border border-[#0F1724]/10 dark:border-white/10"
                                >
                                  <code className="font-mono">{tech}</code>
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `linear-gradient(135deg, ${project.color}05, transparent)`,
                        }}
                      />
                    </a>
                  </motion.div>
                ))}
          </motion.div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "w-8 bg-[#17A2B8]"
                      : "w-2 bg-[#0F1724]/20 dark:bg-white/20 hover:bg-[#17A2B8]/50"
                  }`}
                  aria-label={`Ir para página ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-[#17A2B8]/10 via-[#FF6B6B]/10 to-[#17A2B8]/10 dark:from-[#17A2B8]/20 dark:via-[#FF6B6B]/20 dark:to-[#17A2B8]/20 rounded-2xl border border-[#17A2B8]/20">
            <div className="flex-1 text-left">
              <h3 className="text-[#0F1724] dark:text-white mb-2">
                Quer resultados assim no seu negócio?
              </h3>
              <p className="text-[#0F1724]/70 dark:text-white/70">
                Vamos conversar sobre como a tecnologia pode transformar seus
                resultados.
              </p>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-[#17A2B8] hover:bg-[#17A2B8]/90 text-white rounded-xl transition-colors shadow-lg shadow-[#17A2B8]/25 whitespace-nowrap"
            >
              Solicitar Orçamento
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
