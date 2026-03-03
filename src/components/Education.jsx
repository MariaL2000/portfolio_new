import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { experience, education } from "./data/config";
import { useTheme } from "../provider/ThemeProvider";

const SectionItem = ({ title, subtitle, year, details, icon }) => {
  const { theme } = useTheme();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative group p-[1px] rounded-3xl overflow-hidden transition-all duration-500 shadow-sm"
      style={{
        background: theme === "light"
          ? "rgba(0,0,0,0.08)"
          : "linear-gradient(135deg, var(--primary), var(--secondary))",
      }}
    >
      <section
        className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start p-6 md:p-8 rounded-[23px] transition-colors duration-500 h-full gap-6"
        style={{
          backgroundColor: theme === "light" ? "#ffffff" : "rgba(10, 10, 10, 0.96)",
          backdropFilter: "blur(10px)"
        }}
      >
        {/* CONTENEDOR CIRCULAR: Grande y responsivo */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full blur-md opacity-20 bg-[var(--primary)] group-hover:opacity-40 transition-opacity" />
          <div
            className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 flex items-center justify-center bg-white shadow-inner"
            style={{ borderColor: "var(--primary)" }}
          >
            <img
              src={icon || "https://via.placeholder.com/150"}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* INFORMACIÓN: Alineada al círculo */}
        <div className="flex flex-col text-center sm:text-left">
          <header>
            <h3
              className="text-xl md:text-2xl font-black tracking-tight leading-tight"
              style={{ color: theme === "light" ? "#111" : "#fff" }}
            >
              {title}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
              <p
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: "var(--primary)" }}
              >
                {subtitle}
              </p>
              <span className="hidden sm:block opacity-30">|</span>
              <span
                className="text-xs font-medium opacity-60 italic"
                style={{ color: theme === "light" ? "#000" : "#fff" }}
              >
                {year}
              </span>
            </div>
          </header>

          {details && (
            <p
              className="mt-4 text-sm md:text-base leading-relaxed opacity-80 font-medium"
              style={{ color: theme === "light" ? "#444" : "#ccc" }}
            >
              {details}
            </p>
          )}
        </div>
      </section>
    </motion.article>
  );
};
export default function EducationAndExperience() {
  return (
    <section
      className="relative container mx-auto px-6 py-20 z-10"
      id="experience"
      style={{ marginTop: "-4rem" }} // Seguimos pegando secciones para fluidez
    >
      <div className="relative z-20">
        <CustomTitle title="Experience & Education" />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 relative z-10">
        {/* Renderizado de Educación */}
        {education.map((edu) => (
          <SectionItem
            key={edu.id}
            title={edu.degree}
            subtitle={edu.institution}
            year={edu.year}
            details={edu.details}
            icon={edu.icon}
          />
        ))}

        {/* Renderizado de Experiencia */}
        {experience.map((exp) => (
          <SectionItem
            key={exp.id}
            title={exp.title}
            subtitle={exp.company}
            year={exp.year}
            details={exp.descripcion}
            icon={exp.icon}
          />
        ))}
      </section>
    </section>
  );
}