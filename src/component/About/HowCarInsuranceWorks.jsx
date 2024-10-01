import React from "react";
import {
  FaCar,
  FaQuestionCircle,
  FaFileInvoice,
  FaMoneyBillWave,
} from "react-icons/fa";

function HowCarInsuranceWorks() {
  return (
    <section className="bg-[#85b7c4] py-12">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Title and Description */}
        <h2 className="text-white text-3xl lg:text-4xl font-bold mb-4">
          How Car Insurance Works?
        </h2>
        <p className="text-gray-200 text-lg mb-12">
          We are a professional and creative company and we offer you a trusty
          insurance on your vehicle.
        </p>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Step 1: Gather Vehicle Information */}
          <Step
            icon={<FaCar size={32} />}
            title="Provide Vehicle Information"
            description="Enter your car's details like make, model, year, and VIN number to get an accurate quote."
          />

          {/* Line between steps */}
          <Divider />

          {/* Step 2: Answer Personal & Driving Questions */}
          <Step
            icon={<FaQuestionCircle size={32} />}
            title="Personal & Driving Information"
            description="Tell us about yourself, your driving history, and any previous insurance coverage."
          />

          {/* Line between steps */}
          <Divider />

          {/* Step 3: Review Plans & Customize Coverage */}
          <Step
            icon={<FaFileInvoice size={32} />}
            title="Compare & Customize Plans"
            description="Review multiple plans, coverage options, and discounts. Customize your policy to fit your needs."
          />

          {/* Line between steps */}
          <Divider />

          {/* Step 4: Finalize & Purchase Your Policy */}
          <Step
            icon={<FaMoneyBillWave size={32} />}
            title="Purchase Your Policy"
            description="Choose your preferred plan and make the payment to activate your auto insurance coverage."
          />
        </div>
      </div>
    </section>
  );
}

// Step Component for individual steps
function Step({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-white">
      {/* Icon Container */}
      <div className="bg-blue-700 p-4 rounded-full mb-4 shadow-md">{icon}</div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-200 text-sm">{description}</p>
    </div>
  );
}

// Divider Component for the line between steps
function Divider() {
  return (
    <div className="hidden lg:block h-1 w-16 bg-blue-500 flex-shrink-0"></div>
  );
}

export default HowCarInsuranceWorks;
