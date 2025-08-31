import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { projects } from "./data/config";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <>
      <header className="relative z-30" id="work">
        <CustomTitle title="My Projects" />
      </header>

      <article className="relative flex justify-center items-center w-full p-4 mt-32">
        {/* Botón anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 p-2 hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width={40}
            height={40}
            className="text-white"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {/* Botón siguiente */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 p-2 hover:scale-110 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width={40}
            height={40}
            className="text-white"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>

        {/* Card principal */}
        <article className="relative w-full min-h-[400px] md:h-[700px] flex items-center justify-center z-20">
          <AnimatePresence initial={false}>
            {projects.map(
              (project, index) =>
                index === currentIndex && (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    className="absolute w-[90%] md:w-[70%] lg:w-[60%] rounded-3xl text-white shadow-lg flex flex-col overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(to bottom right, var(--color-neon-pink), var(--secondary))",
                      perspective: 1000,
                      zIndex: 20,
                    }}
                  >
                    {/* Imagen optimizada con lazy loading */}
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-[250px] md:h-[450px] lg:h-[500px] object-cover"
                    />

                    <div className="p-4 md:p-6 flex flex-col">
                      {/* Título */}
                      <h2
                        className="uppercase text-xl md:text-2xl font-semibold text-transparent bg-clip-text"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, var(--white), var(--secondary))",
                        }}
                      >
                        {project.title}
                      </h2>

                      {/* Descripción */}
                      <p className="text-sm md:text-base mt-2">
                        {project.descripcion}
                      </p>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-md transition transform hover:scale-105 hover:shadow-lg"
                            style={{
                              background:
                                "linear-gradient(to right, var(--terciary), var(--primary))",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Botón */}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 px-6 py-2 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition transform hover:scale-105"
                          style={{
                            background:
                              "linear-gradient(to right,var(--terciary), var(--primary))",
                          }}
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  </motion.article>
                )
            )}
          </AnimatePresence>
        </article>
      </article>
    </>
  );
};

export default Carousel;

