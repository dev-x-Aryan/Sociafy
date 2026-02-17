import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

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

  return (
    <>
      {/* CONTACT SECTION */}
      <section id="contact" className="scroll-mt-18 bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* LEFT: TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Let’s Grow Your Brand 🚀
            </h2>

            <p className="mt-4 text-gray-600">
              Have a project in mind? Let’s talk and build something amazing together.
            </p>

            <div className="mt-6 space-y-3 text-gray-700">
              <p>📞 +91 90519 48752</p>
              <p>📞 +91 82406 59087</p>
              <p>📧 marketing.sociafy@gmail.com</p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#F6EEE6] p-8 rounded-xl shadow-lg border border-gray-100 space-y-4"
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

            {/* form fields */}
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

            {/* status messages */}
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

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] text-white py-10">
        <div className="md:grid-cols-2 gap-8max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold">Sociafy Marketing</h3>
            <p className="text-gray-400 mt-3 text-sm">
              Turning social into real brand growth. We help businesses scale digitally with strategy, creativity, and performance.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4 text-gray-400 text-lg">
              <a href="#" className="hover:text-[#E39A3B]">🌐</a>
              <a href="#" className="hover:text-[#E39A3B]">📸</a>
              <a href="#" className="hover:text-[#E39A3B]">💼</a>
              <a href="#" className="hover:text-[#E39A3B]">▶️</a>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Sociafy Marketing. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Contact;