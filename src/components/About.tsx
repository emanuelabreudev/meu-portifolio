import { motion } from "motion/react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "../assets/profile.png";

const skills = [
  { name: "Node.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Python", level: 85 },
  { name: "PostgreSQL", level: 88 },
  { name: "MongoDB", level: 82 },
  { name: "AWS", level: 80 },
  { name: "Docker", level: 85 },
  { name: "REST APIs", level: 95 },
];

const experience = [
  {
    icon: Briefcase,
    title: "Engenheiro de Software",
    period: "2019 - Presente",
    description:
      "Desenvolvimento de soluções escaláveis em Node.js e Python. Microserviços, APIs REST e infraestrutura cloud.",
    color: "#17A2B8",
  },
  {
    icon: Code2,
    title: "Desenvolvedor Full Stack",
    period: "2017 - 2019",
    description:
      "Criação de aplicações web completas com foco em performance, SEO e experiência do usuário.",
    color: "#FF6B6B",
  },
  {
    icon: GraduationCap,
    title: "Estudante de Ciência de Dados & IA",
    period: "2023 - Presente",
    description:
      "Especialização em Machine Learning, estatística e análise de dados aplicados a negócios.",
    color: "#17A2B8",
  },
];

export function About() {
  const downloadCV = () => {
    alert(
      "Download do CV será implementado. Por enquanto, entre em contato via formulário."
    );
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#17A2B8]/5 rounded-full blur-3xl" />
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
            <span className="px-4 py-2 bg-[#17A2B8]/10 dark:bg-[#17A2B8]/20 text-[#17A2B8] rounded-full uppercase tracking-wider font-mono">
              Sobre
            </span>
          </div>
          <h2 className="mb-6 text-[#0F1724] dark:text-white max-w-3xl mx-auto">
            Emanuel Abreu
          </h2>
          <p className="text-[#0F1724]/70 dark:text-white/70 max-w-2xl mx-auto">
            Engenheiro de software apaixonado por transformar desafios complexos
            em soluções simples e impactantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-md">
              <div className="relative bg-white dark:bg-[#0F1724]/50 border-2 border-[#0F1724]/10 dark:border-white/10 rounded-2xl p-8 text-center">
                {/* Profile Image */}
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#17A2B8] to-[#FF6B6B] rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                    <img
                      src={profileImage}
                      alt="Emanuel Abreu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name and Title */}
                <h3 className="mb-2 text-[#0F1724] dark:text-white">
                  Emanuel Abreu
                </h3>
                <p className="text-[#17A2B8] mb-6">Engenheiro de Software</p>

                {/* Social Links */}
                <div className="flex justify-center gap-3 mb-6">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      window.open(
                        "https://github.com/emanuelabreudev",
                        "_blank"
                      )
                    }
                    className="border-[#0F1724]/20 dark:border-white/20 hover:border-[#17A2B8] hover:bg-[#17A2B8]/10 hover:text-[#17A2B8] transition-colors"
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
                    className="border-[#0F1724]/20 dark:border-white/20 hover:border-[#17A2B8] hover:bg-[#17A2B8]/10 hover:text-[#17A2B8] transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      window.open("mailto:emanuelabreudev@gmail.com", "_blank")
                    }
                    className="border-[#0F1724]/20 dark:border-white/20 hover:border-[#17A2B8] hover:bg-[#17A2B8]/10 hover:text-[#17A2B8] transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>

                {/* Download CV Button */}
                <Button
                  onClick={downloadCV}
                  className="w-full bg-[#17A2B8] hover:bg-[#17A2B8]/90 text-white mb-6"
                  size="lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#0F1724]/10 dark:border-white/10">
                  <div>
                    <div className="text-[#17A2B8] mb-1">5+</div>
                    <div className="text-[#0F1724]/60 dark:text-white/60">
                      Anos de experiência
                    </div>
                  </div>
                  <div>
                    <div className="text-[#17A2B8] mb-1">20+</div>
                    <div className="text-[#0F1724]/60 dark:text-white/60">
                      Projetos completos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="space-y-4 text-[#0F1724]/90 dark:text-white/90">
              <p>
                Como engenheiro de software especializado em backend e
                inteligência artificial, minha missão é{" "}
                <strong className="text-[#17A2B8]">
                  democratizar o acesso à tecnologia
                </strong>{" "}
                de ponta para negócios locais e criadores de conteúdo.
              </p>
              <p>
                Acredito que toda empresa, independente do tamanho, merece
                ferramentas que automatizam processos, geram insights e escalam
                resultados. É isso que eu construo:
                <strong className="text-[#0F1724] dark:text-white">
                  {" "}
                  soluções práticas que funcionam
                </strong>
                .
              </p>
            </div>

            {/* Experience Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-[#17A2B8]" />
                <h3 className="text-[#0F1724] dark:text-white">Experiência</h3>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => {
                  const Icon = exp.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4 p-4 rounded-lg bg-white dark:bg-[#0F1724]/30 border border-[#0F1724]/10 dark:border-white/10 hover:border-[#17A2B8]/50 transition-colors"
                    >
                      <div className="shrink-0">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${exp.color}15` }}
                        >
                          <Icon
                            className="h-6 w-6"
                            style={{ color: exp.color }}
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[#0F1724] dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="text-[#17A2B8]">{exp.period}</p>
                        <p className="text-[#0F1724]/70 dark:text-white/70">
                          {exp.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-white dark:bg-[#0F1724]/30 border-2 border-[#0F1724]/10 dark:border-white/10 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Code2 className="h-6 w-6 text-[#17A2B8]" />
                <h3 className="text-[#0F1724] dark:text-white">
                  Expertise Técnico
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="uppercase tracking-wider text-[#0F1724]/60 dark:text-white/60">
                    Backend & Cloud
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "TypeScript",
                      "Python",
                      "Express",
                      "FastAPI",
                      "AWS",
                      "Docker",
                    ].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#17A2B8]/10 text-[#17A2B8] rounded-md font-mono border border-[#17A2B8]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="uppercase tracking-wider text-[#0F1724]/60 dark:text-white/60">
                    Databases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["PostgreSQL", "MongoDB", "Redis"].map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#17A2B8]/10 text-[#17A2B8] rounded-md font-mono border border-[#17A2B8]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="uppercase tracking-wider text-[#0F1724]/60 dark:text-white/60">
                    AI & Integrações
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["OpenAI", "REST APIs", "GraphQL", "WhatsApp API"].map(
                      (tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-[#17A2B8]/10 text-[#17A2B8] rounded-md font-mono border border-[#17A2B8]/20"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Study Areas */}
                <div className="pt-6 border-t border-[#0F1724]/10 dark:border-white/10 space-y-3">
                  <h4 className="uppercase tracking-wider text-[#0F1724]/60 dark:text-white/60">
                    Áreas de Estudo Contínuo
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#17A2B8]"></div>
                      <span className="text-[#0F1724]/90 dark:text-white/90">
                        Ciência de Dados & Estatística
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#17A2B8]"></div>
                      <span className="text-[#0F1724]/90 dark:text-white/90">
                        Inteligência Artificial & Machine Learning
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#17A2B8]"></div>
                      <span className="text-[#0F1724]/90 dark:text-white/90">
                        Arquitetura de Sistemas Distribuídos
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
