// import React from "react";
import LogoMain from "../assets/Logo-main.svg";

export const Newsletter = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Text Block */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Stay Connected
            </h2>
            <p className="text-gray-600">
              Join Our Mailing List For News &amp; Updates
            </p>
          </div>

          {/* Input + Button */}
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-5 py-3 border border-gray-400 focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 h-full px-5 bg-black text-white flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Watermark Background Logo */}
      <div className="absolute inset-0 opacity-5 flex justify-end items-center pr-10 md:pr-20 pointer-events-none">
        <img
          src={LogoMain}
          alt="Watermark"
          className="w-32 md:w-48 lg:w-64 xl:w-72"
        />
      </div>
    </section>
  );
};

export default Newsletter;