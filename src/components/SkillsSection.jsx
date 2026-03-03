import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { skills } from "./data/config";
import { useTheme } from "../provider/ThemeProvider";

const SkillCircle = ({ skill, percentage, icon }) => {
  const { theme } = useTheme();
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  // Colores dinámicos
  const trackColor = theme === "light" ? "#f0f0f0" : "#1a1a1a";
  const textColor = theme === "light" ? "#111" : "#fff";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative flex flex-col items-center group"
    >
      {/* Círculo con animación */}
      <svg width={130} height={130} className="rotate-[-90deg] drop-shadow-sm">
        {/* Fondo del círculo (Track) */}
        <circle
          cx={65}
          cy={65}
          r={radius}
          fill="transparent"
          stroke={trackColor}
          strokeWidth={7} // Un poco más fino para mayor elegancia
          className="transition-colors duration-500"
        />
        {/* Progreso animado */}
        <motion.circle
          cx={65}
          cy={65}
          r={radius}
          fill="transparent"
          stroke="var(--primary)"
          strokeWidth={7}
          strokeLinecap="round" // Bordes redondeados en el progreso
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2, ease: "backOut" }}
        />
      </svg>

      {/* Contenido Central */}
      <div className="absolute flex flex-col items-center justify-center gap-1 top-[65px] left-[65px] transform -translate-x-1/2 -translate-y-1/2 mt-[-5px]">
        <img 
          src={icon} 
          alt={skill} 
          className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110" 
        />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xs font-black tracking-tighter"
          style={{ color: "var(--primary)" }}
        >
          {percentage}%
        </motion.p>
      </div>

      {/* Nombre de la Skill */}
      <motion.p
        className="mt-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500"
        style={{ color: textColor, opacity: 0.7 }}
      >
        {skill}
      </motion.p>
    </motion.div>
  );
};

export default function SkillSection() {
  const { theme } = useTheme();

  return (
    <section 
      className="relative z-10 py-10" 
      id="skills"
      style={{ marginTop: "-2rem" }} // Reduciendo espacio muerto
    >
      <CustomTitle title="My skills" />

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-6 lg:gap-12 px-6 md:px-16 mt-16 justify-items-center">
        {skills.map((item, index) => (
          <SkillCircle
            key={index}
            skill={item.skill}
            percentage={item.percentage}
            icon={item.icon}
          />
        ))}
      </section>
    </section>
  );
}