import React from "react";
import { FaCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#6ea5ca] text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 gap-12">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Why Choose Us"
              className="rounded-lg"
            />
            {/* Overlay for stats */}
            <div className="absolute bottom-0 left-0 w-full bg-blue-700 bg-opacity-90 py-4 flex justify-around text-center">
              <div>
                <p className="text-xl font-bold">100%</p>
                <p className="text-sm">Customer satisfaction</p>
              </div>
              <div>
                <p className="text-xl font-bold">200+</p>
                <p className="text-sm">Monthly active users</p>
              </div>
              <div>
                <p className="text-xl font-bold">100+</p>
                <p className="text-sm">New Customer per week</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 space-y-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold">
            Why Choose Carsore for Your Car Insurance?
          </h2>
          <p className="text-lg">
            Finding the right car insurance shouldn’t be complicated. At
            Carsore, we simplify the process by offering quick comparisons,
            discounts, and flexible options to suit your needs. Discover how we
            make getting covered fast, easy, and affordable.
          </p>

          {/* List Section */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white text-lg font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Personalized Car Insurance Quotes
                </h3>
                <p className="text-sm">
                  Answer a few questions, and receive live quotes tailored to
                  your needs within minutes.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white text-lg font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold">Maximize Your Savings</h3>
                <p className="text-sm">
                  Compare all available discounts in one place and get the best
                  rates for comprehensive coverage.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white text-lg font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Convenient Purchase Options
                </h3>
                <p className="text-sm">
                  Choose to buy your car insurance online or speak directly to
                  our experts over the phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
