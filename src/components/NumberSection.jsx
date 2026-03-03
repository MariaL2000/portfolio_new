import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Numbers } from "./data/config";
import { useTheme } from "../provider/ThemeProvider";

export default function NumberSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 lg:py-32 flex justify-center">
      <div className="container max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {Numbers.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Número: Fino y profesional */}
              <header>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter"
                  style={{ color: theme === "light" ? "#111" : "#fff" }}
                >
                  {isVisible && (
                    <CountUp start={0} end={item.number} duration={2.5} />
                  )}
                  <span className="text-[var(--primary)] ml-1">+</span>
                </h2>
              </header>

              {/* Etiqueta: Muy sutil */}
              <p
                className="mt-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-50"
                style={{ color: theme === "light" ? "#000" : "#fff" }}
              >
                {item.title}
              </p>

              {/* Detalle minimalista: una línea que aparece al cargar */}
              <motion.div
                initial={{ width: 0 }}
                animate={isVisible ? { width: "20px" } : {}}
                className="h-[2px] mt-4 bg-[var(--primary)] opacity-40"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}