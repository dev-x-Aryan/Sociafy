import React, { useEffect, useRef } from "react";

import design from "../assets/design.jpg";
import photo from "../assets/photoshoot.jpg";
import influencer from "../assets/influencer.jpg";
import performance from "../assets/perf.jpg";
import social from "../assets/social media.jpg";
import video from "../assets/videoEditing.jpg";
import website from "../assets/webDev.jpg";

const services = [
  { title: "Designing", desc: "Creative logos, branding, social media creatives, and ad designs that stand out.", img: design },
  { title: "Photoshoot", desc: "Professional product, brand, and lifestyle photography to showcase your business.", img: photo },
  { title: "Influencer Marketing", desc: "Strategic collaborations with influencers to increase reach and brand trust.", img: influencer },
  { title: "Performance Marketing", desc: "ROI-focused advertising campaigns on Google, Facebook, and Instagram.", img: performance },
  { title: "Social Media Management", desc: "Content planning, posting, and engagement to grow your online presence.", img: social },
  { title: "Video Editing", desc: "High-quality reels, ads, and promotional videos that capture attention.", img: video },
  { title: "Website Development", desc: "Fast, modern, and conversion-focused websites for your business.", img: website },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // replay on scroll back
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={containerRef} className="bg-white py-20">

      {/* HEADER */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
          Our Services
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Everything you need to grow your brand digitally
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 auto-rows-[240px] [grid-auto-flow:dense]">

        {services.map((service, index) => {
          let spanClass = "";
          if (index === 1 || index === 4) {
            spanClass = "md:col-span-2";
          }

          return (
            <div
              key={index}
              className={`service-card relative overflow-hidden rounded-xl shadow-sm group ${spanClass}`}
            >
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-300" />

              <div className="absolute bottom-0 left-0 p-5 text-white z-10">
                <h3 className="text-lg md:text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-sm mt-1 text-white/90 max-w-xs">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
