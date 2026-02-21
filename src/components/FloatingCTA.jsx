import React, { useState } from "react";
import { FaEnvelope, FaInstagram, FaLinkedin, FaComments } from "react-icons/fa";

const FloatingCTA = () => {
  const [open, setOpen] = useState(false);

  const socials = [
    {
      icon: <FaEnvelope />,
      link: "mailto:marketing.sociafy@gmail.com?subject=Business Inquiry&body=Hi Sociafy, I want to grow my brand.",
      color: "bg-red-500",
      label: "Email",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com/sociafy_marketing",
      color: "bg-pink-500",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/company/sociafymarketing",
      color: "bg-blue-600",
      label: "LinkedIn",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">

      {/* SOCIAL BUTTONS */}
      {socials.map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full text-white shadow-lg
            transform transition-all duration-300 ease-out
            ${item.color}
            ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
          `}
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          {item.icon}
          <span className="text-sm">{item.label}</span>
        </a>
      ))}

      {/* MAIN BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#d55f0b] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all"
      >
        <FaComments size={18} />
      </button>
    </div>
  );
};

export default FloatingCTA;
