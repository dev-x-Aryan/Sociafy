import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when menu is open (optional but recommended)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Smooth scroll to sections
  const scrollToSection = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 transition-all duration-100 ${
        scrolled && !isOpen
          ? "left-1/2 -translate-x-1/2 w-[92%] max-w-4xl mt-0 rounded-full shadow-lg bg-[#d55f0b]/95 backdrop-blur-md"
          : "left-0 w-full bg-[#d55f0b]"
      }`}
    >
      {/* Inner container */}
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex items-center justify-between h-16 w-full">

          {/* Brand */}
          <h1 className="text-white font-bold text-lg md:text-xl tracking-wide whitespace-nowrap">
            Sociafy
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
            <button onClick={() => scrollToSection("hero")} className="hover:text-[#F6EEE6] transition">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="hover:text-[#F6EEE6] transition">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-[#F6EEE6] transition">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-[#F6EEE6] transition">
              Contact
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center justify-end w-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden w-full bg-[#d55f0b] text-white flex flex-col gap-4 font-medium overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 py-4 px-6" : "max-h-0 px-6"
        }`}
      >
        <button onClick={() => scrollToSection("hero")}>Home</button>
        <button onClick={() => scrollToSection("services")}>Services</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
