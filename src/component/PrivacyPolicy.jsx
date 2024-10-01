import {React, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const PrivacyPolicy = () => {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Add smooth scrolling
        });
    }, [pathname]);
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
          <p className="text-center mt-2">
            Protecting your privacy is our priority at motorguardpolicies.com
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-10">
        <section className="space-y-12">
          {/* Information We Collect */}
          <article className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>
              We may collect various types of personal information, including but not limited to your name, address, date of birth, contact details, health information, payment information, and any other information necessary to provide you with our insurance products and services.
            </p>
          </article>

          {/* How We Use Your Information */}
          <article className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>
              Your personal information is primarily used to process applications, administer insurance coverage, manage claims, communicate with you regarding your policy, and improve our services. We may also use your information for marketing purposes with your consent.
            </p>
          </article>

          {/* Data Security */}
          <article className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We employ robust security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, access controls, secure storage, and regular security audits.
            </p>
          </article>

          {/* Third-Party Disclosure */}
          <article className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties without your explicit consent, except as required by law or as necessary for service providers assisting us in delivering our services (e.g., insurance underwriters, claims processors). We ensure that these third parties adhere to strict confidentiality and data protection standards.
            </p>
          </article>

          {/* Cookies and Tracking Technologies */}
          <article className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar technologies to enhance your browsing experience, analyze website traffic, track user interactions, and personalize content and advertisements. You can manage cookie preferences through your browser settings.
            </p>
          </article>

          {/* Links to Third-Party Sites */}
          <article className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Links to Third-Party Sites</h2>
            <p>
              Our website may contain links to third-party websites for your convenience. We are not responsible for the privacy practices or content of these external sites. We recommend reviewing their privacy policies before providing any personal information.
            </p>
          </article>

          {/* Policy Updates */}
          <article className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
            <p>
              This Privacy Policy is subject to periodic updates and revisions. We will notify you of any material changes and seek your consent if required by law. Please review this policy periodically for the latest information.
            </p>
          </article>

          {/* Your Privacy Rights */}
          <article className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
            <p>
              You have the right to access, correct, update, or delete your personal information held by us. You may also request information about our data practices, opt-out of marketing communications, or withdraw consent where applicable.
            </p>
          </article>
          
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
