import { motion } from 'framer-motion';
import CustomTitle from './CustomTitle';
import { services } from './data/config';

export default function ServicesSection() {
  return (
    <section className="relative mt-24 z-50" id="services">
      <CustomTitle
        title="What I offer?"
        style={{
          background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      />

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-16 mt-12">
        {services.map((item) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative w-full p-5 grid place-items-center overflow-visible rounded-xl shadow-lg"
          >
            {/* Borde estático */}
            <div className="absolute inset-0 rounded-xl border border-[var(--primary)] z-10" />

            {/* Hilo de energía animado usando SVG */}
            <svg
              className="absolute inset-0 w-full h-full z-0"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <rect
                x="1"
                y="1"
                width="98"
                height="98"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="62 62"
                strokeDashoffset="0"
                style={{ animation: 'dash 4s linear infinite' }}
                rx="8"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-neon-red)" />
                  <stop offset="50%" stopColor="var(--terciary)" />
                  <stop offset="100%" stopColor="var(--color-neon-blue)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Overlay negro */}
            <div className="absolute inset-0 bg-black/70 rounded-xl z-20" />

            {/* Contenido */}
            <header className="relative z-30 w-full p-6 flex flex-col items-center justify-center text-center">
              <h2
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
                className="uppercase text-2xl md:text-3xl lg:text-4xl font-semibold mb-4"
              >
                {item.title}
              </h2>
              <p className="md:text-lg lg:text-xl text-white opacity-80">{item.description}</p>
            </header>
          </motion.article>
        ))}
      </section>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 124; /* 2 * 62 para recorrer todo el rectángulo */
          }
        }
      `}</style>
    </section>
  );
}
