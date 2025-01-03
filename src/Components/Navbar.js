import React, { useEffect, useState } from "react";

const Navbar = ({ sections }) => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: "home", label: "Ana Sayfa" },
    { id: "app", icon: "smartphone", label: "Uygulama" },
    { id: "comments", icon: "chat_bubble", label: "Yorumlar" },
    { id: "stats", icon: "monitoring", label: "İstatistikler" },
    { id: "download", icon: "download", label: "İndir" },
  ];

  const handleScroll = () => {
    const offsets = Object.entries(sections)
      .filter(([_, ref]) => ref.current)
      .map(([id, ref]) => ({
        id,
        offsetTop: ref.current.offsetTop,
      }));

    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const current = offsets
      .filter((section) => scrollPosition >= section.offsetTop)
      .pop();

    if (current) setActive(current.id);
    else setActive(offsets[0]?.id || "");
  };

  useEffect(() => {
    const checkRefs = () =>
      Object.values(sections).every((ref) => ref.current !== null);
    if (checkRefs()) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    if (sections[id]?.current) {
      sections[id].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-5 left-0 right-0 flex justify-center items-center z-50 ">
      <div className="bg-backgroundLight/70 backdrop-blur-md shadow-lg rounded-full px-3 py-2 flex items-center space-x-3 md:space-x-5 transition-all duration-300 ease-in-out transform md:scale-100 scale-90">
        <div className="flex items-center space-x-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`flex items-center space-x-1 group transition-all duration-300 ease-in-out px-2 py-1 rounded-full
                        ${
                          active === item.id
                            ? "text-accentLight bg-accentDark"
                            : "text-textLight hover:text-accentDark"
                        }`}
            >
              <span className="material-symbols-rounded text-3xl transition-transform duration-300 ease-in-out flex items-center justify-center font-light">
                {item.icon}
              </span>
              <span
                className={`hidden md:flex font-light text-md overflow-hidden transition-all duration-300 ease-in-out items-center justify-center text-accentLight
              ${
                active === item.id
                  ? "text-md max-w-[100px] opacity-100"
                  : "text-[0px] max-w-0 opacity-0"
              } `}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
