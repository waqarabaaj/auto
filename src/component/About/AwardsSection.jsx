import React from 'react';
import { FaAward, FaChartLine, FaHandsHelping, FaMedal } from 'react-icons/fa';

function AwardsSection() {
  return (
    <section className="bg-blue-900 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Awards & Recognition
        </h2>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Awards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="p-6 bg-blue-800 text-white rounded-lg border border-blue-700">
              <div className="flex justify-center mb-4">
                <FaAward className="text-4xl" /> {/* Best Company Icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Company</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-blue-800 text-white rounded-lg border border-blue-700">
              <div className="flex justify-center mb-4">
                <FaChartLine className="text-4xl" /> {/* Growing Business Icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Growing Business</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-blue-800 text-white rounded-lg border border-blue-700">
              <div className="flex justify-center mb-4">
                <FaHandsHelping className="text-4xl" /> {/* Great Support Icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Support</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-blue-800 text-white rounded-lg border border-blue-700">
              <div className="flex justify-center mb-4">
                <FaMedal className="text-4xl" /> {/* Excellent Service Icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellent Service</h3>
              <p>Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
  <img
    src="https://images.pexels.com/photos/7434025/pexels-photo-7434025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Awards"
    style={{
      transition: 'transform 0.5s ease-in-out',
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)')
    }
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) rotate(0deg)')}
    className="rounded-lg shadow-lg w-full h-full object-cover"
  />
</div>

        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
