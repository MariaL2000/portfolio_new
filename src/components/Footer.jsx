import React from "react";
import { socialIcons } from "./data/config";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white z-10 mt-16 md:mt-24">
      <section className="w-full py-16 text-center z-10 relative" id="contact">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Interested in collaborating or hiring me? Reach out below!
        </p>
        <a
          href="mailto:mariamarreromedrano@gmail.com"
          className="inline-block px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-white transition hover:scale-105"
          style={{
            background:
              "linear-gradient(to right, var(--primary), var(--secondary))",
          }}
        >
          Hire Me
        </a>
      </section>

      {/* Fondos difuminados con gradientes */}
      <header
        className="hidden md:block absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full opacity-20 blur-[100px] left-10 top-1/2 -translate-y-1/2 z-0"
        style={{
          background:
            "linear-gradient(to right, var(--primary), var(--secondary), #785aa4)",
        }}
      />
      <header
        className="hidden md:block absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full opacity-20 blur-[100px] right-10 top-1/2 -translate-y-1/2 z-0"
        style={{
          background:
            "linear-gradient(to right, var(--primary), var(--secondary), #0007cd)",
        }}
      />

      {/* Contenido del footer */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-12 px-6 md:px-16">
        {/* Correo y ubicación */}
        <div className="flex flex-col items-center md:items-start">
          <a
            href="mailto:mariamarreromedrano@gmail.com"
            className="text-white font-medium text-lg md:text-xl transition hover:text-[var(--primary)]"
          >
            mariamarreromedrano@gmail.com
          </a>
          <p className="text-sm md:text-base mt-2 text-gray-300">
            Havana, Cuba
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-6">
          {socialIcons.map((icon) => (
            <a
              key={icon.id}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white w-8 h-8 md:w-10 md:h-10 transition hover:text-[var(--primary)]"
            >
              <svg
                viewBox={icon.viewBox}
                fill="currentColor"
                className="w-full h-full"
              >
                <path d={icon.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
