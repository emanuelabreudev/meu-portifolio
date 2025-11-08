import { motion } from "motion/react";
import { ArrowRight, Calendar, Download, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "../assets/profile.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openCalendly = () => {
    window.open("https://calendly.com/emanuelabreudev", "_blank");
  };

  const downloadCV = () => {
    alert(
      "Download do CV será implementado. Por enquanto, entre em contato via formulário."
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-[#17A2B8]/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-tl from-[#FF6B6B]/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#17A2B8]/10 dark:bg-[#17A2B8]/20 rounded-full mb-6"
            >
              <Sparkles className="h-4 w-4 text-[#17A2B8]" />
              <span className="text-[#17A2B8]">
                Disponível para novos projetos
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="mb-6 text-[#0F1724] dark:text-white">
                Transformo <span className="text-[#17A2B8]">Tecnologia</span> em{" "}
                <span className="text-[#FF6B6B]">Resultados</span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-4 text-[#0F1724]/80 dark:text-white/80 max-w-xl mx-auto lg:mx-0"
            >
              Engenheiro de software especializado em <strong>backend</strong> e{" "}
              <strong>IA</strong>. Crio soluções que geram mais clientes e
              reduzem trabalho manual para negócios locais.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 text-[#0F1724]/60 dark:text-white/60 max-w-xl mx-auto lg:mx-0"
            >
              Node.js • TypeScript • Python • IA/ML • AWS • Docker
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#17A2B8] hover:bg-[#17A2B8]/90 text-white shadow-lg shadow-[#17A2B8]/25 w-full sm:w-auto group"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={openCalendly}
                size="lg"
                variant="outline"
                className="border-[#0F1724]/20 dark:border-white/20 text-[#0F1724] dark:text-white hover:bg-[#0F1724]/5 dark:hover:bg-white/5 w-full sm:w-auto"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Reunião
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-[#17A2B8] mb-1">5+</div>
                <div className="text-[#0F1724]/60 dark:text-white/60">anos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-[#17A2B8] mb-1">20+</div>
                <div className="text-[#0F1724]/60 dark:text-white/60">
                  projetos
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-[#17A2B8] mb-1">100%</div>
                <div className="text-[#0F1724]/60 dark:text-white/60">
                  satisfação
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#17A2B8]/20 via-[#FF6B6B]/20 to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Main Image Container */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white/50 dark:border-white/10 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Emanuel Abreu"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1724]/60 via-transparent to-transparent" />
              </div>

              {/* Floating Card - Tech Stack */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-6 bottom-20 bg-white dark:bg-[#0F1724] border border-[#0F1724]/10 dark:border-white/10 rounded-2xl p-4 shadow-xl hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#17A2B8]/10 flex items-center justify-center">
                    <code className="text-[#17A2B8]">{"<>"}</code>
                  </div>
                  <div>
                    <div className="text-[#0F1724] dark:text-white">
                      Backend Expert
                    </div>
                    <div className="text-[#0F1724]/60 dark:text-white/60">
                      Node.js & Python
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - AI */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -right-6 top-20 bg-white dark:bg-[#0F1724] border border-[#0F1724]/10 dark:border-white/10 rounded-2xl p-4 shadow-xl hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B6B]/10 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-[#FF6B6B]" />
                  </div>
                  <div>
                    <div className="text-[#0F1724] dark:text-white">
                      IA & ML
                    </div>
                    <div className="text-[#0F1724]/60 dark:text-white/60">
                      Automação
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#0F1724]/40 dark:text-white/40 text-center"
        >
          <div className="text-sm mb-2">Role para ver mais</div>
          <div className="w-6 h-10 border-2 border-current rounded-full mx-auto flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-current rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
