import React from "react";

const About = () => {
  return (
    <section id='about' className="scroll-mt-20 bg-white py-20">
      <div className="mt-8 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: IMAGE / ILLUSTRATION */}
        <div className="relative">
          {/* Replace this with your own image if you want */}
          <div className="w-full h-[380px] md:h-[420px] bg-[#F6EEE6] rounded-2xl shadow-lg flex items-center justify-center">
            <span className="text-gray-400 text-sm">
              (Your team / working image here)
            </span>
          </div>

          
        </div>

        {/* RIGHT: CONTENT */}
        <div>
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

          {/* Small features list */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-[#1A1A1A]">
            <div>✔ Strategy + Execution</div>
            <div>✔ Data-Driven Campaigns</div>
            <div>✔ Creative Content</div>
            <div>✔ Growth Focused</div>
          </div>

          
        </div>

      </div>
    </section>
  );
};

export default About;
