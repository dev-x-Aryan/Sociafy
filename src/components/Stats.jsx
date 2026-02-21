import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // fade in the cards
      gsap.from(".stat-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      });

      // COUNTER ANIMATION
      const counters = document.querySelectorAll(".counter");

      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");

        let obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "restart none none none",
          },
          onUpdate: () => {
            counter.textContent = Math.floor(obj.val) + "+";
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-r from-[#d55f0b] via-[#e07012] to-[#f39c3d]"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-14 shadow-xl border border-white/20">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            {/* CARD 1 */}
            <div className="stat-card bg-[#F6EEE6] rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3
                className="counter text-4xl font-bold text-blue-600"
                data-target="50"
              >
                0
              </h3>
              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>

            {/* CARD 2 */}
            <div className="stat-card bg-[#F6EEE6] rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3
                className="counter text-4xl font-bold text-blue-600"
                data-target="200"
              >
                0
              </h3>
              <p className="text-gray-600 mt-2">Total Projects</p>
            </div>

            {/* CARD 3 */}
            <div className="stat-card bg-[#F6EEE6] rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">👥</div>
              <h3
                className="counter text-4xl font-bold text-blue-600"
                data-target="25"
              >
                0
              </h3>
              <p className="text-gray-600 mt-2">Total Team</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Stats;
