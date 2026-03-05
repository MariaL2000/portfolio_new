import { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import CustomTitle from "./CustomTitle";

const ProjectCarousel = ({ title, data, isFirst = false }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -500 : 500;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }

  };

  return (
    <section 
      className="w-full py-6 md:py-8 relative group transition-all duration-500"
      id="work"
      style={{ 
        // Si no es el primero, eliminamos el margen superior para pegar los carruseles
        marginTop: isFirst ? "0" : "-2rem" 
      }}
      
    >
      {/* Título con margen reducido para estar cerca de las cards */}
      <div className="px-6 md:px-12 lg:px-20 mb-6">
        <CustomTitle title={title} />
      </div>

      <div className="relative">
        {/* Flecha Izquierda */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 items-center justify-center rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-xl transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
        )}

        {/* Flecha Derecha */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 items-center justify-center rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md shadow-xl transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        )}

        <div 
          ref={scrollRef}
          className="flex gap-6 md:gap-10 overflow-x-auto px-6 md:px-12 lg:px-20 pb-10 scrollbar-hide snap-x snap-mandatory"
        >
          {data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {/* Espaciador final ajustado */}
          <div className="flex-shrink-0 w-4 md:w-20" />
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ProjectCarousel;