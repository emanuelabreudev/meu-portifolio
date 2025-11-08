import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);
  const [allProjects, setAllProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(allProjects.length / itemsPerPage);

  // Fetch APENAS projetos PINNED do GitHub
  useEffect(() => {
    const fetchPinnedRepos = async () => {
      setIsLoading(true);
      try {
        // Query GraphQL para buscar APENAS repositórios pinned
        const query = `
          query {
            user(login: "emanuelabreudev") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    name
                    description
                    url
                    stargazerCount
                    forkCount
                    primaryLanguage {
                      name
                    }
                    repositoryTopics(first: 5) {
                      nodes {
                        topic {
                          name
                        }
                      }
                    }
                    openGraphImageUrl
                  }
                }
              }
            }
          }
        `;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Nota: Em produção, você deve usar uma variável de ambiente
            // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();

        if (data.data?.user?.pinnedItems?.nodes) {
          const repos = data.data.user.pinnedItems.nodes;

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
              "Projeto open source fixado no GitHub. Consulte o repositório para mais detalhes.",
            impact: [
              { label: "Stars", value: `⭐ ${repo.stargazerCount}` },
              { label: "Forks", value: `🔱 ${repo.forkCount}` },
              {
                label: "Linguagem",
                value: repo.primaryLanguage?.name || "N/A",
              },
            ],
            stack:
              repo.repositoryTopics?.nodes
                ?.map((t: any) => t.topic.name)
                ?.slice(0, 5) ||
              (repo.primaryLanguage?.name ? [repo.primaryLanguage.name] : []),
            color: index % 2 === 0 ? "#17A2B8" : "#FF6B6B",
            image:
              repo.openGraphImageUrl ||
              `https://opengraph.githubassets.com/1/emanuelabreudev/${repo.name}`,
            url: repo.url,
          }));

          setAllProjects(githubProjects);
        } else {
          // Fallback: se GraphQL falhar, tenta API REST (mas só mostra se estiver pinned)
          console.warn("GraphQL não retornou dados, tentando fallback...");
          setAllProjects([]);
        }
      } catch (error) {
        console.error("Erro ao buscar projetos pinned do GitHub:", error);
        setAllProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  // Auto-advance carousel - AUMENTADO PARA 8 SEGUNDOS
  useEffect(() => {
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 8000); // 8 segundos

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
            Projetos em Destaque no GitHub
          </h2>
          <p className="text-[#0F1724]/70 dark:text-white/70 max-w-2xl mx-auto">
            Meus principais projetos open source com código disponível para
            consulta.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative mb-16">
          {/* Navigation Buttons - DESIGN MODERNO */}
          {totalPages > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-10 pointer-events-none">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between">
                  <motion.button
                    onClick={prevPage}
                    whileHover={{ scale: 1.1, x: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="pointer-events-auto group bg-white dark:bg-[#0F1724] border-2 border-[#17A2B8] hover:bg-[#17A2B8] hover:border-[#17A2B8] shadow-xl hover:shadow-2xl hover:shadow-[#17A2B8]/30 rounded-full p-4 transition-all duration-300"
                  >
                    <ChevronLeft className="h-6 w-6 text-[#17A2B8] group-hover:text-white transition-colors" />
                  </motion.button>
                  <motion.button
                    onClick={nextPage}
                    whileHover={{ scale: 1.1, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    className="pointer-events-auto group bg-white dark:bg-[#0F1724] border-2 border-[#17A2B8] hover:bg-[#17A2B8] hover:border-[#17A2B8] shadow-xl hover:shadow-2xl hover:shadow-[#17A2B8]/30 rounded-full p-4 transition-all duration-300"
                  >
                    <ChevronRight className="h-6 w-6 text-[#17A2B8] group-hover:text-white transition-colors" />
                  </motion.button>
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
            {isLoading ? (
              // Loading skeletons
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
            ) : currentProjects.length > 0 ? (
              currentProjects.map((project, index) => (
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
                      <div
                        className="absolute inset-0 opacity-60"
                        style={{
                          background: `linear-gradient(to bottom, transparent 0%, ${project.color}15 100%)`,
                        }}
                      />
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

                      <h3 className="mb-2 text-[#0F1724] dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-[#0F1724]/60 dark:text-white/60 mb-4">
                        {project.client}
                      </p>

                      {project.description && (
                        <p className="text-[#0F1724]/70 dark:text-white/70 mb-6">
                          {project.description}
                        </p>
                      )}

                      {/* Impact Metrics */}
                      {project.impact && project.impact.length > 0 && (
                        <div className="space-y-3 mb-6">
                          {project.impact.map((metric: any, idx: number) => (
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
                            {project.stack.map((tech: string, idx: number) => (
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

                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}05, transparent)`,
                      }}
                    />
                  </a>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-20">
                <p className="text-[#0F1724]/60 dark:text-white/60 text-lg">
                  Nenhum projeto fixado encontrado. Configure seus projetos
                  pinned no GitHub.
                </p>
              </div>
            )}
          </motion.div>

          {/* Pagination Dots - COM MAIS ESPAÇO */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-20">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToPage(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "w-12 h-3 bg-[#17A2B8] shadow-lg shadow-[#17A2B8]/50"
                      : "w-3 h-3 bg-[#0F1724]/20 dark:bg-white/20 hover:bg-[#17A2B8]/50"
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
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-[#17A2B8]/10 via-[#FF6B6B]/10 to-[#17A2B8]/10 dark:from-[#17A2B8]/20 dark:via-[#FF6B6B]/20 dark:to-[#17A2B8]/20 rounded-2xl border border-[#17A2B8]/20">
            <div className="flex-1 text-left">
              <h3 className="text-[#0F1724] dark:text-white mb-2">
                Gostou dos projetos?
              </h3>
              <p className="text-[#0F1724]/70 dark:text-white/70">
                Veja todos no meu GitHub ou vamos conversar sobre seu projeto!
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  window.open("https://github.com/emanuelabreudev", "_blank")
                }
                className="px-6 py-3 bg-[#0F1724] hover:bg-[#0F1724]/90 dark:bg-white dark:hover:bg-white/90 text-white dark:text-[#0F1724] rounded-xl transition-colors shadow-lg flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                Ver GitHub
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-[#17A2B8] hover:bg-[#17A2B8]/90 text-white rounded-xl transition-colors shadow-lg shadow-[#17A2B8]/25 whitespace-nowrap"
              >
                Falar Comigo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
