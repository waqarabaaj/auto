import React, { useState, useEffect, useRef } from 'react';

function OperationalSection() {
  return (
    <section className="container mx-auto py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8">
      {/* Text and Progress Bars Section */}
      <div className="lg:w-1/2 space-y-6">
        {/* Heading and Description */}
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900">
          The operational processes of Carsore
        </h2>
        <p className="text-lg text-gray-600">
          We are a professional and creative company and we offer you a trusty insurance on your vehicle.
        </p>

        {/* Progress Bars */}
        <div className="space-y-4">
          <ProgressBar label="Strategy Consulting" percentage={90} />
          <ProgressBar label="Market Value" percentage={80} />
          <ProgressBar label="Marketing" percentage={70} />
          <ProgressBar label="Relations" percentage={60} />
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <img
          src="https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Team"
          className="rounded-lg shadow-lg max-w-sm object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}

// ProgressBar Component
function ProgressBar({ label, percentage }) {
  const [width, setWidth] = useState(0); // To control the animation
  const progressBarRef = useRef();

  // Function to handle the intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start the progress bar animation when the component is visible
          let start = 0;
          const interval = setInterval(() => {
            if (start <= percentage) {
              setWidth(start);
              start++;
            } else {
              clearInterval(interval);
            }
          }, 15); // Animation speed
        }
      },
      {
        threshold: 0.5, // When 50% of the progress bar is visible
      }
    );
    
    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    // Clean up the observer on unmount
    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, [percentage]);

  return (
    <div className="w-full" ref={progressBarRef}>
      <div className="flex justify-between mb-1">
        <span className="text-blue-900 font-medium">{label}</span>
        <span className="text-blue-900 font-medium">{width}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-gradient-to-r from-blue-400 to-blue-600 h-4 rounded-full"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
}

export default OperationalSection;
