import { motion } from "framer-motion";
import { socialIcons } from "./data/config.js";

export default function SocialButtons() {
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
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="flex md:flex flex-col items-center justify-center space-y-11 bg-[#ffffff39] rounded-3xl border-primary max-h-[506px] md:max-h-[386px]">
      {socialIcons.map((icon) => (
        <a
          key={icon.id}
          href={icon.url}           // <--- URL aquí
          target="_blank"           // abrir en pestaña nueva
          rel="noopener noreferrer" // seguridad
          aria-label={icon.name}    // accesibilidad
          className="inline-block"  // para que el link tome el tamaño del svg
        >
          <svg viewBox={icon.viewBox} width={40} height={40}>
            <motion.path
              d={icon.path}
              fill="var(--terciary)"
              stroke="var(--terciary)"
              strokeWidth={1}
              variants={variants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            />
          </svg>
        </a>
      ))}
    </div>
  );
}
