import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import design from "../assets/design.jpg";
import photo from "../assets/photoshoot.jpg";
import influencer from "../assets/influencer.jpg";
import performance from "../assets/perf.jpg";
import social from "../assets/social media.jpg";
import video from "../assets/videoEditing.jpg";
import website from "../assets/webDev.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  
  {
    title: "Designing",
    desc: "Creative logos, branding, social media creatives, and ad designs that stand out.",
    img: design,
  },
  {
    title: "Photoshoot",
    desc: "Professional product, brand, and lifestyle photography to showcase your business.",
    img: photo,
  },
  {
    title: "Influencer Marketing",
    desc: "Strategic collaborations with influencers to increase reach and brand trust.",
    img: influencer,
  },
  {
    title: "Performance Marketing",
    desc: "ROI-focused advertising campaigns on Google, Facebook, and Instagram.",
    img: performance,
  },
  {
    title: "Social Media Management",
    desc: "Content planning, posting, and engagement to grow your online presence.",
    img: social,
  },
  {
    title: "Video Editing",
    desc: "High-quality reels, ads, and promotional videos that capture attention.",
    img: video,
  },
  {
    title: "Website Development",
    desc: "Fast, modern, and conversion-focused websites for your business.",
    img: website,
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.utils.toArray(".service-card").forEach((card, i) => {

        const image = card.querySelector(".card-img");
        const content = card.querySelector(".card-content");

        gsap.from(image, {
          scale: 1.2,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(content, {
          y: 80,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="bg-white">

      {/* Heading */}
      <div className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
          Our Services
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Everything you need to grow your brand digitally
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-32 pb-20">

        {services.map((service, index) => (
          <div
            key={index}
            className="service-card max-w-6xl mx-auto px-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">

              {/* IMAGE */}
              <img
                src={service.img}
                alt={service.title}
                className="card-img w-full h-[420px] md:h-[520px] object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* CONTENT */}
              <div className="card-content absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold">
                  {service.title}
                </h3>
                <p className="mt-4 text-white/90">
                  {service.desc}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;
