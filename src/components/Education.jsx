import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { experience, education } from "./data/config";

const SectionItem = ({ title, subtitle, year, details, icon }) => {
  return (
    <motion.article
      className="relative flex flex-col justify-end px-2 gap-3 rounded-lg cursor-pointer mt-10
      before:absolute before:inset-[10px] before:rounded-[10px]
      before:bg-gradient-to-br before:from-[var(--primary)] before:to-[var(--secondary)]
      before:z-0 after:absolute after:inset-0 
      after:bg-gradient-to-br after:from-[var(--secondary)] after:to-[var(--primary)]
      after:scale-95 after:blur-[20px] hover:after:blur-[30px] after:z-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <section className="relative bg-black z-10 text-white rounded-xl">
        <section className="border border-[var(--primary)] bg-[var(--secondary)] rounded-xl p-3 flex items-center">
        <img
  src={icon || "https://via.placeholder.com/64"}
  alt="icon"
  width={64}
  height={64}
  className="relative z-30 w-16 h-16 object-contain"
/>

          <div className="ml-6">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm">{subtitle}</p>
            <p className="text-sm italic">{year}</p>
            {details && <p className="my-2">{details}</p>}
          </div>
        </section>
      </section>
    </motion.article>
  );
};

export default function EducationAndExperience() {
  return (
    <section
      className="relative container mx-auto px-4 py-12 lg:p-16 z-10"
      id="experience"
    >
      {/* 👇 Forzamos que el título siempre quede arriba */}
      <div className="relative z-20">
        <CustomTitle title="Education & Experience " />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 relative z-10">
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
