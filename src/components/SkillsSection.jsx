import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { skills } from "./data/config";

const SkillCircle = ({ skill, percentage, icon }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="relative flex flex-col items-center"
    >
      {/* Círculo con animación */}
      <svg width={120} height={120} className="rotate-[-90deg]">
        <circle
          cx={60}
          cy={60}
          r={radius}
          fill="transparent"
          stroke="#333"
          strokeWidth={10}
        />
        <motion.circle
          cx={60}
          cy={60}
          r={radius}
          fill="transparent"
          stroke="var(--primary)"
          strokeWidth={10}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>

      <div className="absolute flex flex-col items-center justify-center gap-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={icon} alt={skill} className="w-9 h-9" />
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, var(--primary), var(--secondary))",
          }}
        >
          {percentage}%
        </motion.p>
      </div>

   
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-2 text-sm font-semibold text-center"
      >
        {skill}
      </motion.p>
    </motion.div>
  );
};

export default function SkillSection() {
  return (
    <section className="relative z-10" id="skills">
      <CustomTitle title="My skills" />

      <section className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 p-16 text-white mt-12">
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
