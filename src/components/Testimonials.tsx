import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carla Mendes",
    role: "Proprietária",
    company: "Estúdio de Beleza",
    content:
      "O sistema de agendamento automatizado mudou completamente minha rotina. Antes eu perdia horas respondendo mensagens. Agora tudo funciona sozinho e minhas clientes adoram a praticidade.",
    rating: 5,
    result: "+45% conversão",
    avatar: "C",
    color: "#17A2B8",
  },
  {
    name: "Dr. Ricardo Santos",
    role: "Dentista",
    company: "Consultório Odontológico",
    content:
      "A automação de follow-up aumentou meu retorno de pacientes em 60%. Emanuel entregou exatamente o que prometeu, com ROI surpreendente em menos de 3 meses.",
    rating: 5,
    result: "+60% retorno",
    avatar: "R",
    color: "#FF6B6B",
  },
  {
    name: "Juliana Costa",
    role: "Gestora",
    company: "Salão de Beleza",
    content:
      "O dashboard me deu visibilidade total do negócio. Agora sei exatamente quais serviços são mais rentáveis e como cada profissional está performando.",
    rating: 5,
    result: "+35% ticket médio",
    avatar: "J",
    color: "#17A2B8",
  },
  {
    name: "Marcos Oliveira",
    role: "Nutricionista",
    company: "Consultório Particular",
    content:
      "Profissional extremamente competente e atencioso. Entendeu perfeitamente minhas necessidades e criou uma solução sob medida. Recomendo de olhos fechados!",
    rating: 5,
    result: "100% satisfação",
    avatar: "M",
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

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#0F1724]/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#17A2B8]/5 rounded-full blur-3xl" />
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
              Depoimentos
            </span>
          </div>
          <h2 className="mb-6 text-[#0F1724] dark:text-white max-w-3xl mx-auto">
            O que meus clientes dizem
          </h2>
          <p className="text-[#0F1724]/70 dark:text-white/70 max-w-2xl mx-auto">
            Depoimentos reais de profissionais que transformaram seus negócios
            com tecnologia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-[#0F1724]/50 border border-[#0F1724]/10 dark:border-white/10 rounded-2xl p-8 h-full hover:border-[#17A2B8]/50 transition-all duration-300 hover:shadow-xl">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 h-12 w-12 text-[#0F1724]/5 dark:text-white/5" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#FF6B6B] text-[#FF6B6B]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-[#0F1724]/80 dark:text-white/80 mb-6 relative z-10 italic">
                  "{testimonial.content}"
                </p>

                {/* Result Badge */}
                <div className="mb-6">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg"
                    style={{ backgroundColor: `${testimonial.color}15` }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: testimonial.color }}
                    />
                    <span
                      className="font-mono"
                      style={{ color: testimonial.color }}
                    >
                      {testimonial.result}
                    </span>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#0F1724]/10 dark:border-white/10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-[#0F1724] dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#0F1724]/60 dark:text-white/60">
                      {testimonial.role} - {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover gradient */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.color}05, transparent)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-[#17A2B8] mb-2">100%</div>
            <div className="text-[#0F1724]/60 dark:text-white/60">
              Clientes satisfeitos
            </div>
          </div>
          <div className="text-center">
            <div className="text-[#17A2B8] mb-2">5.0</div>
            <div className="text-[#0F1724]/60 dark:text-white/60">
              Avaliação média
            </div>
          </div>
          <div className="text-center">
            <div className="text-[#17A2B8] mb-2">20+</div>
            <div className="text-[#0F1724]/60 dark:text-white/60">
              Projetos entregues
            </div>
          </div>
          <div className="text-center">
            <div className="text-[#17A2B8] mb-2">24h</div>
            <div className="text-[#0F1724]/60 dark:text-white/60">
              Tempo de resposta
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
