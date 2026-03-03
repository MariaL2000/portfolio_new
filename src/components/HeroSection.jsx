import { motion } from "framer-motion";
import { useTheme } from "../provider/ThemeProvider";
import SocialButtons from "./SocialButtons.jsx";

function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glow de fondo dinámico */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none transition-opacity duration-700"
        style={{
          background: "var(--primary)",
          opacity: theme === "light" ? 0.05 : 0.1,
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <article className="flex flex-col lg:flex-row items-center justify-between pt-32 lg:pt-0 gap-12 lg:gap-8">

          {/* LADO IZQUIERDO: Información + Redes (Desktop) */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full lg:w-3/5">

            {/* Contenedor de Redes: Horizontal en móvil, Vertical en Desktop al lado del texto */}
            <div className="order-2 lg:order-1">
              <SocialButtons />
            </div>

            {/* Bloque de Texto */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 order-1 lg:order-2">
              <header className="space-y-1">
                <h1
                  className="font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight transition-colors duration-500"
                  style={{ color: theme === "light" ? "#111" : "#fff" }}
                >
                  Hi, I'm
                </h1>
                <span
                  className="block font-black text-4xl md:text-5xl lg:text-6xl leading-none"
                  style={{
                    backgroundImage: "linear-gradient(to right, var(--primary), var(--secondary))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Lesyani
                </span>
              </header>

              <p
                className="max-w-md md:max-w-lg text-lg md:text-xl font-medium leading-relaxed transition-colors duration-500"
                style={{ color: theme === "light" ? "#333" : "#d1d5db" }}
              >
                "Full-Stack Developer crafting high-performance web solutions. I bridge the gap between robust <span className="text-[var(--primary)] font-bold">Python</span> backends and seamless <span className="text-[var(--primary)] font-bold">Next JS & React</span>. interfaces to deliver impactful user experiences."

              </p>

              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                <a
                  href="mailto:mariamarreromedrano@gmail.com"
                  className="w-full sm:w-auto px-10 py-3.5 text-white font-bold rounded-4xl shadow-lg hover:brightness-110 transition-all active:scale-95"
                  style={{ background: "linear-gradient(135deg, var(--primary), var(--secondary))" }}
                >
                  Hire Me
                </a>
                <a
                  href="/CV.pdf"
                  download
                  className="w-full sm:w-auto flex items-center justify-center px-10 py-3.5 border-2 rounded-4xl font-bold transition-all hover:bg-white/5"
                  style={{
                    borderColor: "var(--primary)",
                    color: "var(--primary)",
                  }}
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Imagen Hero */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end order-first lg:order-last">
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background: "var(--primary)" }}
              />
              <img
                src="/heroPic.jpg"
                alt="Lesyani"
                className="relative z-10 w-full h-full rounded-full object-cover border-[6px] shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                style={{ borderColor: theme === "light" ? "#fff" : "var(--glass-border)" }}
              />
            </motion.div>
          </div>

        </article>
      </div>
    </section>
  );
}

export default HeroSection;