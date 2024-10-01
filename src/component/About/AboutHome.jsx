import React from 'react';

function AboutHome() {
  return (
    <section className="relative w-full h-[60vh]">
  {/* Dark Overlay with Content */}
  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900 to-transparent flex justify-center items-center">
    <div className="px-8 md:px-16 lg:px-24 text-white text-center">
      <h1 className="text-6xl font-bold">About Us</h1>
    </div>
  </div>
</section>

  );
}

export default AboutHome;
