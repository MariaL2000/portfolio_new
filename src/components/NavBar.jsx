import { useState, useEffect } from "react";
import { useAnimate, stagger, motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../provider/ThemeProvider";
import { FiSun, FiMoon, FiStar } from "react-icons/fi";

const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Animación del menú lateral (solo afecta al nav con id lateral-menu)
    if (isOpen) {
      animate("#lateral-menu", { x: "0%" }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.4 });
      animate("li", { scale: 1, opacity: 1, filter: "blur(0px)" }, { delay: stagger(0.05) });
    } else {
      animate("#lateral-menu", { x: "-100%" });
    }

    // Animación del icono hamburguesa
    animate([
      ["path.top", { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }, { at: "<" }],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      ["path.bottom", { d: isOpen ? "M 3 3.5 L 17 16.346" : "M 2 16.346 L 20 16.346" }, { at: "<" }],
    ]);
  }, [isOpen, animate]);

  const NavItems = [
    { id: "services", text: "Services" },
    { id: "skills", text: "Skills" },
    { id: "work", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  const glassStyle = {
    backgroundColor: theme === "light" ? "rgba(0, 0, 0, 0.85)" : "var(--bg-nav)",
    borderColor: "var(--glass-border)",
    color: theme === "light" ? "#ffffff" : "var(--text-main)",
  };

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-4" ref={scope}>
      {/* 1. MENÚ LATERAL: Fuera de la cápsula para no romper el ancho */}
      <nav
        id="lateral-menu"
        className="fixed top-0 left-0 h-screen w-72 flex items-center z-[60] lg:hidden shadow-2xl"
        style={{
          background: "linear-gradient(to bottom right, var(--primary), var(--secondary))",
          transform: "translateX(-100%)"
        }}
      >
        <ul className="flex flex-col p-10 gap-8">
          {NavItems.map((item) => (
            <li key={item.id} className="text-white text-3xl font-black italic opacity-0">
              <a href={`#${item.id}`} onClick={() => setIsOpen(false)} className="hover:text-[var(--color-neon-cyan)] transition-colors">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 2. CÁPSULA DE NAVBAR: Mantiene su tamaño pequeño */}
      <div
        className="flex items-center gap-4 sm:gap-6 px-4 py-2 rounded-full border backdrop-blur-md shadow-2xl transition-all duration-300"
        style={glassStyle}
      >
        {/* Trigger Móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full flex items-center justify-center z-[70] cursor-pointer active:scale-90 lg:hidden"
          style={{ background: "linear-gradient(to bottom right, var(--primary), var(--secondary))", color: "white" }}
        >
          <svg width={18} height={14} viewBox="0 0 23 18">
            <Path d="M 2 2.5 L 20 2.5" className="top" />
            <Path d="M 2 9.423 L 20 9.423" className="middle" opacity="1" />
            <Path d="M 2 16.346 L 20 16.346" className="bottom" />
          </svg>
        </button>

        {/* Logo e Imagen */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-9 h-9 sm:w-11 sm:h-11 object-contain" />
          <h1 className="text-sm sm:text-lg font-black tracking-tighter uppercase whitespace-nowrap">
            Violets <span className="text-[var(--primary)]">In</span> Nova
          </h1>
        </div>

        {/* Links de Escritorio */}
        <div className="hidden lg:flex items-center gap-6 border-l border-white/10 pl-6">
          {NavItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[10px] font-extrabold uppercase tracking-[0.2em] hover:text-[var(--primary)] transition-colors opacity-70 hover:opacity-100"
            >
              {item.text}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "default" && <FiStar className="text-purple-400 text-lg" />}
              {theme === "light" && <FiSun className="text-yellow-400 text-lg" />}
              {theme === "dark" && <FiMoon className="text-blue-300 text-lg" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[55] lg:hidden"
          />
        )}
      </AnimatePresence>
    </header>
  );
}
