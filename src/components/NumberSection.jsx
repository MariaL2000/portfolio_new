import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Numbers } from "./data/config";

export default function NumberSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className="mx-auto w-full relative text-white mt-40 flex justify-center">
      {/* Fondos difuminados */}
      <header
        className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full opacity-20 blur-[100px] left-10 top-1/2 -translate-y-1/2 hidden md:block z-0"
        style={{
          background: "linear-gradient(to right, #0007cd, #785aa4, var(--primary))",
        }}
      />
      <header
        className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full opacity-20 blur-[100px] right-10 top-1/2 -translate-y-1/2 hidden md:block z-0"
        style={{
          background: "linear-gradient(to right, #0007cd, #785aa4, var(--primary))",
        }}
      />

      {/* Números */}
      <motion.section
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="relative z-10 mx-auto w-11/12 lg:mx-0 p-5 sm:p-6 py-6 sm:py-8 rounded-3xl 
                   border border-primary shadow-lg bg-secondary
                   md:divide-x divide-primary grid grid-cols-2 md:grid-cols-4 
                   gap-4 md:gap-6 lg:gap-12"
      >
        {Numbers.map((item) => (
          <article key={item.id} className="text-center">
            <header>
              <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl">
                +{isVisible && (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2}
                    separator=","
                  />
                )}
              </h2>
            </header>
            <p className="mt-2">{item.title}</p>
          </article>
        ))}
      </motion.section>
    </section>
  );
}
