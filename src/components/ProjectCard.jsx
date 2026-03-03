import { motion } from "framer-motion";
import { useTheme } from "../provider/ThemeProvider";

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();

  // Colores Apple-style: Neutros de alto contraste
  const titleColor = theme === "light" ? "#1d1d1f" : "#f5f5f7";
  const textColor = theme === "light" ? "#424245" : "#a1a1a6";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative flex-shrink-0 w-[85vw] sm:w-[450px] md:w-[500px] snap-center h-full flex flex-col group"
    >
      <div 
        className="relative flex flex-col h-full overflow-hidden rounded-[2.5rem] transition-all duration-500"
        style={{ 
          backgroundColor: theme === "light" ? "#ffffff" : "#111111",
          border: theme === "light" ? "1px solid rgba(0,0,0,0.05)" : "1px solid rgba(255,255,255,0.05)",
          boxShadow: theme === "light" ? "0 15px 35px rgba(0,0,0,0.03)" : "none"
        }}
      >
        {/* Imagen Post Instagram Style */}
        <div className="relative h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>

        {/* Contenido */}
        <div className="p-8 md:p-10 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-3 mb-4">
            {project.stack?.map((tech, i) => (
              <span 
                key={i} 
                className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40"
                style={{ color: theme === "light" ? "#000" : "#fff" }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* TÍTULO: Volvemos a un peso medio/semibold, elegante y legible */}
          <h3 
            className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 transition-colors duration-500"
            style={{ color: titleColor }}
          >
            {project.title}
          </h3>

          {/* DESCRIPCIÓN: Texto claro y fluido */}
          <p 
            className="text-base leading-relaxed font-medium mb-8 flex-grow transition-colors duration-500"
            style={{ color: textColor }}
          >
            {project.descripcion}
          </p>

          <div className="mt-auto">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center group/btn"
            >
              <span 
                className="px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-md active:scale-95"
                style={{ 
                  background: "var(--primary)", 
                  color: "#ffffff" 
                }}
              >
                Live Demo
              </span>
              <span 
                className="ml-3 transition-transform duration-300 group-hover/btn:translate-x-1 font-black text-xl"
                style={{ color: "var(--primary)" }}
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;