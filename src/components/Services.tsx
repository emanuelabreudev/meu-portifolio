import { motion } from "motion/react";
import { Zap, BarChart3, Bot, Globe, Workflow, Database } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Automação & Integrações",
    description:
      "Reduza tarefas manuais, integre WhatsApp, e-mails e redes sociais.",
    metrics: "20h economizadas/semana",
    color: "#17A2B8",
  },
  {
    icon: Bot,
    title: "Agentes de IA & Chatbots",
    description: "Atendimento automatizado 24/7 com inteligência artificial.",
    metrics: "+45% conversão de leads",
    color: "#FF6B6B",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description:
      "Dashboards personalizados com métricas acionáveis em tempo real.",
    metrics: "Decisões baseadas em dados",
    color: "#17A2B8",
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Sites responsivos otimizados para conversão e SEO.",
    metrics: "Alta performance garantida",
    color: "#FF6B6B",
  },
  {
    icon: Workflow,
    title: "APIs & Integrações",
    description: "APIs robustas e integração entre diferentes sistemas.",
    metrics: "Escalável e seguro",
    color: "#17A2B8",
  },
  {
    icon: Database,
    title: "Backend & Cloud",
    description: "Soluções backend escaláveis com Node.js, Python e AWS.",
    metrics: "99.9% disponibilidade",
    color: "#FF6B6B",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#17A2B8]/5 rounded-full blur-3xl" />
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
            <span className="px-4 py-2 bg-[#17A2B8]/10 dark:bg-[#17A2B8]/20 text-[#17A2B8] rounded-full">
              Serviços
            </span>
          </div>
          <h2 className="mb-6 text-[#0F1724] dark:text-white max-w-3xl mx-auto">
            Soluções completas de tecnologia para seu negócio
          </h2>
          <p className="text-[#0F1724]/70 dark:text-white/70 max-w-2xl mx-auto">
            Do backend à IA, crio sistemas que automatizam processos e geram
            resultados mensuráveis.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative bg-white dark:bg-[#0F1724]/50 border border-[#0F1724]/10 dark:border-white/10 rounded-2xl p-8 h-full hover:border-[#17A2B8]/50 transition-all duration-300 hover:shadow-xl">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-[#0F1724] dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-[#0F1724]/70 dark:text-white/70 mb-4">
                    {service.description}
                  </p>

                  {/* Metrics */}
                  <div className="pt-4 border-t border-[#0F1724]/10 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: service.color }}
                      />
                      <span
                        className="font-mono"
                        style={{ color: service.color }}
                      >
                        {service.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Hover accent */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}08, transparent)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#0F1724]/60 dark:text-white/60 mb-6">
            Cada solução é personalizada para as necessidades específicas do seu
            negócio
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-[#17A2B8] hover:gap-4 transition-all duration-300"
          >
            <span>Ver como posso ajudar seu negócio</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
