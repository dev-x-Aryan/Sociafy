import React,{useLayoutEffect,useRef} from 'react'
import { gsap } from "gsap";

const services = [
  {
    title: "Digital Marketing",
    icon: "📊",
    desc: "Complete end-to-end digital marketing solutions to grow your brand online.",
  },
  {
    title: "Designing",
    icon: "🎨",
    desc: "Creative logos, branding, social media creatives, and ad designs that stand out.",
  },
  {
    title: "Photoshoot",
    icon: "📸",
    desc: "Professional product, brand, and lifestyle photography to showcase your business.",
  },
  {
    title: "Influencer Marketing",
    icon: "🤝",
    desc: "Strategic collaborations with influencers to increase reach and brand trust.",
  },
  {
    title: "Performance Marketing",
    icon: "📈",
    desc: "ROI-focused advertising campaigns on Google, Facebook, and Instagram.",
  },
  {
    title: "Social Media Management",
    icon: "📱",
    desc: "Content planning, posting, and engagement to grow your online presence.",
  },
  {
    title: "Video Editing",
    icon: "🎬",
    desc: "High-quality reels, ads, and promotional videos that capture attention.",
  },
  {
    title: "Website Development",
    icon: "💻",
    desc: "Fast, modern, and conversion-focused websites for your business.",
  },
];


const Services = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);


    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            cardsRef.current.forEach((card, index) => {
                const fromLeft = index % 2 === 0;

                gsap.from(card, {
                    opacity: 0,
                    x: fromLeft ? -120 : 120,
                    y: 40,
                    duration: 0.9,
                    ease: "power3.out",
                    delay: index * 0.08, // slight stagger like Skaly
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "restart none restart none",
                        onLeaveBack: () => {
                            gsap.set(card, { opacity: 0, x: fromLeft ? -120 : 120, y: 40 });
                        },
                    },
                });

            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

  return (
    <section id='services' className="scroll-mt-18 bg-white  py-4">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Our Services
          </h2>
          <p className="text-gray-600 mt-3">
            Everything you need to grow your brand digitally.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-[#F6EEE6] rounded-xl p-6 shadow-md hover:shadow-[0_12px_35px_rgba(213,95,11,0.35)]  hover:-translate-y-2  transition duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white text-[#E39A3B] text-2xl rounded-md mb-4 group-hover:bg-[#E39A3B] group-hover:text-white transition">{service.icon}</div>

              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

