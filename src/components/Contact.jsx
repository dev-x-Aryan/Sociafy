import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [status, setStatus] = useState("");
  const sectionRef = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/meelkabq", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".contact-left", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      });


      gsap.from(".contact-form", {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      });

      // FOOTER FADE UP
      gsap.from(".footer-animate", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-animate",
          start: "top 95%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className="scroll-mt-18 bg-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div className="contact-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Let’s Grow Your Brand 🚀
            </h2>

            <p className="mt-4 text-gray-600">
              Have a project in mind? Let’s talk and build something amazing together.
            </p>

            <div className="mt-6 space-y-3 text-gray-700">
              <p>📞 +91 90519 48752 - Rohit Agarwal</p>
              <p>📞 +91 82406 59087 - Nikita Jain</p>
              <p>📧 marketing.sociafy@gmail.com</p>
              <p className="flex gap-2"><span>📍</span> <span>RDB Boulevard, 5th Floor<br/>   Sector V, Salt Lake<br/>   Kolkata, West-Bengal, 700091, India</span></p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="contact-form bg-[#F6EEE6] p-8 rounded-xl shadow-lg border border-gray-100 space-y-4"
          >

            {/* hidden metadata */}
            <input
              type="hidden"
              name="Submitted At"
              value={new Date().toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            />

            <input
              type="hidden"
              name="Timezone"
              value={Intl.DateTimeFormat().resolvedOptions().timeZone}
            />

            <input
              type="hidden"
              name="Source"
              value="Sociafy Website"
            />

            {/* inputs */}
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E39A3B]"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E39A3B]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E39A3B]"
            />

            <textarea
              name="message"
              required
              rows="4"
              placeholder="Tell us about your project"
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E39A3B]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#E39A3B] text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>

            {/* status */}
            {status === "SUCCESS" && (
              <p className="text-green-600 text-sm text-center">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "ERROR" && (
              <p className="text-red-600 text-sm text-center">
                ❌ Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="footer-animate bg-[#1A1A1A] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start  gap-8">

          <div>
            <h3 className="text-xl font-semibold">Sociafy Marketing</h3>
            <p className="text-gray-400 mt-3 text-sm">
              Turning social into real brand growth.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Office address</h3>
            <p className="text-gray-400 mt-3 text-sm">RDB Boulevard, 5th Floor <br/>
                    Sector V, Salt Lake<br/>
                    Kolkata, West-Bengal, 700091, India
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-5 text-xl text-gray-400">

              {/* Instagram */}
              <a
                href="https://instagram.com/sociafy_marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E39A3B] hover:scale-110 transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              {/*Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61587629194460&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E39A3B] hover:scale-110 transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/sociafymarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E39A3B] hover:scale-110 transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              {/* Email (Gmail) */}
              <a
                href="mailto:marketing.sociafy@gmail.com?subject=Business Inquiry&body=Hi Sociafy, I want to grow my brand."
                className="hover:text-[#E39A3B] hover:scale-110 transition duration-300"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>

            </div>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Contact;
