import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { services } from "./data/config";
import { useTheme } from "../provider/ThemeProvider";

export default function ServicesSection() {
  const { theme } = useTheme();

  return (
    <section
      className="relative z-10 py-10"
      id="services"
      style={{
        // Margen superior negativo para reducir el espacio con la sección de arriba
        marginTop: "-4rem"
      }}
    >
      <CustomTitle title="My services" />

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 px-6 md:px-12 lg:px-20 mt-4 justify-items-center">
        {services.map((item) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full overflow-hidden rounded-2xl group transition-all duration-300"
            style={{
              // Fondo de la tarjeta: En light usamos un blanco más puro para contraste
              backgroundColor: theme === "light" ? "#ffffff" : "rgba(15, 15, 15, 0.9)",
              boxShadow: theme === "light"
                ? "0 4px 20px rgba(0, 0, 0, 0.04)"
                : "0 0 20px rgba(0, 0, 0, 0.5)"
            }}
          >
            {/* Animación de borde neón: Ahora sobre el fondo pero bajo el texto */}
            <svg
              className="absolute inset-0 w-full h-full z-10 pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="none"
                stroke="url(#gradient-services-v2)"
                strokeWidth="3" // Grosor mayor para que resalte en blanco
                strokeDasharray="25 85" // Espaciado más elegante
                style={{
                  animation: "dash 7s linear infinite",
                  opacity: theme === "light" ? 0.7 : 1 // Suavizado en light
                }}
                rx="8"
              />
              <defs>
                <linearGradient id="gradient-services-v2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="var(--secondary)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Contenido: z-20 asegura que esté sobre la animación */}
            <header className="relative z-20 w-full p-8 flex flex-col items-center justify-center text-center">
              <h2
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--primary), var(--secondary))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className="uppercase text-xl md:text-2xl font-black mb-4 tracking-tight"
              >
                {item.title}
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed transition-colors duration-500 font-medium"
                style={{
                  color: theme === "light" ? "#444" : "#ccc",
                }}
              >
                {item.description}
              </p>
            </header>
          </motion.article>
        ))}
      </section>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 100;
          }
        }
      `}</style>
    </section>
  );
}
