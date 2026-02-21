import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../assets/about.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // IMAGE (LEFT)
      tl.from(".about-image", {
        x: -80,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      // CONTENT (RIGHT)
      tl.from(".about-content", {
        x: 80,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      }, "-=0.5");

      // TEXT STAGGER
      tl.from(".about-content > *", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.3,
        ease: "power2.out",
      }, "-=0.4");

      // TESTIMONIAL CARD
      tl.from(".about-testimonial", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      }, "-=0.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id='about' className="scroll-mt-20 bg-white py-20">

      <div className="mt-8 max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="about-image relative">
            <div className="w-full h-[380px] md:h-[420px] bg-[#F6EEE6] rounded-2xl shadow-lg overflow-hidden">
              <img
                src={about}
                alt="About Us"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">
            <p className="text-[#E39A3B] font-semibold mb-2">About Sociafy</p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
              We Help Brands Grow in the Digital World
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Sociafy Marketing is a full-service digital marketing agency focused on
              helping brands build a strong online presence and drive real business
              results. From creative design to performance-driven campaigns, we combine
              strategy, creativity, and data to grow your brand.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is simple — to help businesses scale smarter, faster, and more
              effectively in today’s digital landscape.
            </p>

            {/* FEATURES */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-[#1A1A1A]">
              <div>✔ Strategy + Execution</div>
              <div>✔ Data-Driven Campaigns</div>
              <div>✔ Creative Content</div>
              <div>✔ Growth Focused</div>
            </div>
          </div>

        </div>

        <div className="about-testimonial mt-12 bg-[#F6EEE6] p-6 md:p-8 rounded-xl shadow-sm border justify-center align-middle border-gray-100 relative max-w-4xl">
          <span className="text-[#E39A3B] text-4xl absolute -top-3 left-4">“</span>

          <div className="text-[#E39A3B] mb-2 text-lg">
            Testimonial
          </div>

          <p className="text-gray-700 leading-relaxed italic">
            Working with you has honestly been such a smooth and positive experience. From the very beginning,
            you’ve been incredibly understanding of my vision and have always made the effort to translate my ideas
            into exactly what I had in mind — sometimes even better.

            What I appreciate the most is your availability and responsiveness. No matter the time or the request,
            you’ve always been there to help, guide, and make sure everything is handled perfectly. That level of
            dedication is rare and truly makes a difference.

            You bring not just professionalism, but also a very warm and friendly approach to your work, which makes
            collaborating with you feel comfortable and effortless 💖

            I’m genuinely so happy I chose to work with you, and I’m excited to continue growing together. I would
            absolutely recommend you to anyone looking for someone reliable, creative, and committed to delivering
            quality work.
          </p>

          <p className="mt-4 font-semibold text-[#1A1A1A]">
            — The Brushroom
          </p>

        </div>

      </div>

    </section>
  );
};

export default About;
