import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { toast } from "sonner";

const CONTACT_CONFIG = {
  email: import.meta.env.VITE_EMAIL,
  phone: import.meta.env.VITE_PHONE,
  whatsapp: import.meta.env.VITE_WHATSAPP,
  location: "Fortaleza, CE - Brasil",
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error("Por favor, autorize o contato para prosseguir.");
      return;
    }

    setIsSubmitting(true);

    try {
      // OPÇÃO 1: Enviar para seu backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // OPÇÃO 2: Usar EmailJS ou serviço similar
      // await emailjs.send('service_id', 'template_id', formData);

      // OPÇÃO 3: Abrir cliente de email (temporário)
      const subject = `Contato do Portfolio: ${formData.name}`;
      const body = `
Nome: ${formData.name}
Email: ${formData.email}
Empresa: ${formData.company || "Não informado"}

Mensagem:
${formData.message}
      `.trim();

      window.location.href = `mailto:${
        CONTACT_CONFIG.email
      }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        body
      )}`;

      toast.success("Cliente de email aberto! Envie a mensagem.");
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openWhatsApp = () => {
    const message = "Olá! Gostaria de conversar sobre seus serviços.";
    window.open(
      `https://wa.me/${CONTACT_CONFIG.whatsapp}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#17A2B8]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6B6B]/5 rounded-full blur-3xl" />
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
              Contato
            </span>
          </div>
          <h2 className="mb-6 text-[#0F1724] dark:text-white max-w-3xl mx-auto">
            Vamos transformar seu negócio juntos?
          </h2>
          <p className="text-[#0F1724]/70 dark:text-white/70 max-w-2xl mx-auto">
            Conte-me sobre seu desafio. Vou analisar e mostrar como a tecnologia
            pode gerar resultados práticos.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Email Card */}
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="block group"
              >
                <div className="bg-white dark:bg-[#0F1724]/50 border border-[#0F1724]/10 dark:border-white/10 rounded-2xl p-6 hover:border-[#17A2B8]/50 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#17A2B8]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#17A2B8]/20 transition-colors">
                      <Mail className="h-6 w-6 text-[#17A2B8]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[#0F1724] dark:text-white mb-2">
                        E-mail
                      </h4>
                      <p className="text-[#0F1724]/70 dark:text-white/70 break-all">
                        {CONTACT_CONFIG.email}
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a href={`tel:${CONTACT_CONFIG.phone}`} className="block group">
                <div className="bg-white dark:bg-[#0F1724]/50 border border-[#0F1724]/10 dark:border-white/10 rounded-2xl p-6 hover:border-[#17A2B8]/50 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FF6B6B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6B6B]/20 transition-colors">
                      <Phone className="h-6 w-6 text-[#FF6B6B]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[#0F1724] dark:text-white mb-2">
                        Telefone
                      </h4>
                      <p className="text-[#0F1724]/70 dark:text-white/70">
                        {CONTACT_CONFIG.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="bg-white dark:bg-[#0F1724]/50 border border-[#0F1724]/10 dark:border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#17A2B8]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#17A2B8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#0F1724] dark:text-white mb-2">
                      Localização
                    </h4>
                    <p className="text-[#0F1724]/70 dark:text-white/70">
                      {CONTACT_CONFIG.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-gradient-to-br from-[#17A2B8]/10 to-[#FF6B6B]/10 dark:from-[#17A2B8]/20 dark:to-[#FF6B6B]/20 border border-[#17A2B8]/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#0F1724] flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-[#17A2B8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#0F1724] dark:text-white mb-2">
                      Tempo de Resposta
                    </h4>
                    <p className="text-[#0F1724]/70 dark:text-white/70">
                      Retorno em até 24 horas úteis
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <Button
                onClick={openWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
              </Button>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-[#0F1724]/50 border border-[#0F1724]/10 dark:border-white/10 rounded-2xl p-8">
                <h3 className="text-[#0F1724] dark:text-white mb-2">
                  Solicitar Orçamento
                </h3>
                <p className="text-[#0F1724]/70 dark:text-white/70 mb-8">
                  Preencha o formulário e receba uma proposta personalizada para
                  seu projeto.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-[#0F1724] dark:text-white"
                      >
                        Nome completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="border-[#0F1724]/20 dark:border-white/20 bg-[#F5F7FA] dark:bg-[#0F1724]/30 focus:border-[#17A2B8] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-[#0F1724] dark:text-white"
                      >
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="border-[#0F1724]/20 dark:border-white/20 bg-[#F5F7FA] dark:bg-[#0F1724]/30 focus:border-[#17A2B8] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-[#0F1724] dark:text-white"
                    >
                      Empresa / Negócio
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome do seu negócio (opcional)"
                      className="border-[#0F1724]/20 dark:border-white/20 bg-[#F5F7FA] dark:bg-[#0F1724]/30 focus:border-[#17A2B8] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-[#0F1724] dark:text-white"
                    >
                      Mensagem *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva seu desafio: O que você precisa resolver? Quais resultados espera alcançar?"
                      rows={6}
                      className="border-[#0F1724]/20 dark:border-white/20 bg-[#F5F7FA] dark:bg-[#0F1724]/30 focus:border-[#17A2B8] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-[#F5F7FA] dark:bg-[#0F1724]/30 rounded-xl">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          consent: checked as boolean,
                        }))
                      }
                      className="mt-1"
                    />
                    <Label
                      htmlFor="consent"
                      className="text-[#0F1724]/70 dark:text-white/70 cursor-pointer leading-relaxed"
                    >
                      Autorizo o contato via e-mail ou telefone para discussão
                      do projeto. Seus dados serão tratados com total
                      confidencialidade e não serão compartilhados com
                      terceiros.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#17A2B8] hover:bg-[#17A2B8]/90 text-white shadow-lg shadow-[#17A2B8]/25"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>

                  <p className="text-center text-[#0F1724]/60 dark:text-white/60">
                    Você receberá uma confirmação por e-mail e retornarei em até
                    24 horas úteis.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full shadow-xl flex items-center justify-center"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </section>
  );
}
