import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from "../provider/ThemeProvider";

export default function CustomTitle({ title }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.5 });
  const { theme } = useTheme();

  return (
    <div className="overflow-hidden py-4 px-4">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
        className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mt-20 mb-6 tracking-tight"
        style={{
          color: theme === "light" ? "var(--secondary)" : "var(--text-main)",
        }}
      >
        {title}
      </motion.h2>
      {/* Línea decorativa minimalista */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "40px" } : {}}
        className="h-1 bg-[var(--primary)] mx-auto rounded-full"
      />
    </div>
  );
}