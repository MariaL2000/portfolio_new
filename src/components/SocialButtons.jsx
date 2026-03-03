import { motion } from "framer-motion";
import { socialIcons } from "./data/config.js";
import { useTheme } from "../provider/ThemeProvider";

export default function SocialButtons() {
  const { theme } = useTheme();
  const animationDuration = 4;

  const variants = {
    initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
    animate: {
      pathLength: 1,
      strokeOpacity: 0,
      fillOpacity: 1,
      transition: {
        duration: animationDuration,
        ease: "easeInOut",
        strokeOpacity: { delay: animationDuration },
        fillOpacity: { delay: animationDuration },
      },
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  // Color adaptativo para los iconos
  const iconColor = theme === "light" ? "var(--secondary)" : "var(--terciary)";

  return (
    <div
      className={`
        flex items-center justify-center
        /* Móvil/Tablet: Horizontal y compacto */
        flex-row space-x-6 px-6 py-3
        /* Desktop (lg): Vertical y estilizado */
        lg:flex-col lg:space-x-0 lg:space-y-8 lg:px-3 lg:py-8
        /* Estilos comunes */
        rounded-4xl border transition-all duration-300
      `}
      style={{
        backgroundColor: theme === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)",
        borderColor: "var(--glass-border)",
        width: "fit-content"
      }}
    >
      {socialIcons.map((icon) => (
        <motion.a
          key={icon.id}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={icon.name}
          whileHover="hover"
          className="flex items-center justify-center p-1"
        >
          <svg
            viewBox={icon.viewBox}
            width={32}
            height={32}
            className="transition-all"
          >
            <motion.path
              d={icon.path}
              fill={iconColor}
              stroke={iconColor}
              strokeWidth={1}
              variants={variants}
              initial="initial"
              animate="animate"
            />
          </svg>
        </motion.a>
      ))}
    </div>
  );
}