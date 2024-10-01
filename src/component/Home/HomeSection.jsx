import React from "react";
import { NavLink } from "react-router-dom";

const HomeSection = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8">
        {/* Text Section */}
        <div className="max-w-lg text-left space-y-4 text-[#203150]">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-2xl">
            Welcome to Motorguard Policies 
          </p>
          <h1 className="text-5xl font-bold">
            Fast, Affordable Car Insurance Quotes in Just Minutes
          </h1>
          <p className="text-lg">
            Protect your car and your peace of mind with comprehensive auto
            insurance plans fit your needs. At Motorguard, we make
            getting a quote easy and quick—compare top rates and save more on
            coverage today.
          </p>
          <NavLink to="/insurance">
            <button className="bg-blue-600 text-white mt-6 px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Get Quote
            </button>
          </NavLink>
        </div>

        {/* Car Image Section */}
        <div className="mt-8 md:mt-0">
          <style>
            {`
          @keyframes zoom {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}
          </style>
          <img
            src="CarHome.png"
            alt="Car"
            style={{
              animation: "zoom 3s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
