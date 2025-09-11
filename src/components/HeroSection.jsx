import { motion } from "framer-motion";
import { variants } from "./data/config.js";
import SocialButtons from "./SocialButtons.jsx";

function HeroSection() {
  return (
    <section className="relative w-full z-10 overflow-hidden">
      {/* Gradientes difuminados (solo desktop) */}
      <header
        className="hidden md:block absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full opacity-20 blur-[100px] left-10 top-1/2 -translate-y-1/2 z-0"
        style={{
          background:
            "linear-gradient(to right, #0007cd, #785aa4, var(--primary))",
        }}
      />
      <header
        className="hidden md:block absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full opacity-20 blur-[100px] right-10 top-1/2 -translate-y-1/2 z-0"
        style={{
          background:
            "linear-gradient(to right, #0007cd, #785aa4, var(--primary))",
        }}
      />

      {/* Contenedor principal */}
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative z-10">
        <article className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start pt-12 lg:pt-24">
          {/* Información personal + redes sociales */}
          <section className="flex flex-col justify-start space-y-4 sm:space-y-6 md:space-y-8 relative">
            <div className="flex items-start gap-4 sm:gap-6">
              {/* Redes sociales */}
              <div className="flex flex-col gap-3 mt-1 sm:mt-2">
                <SocialButtons className="flex-shrink-0" />
              </div>

              <div>
                <header className="text-left">
                  <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl">
                    Hi, I'm
                  </h1>
                  <span
                    className="block text-transparent font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-1 sm:mt-2"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom right, var(--secondary), var(--terciary))",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Lesyani
                  </span>
                </header>
                <p className="text-left text-gray-300 max-w-full sm:max-w-md md:max-w-lg text-base sm:text-lg md:text-xl leading-relaxed mt-3 sm:mt-4">
                  I’m a Full-Stack Web Developer specializing in{" "}
                  <strong>Python</strong> and <strong>React</strong>. I build
                  modern, scalable web applications with clean, maintainable
                  code. Passionate about responsive design, user experience, and
                  delivering solutions that make an impact.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <a
                    href="mailto:mariamarreromedrano@gmail.com"
                    className="px-5 py-2 sm:px-6 sm:py-3 text-white font-semibold rounded-3xl hover:scale-105 transform transition-transform duration-300"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, var(--primary), var(--secondary))",
                    }}
                  >
                    Hire Me
                  </a>
                  <motion.a
                    href="/CV.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center px-3 py-2 sm:px-4 sm:py-2.5 border rounded-3xl text-primary border-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width={20}
                      height={20}
                      className="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        d="M12 16l4-5h-3V4h-2v7H8l4 5zM5 20h14v-2H5v2z"
                        fill="var(--primary)"
                        stroke="var(--primary)"
                        strokeWidth={1}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">
                      Download Resume
                    </span>
                  </motion.a>
                </div>
              </div>
            </div>
          </section>

          {/* Hero image circular */}
          <figure className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <motion.div
              initial={false}
              className="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[400px] h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px] flex justify-center items-center p-6 sm:p-10 rounded-full overflow-hidden relative"
              animate={{
                scale: [1, 1, 1, 1],
                rotate: [1, 5, 5, 1],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl opacity-60 h-full w-full"
                animate={{
                  backgroundColor: ["#8a2be2", "#ff1744", "#2e0854"],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <img
                src="/heroPic.jpg"
                alt="Hero Pic"
                loading="lazy"
                className="relative z-10 rounded-full shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                style={{
                  width: "99%",
                  height: "99%",
                  objectFit: "cover",
                }}
              />
            </motion.div>
          </figure>
        </article>
      </section>
    </section>
  );
}

export default HeroSection;
