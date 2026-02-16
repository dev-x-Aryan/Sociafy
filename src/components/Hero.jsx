import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "../assets/hero.png";
import hero from "../assets/hero2.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = textRef.current;
      const section = sectionRef.current;
      if (!el || !section) return;

      const text = "Real Brand Growth";

      const tl = gsap.timeline({ paused: true });

      tl.to({}, {
        duration: text.length * 0.08,
        ease: "none",
        onStart: () => {
          el.textContent = "";
        },
        onUpdate: function () {
          const progress = Math.floor(this.progress() * text.length);
          el.textContent = text.slice(0, progress);
        }
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "bottom top",
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="bg-white w-full flex items-center py-8 md:min-h-screen md:py-0 pt-16 md:pt-24"
    >
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-5 md:gap-10 items-center">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left max-w-md mx-auto md:mx-0">
          <h1 className="text-3xl md:text-6xl font-bold text-[#1A1A1A] leading-tight">
            Turning Social into{" "}
            <span ref={textRef} className="text-[#d55f0b]"></span>
            <span className="ml-1 text-[#d55f0b] animate-pulse">|</span>
          </h1>

          <p className="mt-4 md:mt-6 text-gray-600 text-base md:text-lg">
            From strategy and design to performance marketing and high-converting
            websites — we help brands scale smarter, faster, and stronger.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={hero}
            alt="Hero"
            className="w-full max-w-xs md:max-w-lg lg:max-w-4xl h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
