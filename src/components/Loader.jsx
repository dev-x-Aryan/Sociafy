import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#F6EEE6] flex items-center justify-center">
      <div className="text-center">
        {/* Replace with your logo if you want */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#d55f0b] tracking-wide animate-pulse">
          Sociafy
        </h1>
        <p className="text-gray-500 text-sm mt-2">Loading your growth…</p>
      </div>
    </div>
  );
};

export default Loader;