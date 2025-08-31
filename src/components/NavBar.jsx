import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          ["nav", { transform: "translateX(0%)" }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.4 }],
          ["li", { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }, { delay: stagger(0.03), at: "-0.1" }],
        ]
      : [
          ["li", { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" }, { delay: stagger(0.02, { from: "last" }), at: "<" }],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      ["path.top", { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }, { at: "<" }],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      ["path.bottom", { d: isOpen ? "M 3 3.5 L 17 16.346" : "M 2 16.346 L 20 16.346" }, { at: "<" }],
      ...menuAnimations,
    ]);
  }, [isOpen, animate]);

  const handleNavItemClick = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const NavItems = [
    { id: "services", text: "What I offer?" },
    { id: "skills", text: "Skills" },
    { id: "education", text: "Education and experience" },
    { id: "work", text: "My projects" },
    { id: "contact", text: "Contact" },
  ];

  const gradientStyle = {
    background: "linear-gradient(to bottom right, var(--primary), var(--secondary))",
  };

  return (
    <div className="relative flex justify-between px-4 sm:px-12 py-2">
      <div ref={scope} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 left-2 sm:left-4 w-12 h-12 rounded-full flex items-center justify-center z-40"
          style={gradientStyle}
        >
          <svg width={23} height={18} viewBox="0 0 23 18">
            <Path d="M 2 2.5 L 20 2.5" className="top" />
            <Path d="M 2 9.423 L 20 9.423" className="middle" opacity="1" />
            <Path d="M 2 16.346 L 20 16.346" className="bottom" />
          </svg>
        </button>

        <nav
          className={`fixed top-0 left-0 h-full w-72 flex items-center transform transition-transform duration-300 z-30 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={gradientStyle}
        >
          <ul className="flex flex-col p-4">
            {NavItems.map((item) => (
              <li key={item.id} className="text-white text-4xl font-bold mt-10">
                <a href={`#${item.id}`} onClick={() => handleNavItemClick(item.id)}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <h1 className="text-5xl font-extrabold tracking-tight flex items-center gap-2 text-white z-20 relative mt-16 mb-0 px-4 sm:px-16 lg:mt-12 text-center sm:text-left mx-auto sm:mx-0">
  <span className="text-6xl text-[var(--primary)]">S</span>
  <span>
    uper<span style={{ color: "var(--primary)" }}>Nova</span>
  </span>
</h1>
</div>
  );
}
