import React from "react";
import { NavLink } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-8">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-500 ease-in-out">
          <div className="relative p-4 rounded-lg hover:shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="About Us"
              className="rounded-lg"
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-900 opacity-50 rounded-lg"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 space-y-6 md:pl-12">
          {/* Section Header */}
          <p className="text-blue-300 uppercase font-semibold tracking-widest">
            About Us
          </p>
          <h2 className="text-5xl font-bold leading-tight border-b-4 border-blue-300 pb-2">
            Save up to 25% on Car Insurance
          </h2>
          <p className="text-xl font-light italic">
            Your trusted partner in reliable, affordable car insurance
            solutions.
          </p>
          <p className="text-lg">
            At Motorguard, we understand the importance of protecting your vehicle
            and your peace of mind. That's why we offer tailored auto insurance
            plans to meet your needs, providing comprehensive coverage at
            competitive rates. Whether you're a new driver or seeking to switch
            providers, we've got you covered.
          </p>

          {/* Decorative Line */}
          <div className="h-1 w-24 bg-blue-300 rounded-full my-4"></div>

          {/* Call to Action */}
          <NavLink to="/about">
          <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300">
            Learn More
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
