import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Auto Insurance Questions and Answers
  const faqs = [
    {
      question: 'What is auto insurance and why do I need it?',
      answer: 'Auto insurance provides financial protection against physical damage and/or bodily injury resulting from traffic collisions, and against liability that could arise from incidents in a vehicle. It is required by law in most places.'
    },
    {
      question: 'What types of auto insurance coverage are available?',
      answer: 'There are various types of coverage including liability coverage, collision coverage, comprehensive coverage, uninsured/underinsured motorist coverage, medical payments coverage, and personal injury protection.'
    },
    {
      question: 'How can I lower my auto insurance premium?',
      answer: 'To lower your premium, consider bundling policies, maintaining a clean driving record, raising your deductible, and installing anti-theft devices. Shopping around and comparing quotes from different insurers can also help.'
    },
    {
      question: 'What should I do if I’m involved in a car accident?',
      answer: 'First, ensure everyone’s safety and call emergency services if necessary. Exchange information with the other party, document the scene, and report the accident to your insurance company as soon as possible.'
    },
  ];

  return (
    <div className="flex justify-center items-center bg-blue-50 py-12 px-6">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Frequently Asked Questions
          </h2>
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-md mb-4 overflow-hidden"
            >
              <div
                className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-blue-100"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-blue-800 font-medium">
                  {index + 1}. {item.question}
                </span>
                <span className="text-blue-800">{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <div className="bg-blue-50 p-4 text-blue-700">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/2789781/pexels-photo-2789781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="FAQ Illustration"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
