import {React, useEffect} from "react";
import { useLocation } from "react-router-dom";

const TermsAndConditions = () => {
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
          <h1 className="text-4xl font-bold text-center">Terms & Conditions</h1>
          <p className="text-center mt-2">
            Please read our terms carefully before using motorguardpolicies.com
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-10 flex">
        {/* Sidebar - Table of Contents */}
        <aside className="hidden md:block w-1/4 sticky top-20 self-start">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Table of Contents
          </h2>
          <nav className="space-y-4">
            <a
              href="#use-of-website"
              className="block text-blue-600 hover:text-blue-800"
            >
              Use of Website
            </a>
            <a
              href="#eligibility"
              className="block text-blue-600 hover:text-blue-800"
            >
              Eligibility
            </a>
            <a
              href="#insurance-products"
              className="block text-blue-600 hover:text-blue-800"
            >
              Insurance Products
            </a>
            <a
              href="#privacy-policy"
              className="block text-blue-600 hover:text-blue-800"
            >
              Privacy Policy
            </a>
            <a
              href="#intellectual-property"
              className="block text-blue-600 hover:text-blue-800"
            >
              Intellectual Property
            </a>
            <a
              href="#user-responsibilities"
              className="block text-blue-600 hover:text-blue-800"
            >
              User Responsibilities
            </a>
            <a
              href="#limitation-of-liability"
              className="block text-blue-600 hover:text-blue-800"
            >
              Limitation of Liability
            </a>
            <a
              href="#indemnification"
              className="block text-blue-600 hover:text-blue-800"
            >
              Indemnification
            </a>
            <a
              href="#modifications"
              className="block text-blue-600 hover:text-blue-800"
            >
              Modifications
            </a>
            <a
              href="#governing-law"
              className="block text-blue-600 hover:text-blue-800"
            >
              Governing Law
            </a>
          </nav>
        </aside>

        {/* Content */}
        <section className="w-full md:w-3/4 space-y-12">
          <article
            id="use-of-website"
            className="bg-white p-6 shadow rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Use of Website</h2>
            <p>
              You may use our website for informational purposes and to access
              our insurance products and services. You agree not to engage in
              any unlawful or unauthorized activities that may disrupt or impair
              the functioning of our website.
            </p>
          </article>

          <article id="eligibility" className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
            <p>
              You must be of legal age and capable of entering into contracts to
              use our services. You are responsible for providing accurate and
              complete information during the registration and application
              process.
            </p>
          </article>

          <article
            id="insurance-products"
            className="bg-white p-6 shadow rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Insurance Products</h2>
            <p>
              Our insurance products and services are subject to availability
              and may vary by region. All insurance policies are subject to the
              terms and conditions outlined in the respective policy documents.
            </p>
          </article>

          <article
            id="privacy-policy"
            className="bg-white p-6 shadow rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <p>
              Your use of our website is governed by our Privacy Policy, which
              outlines how we collect, use, and protect your personal
              information. By using our website, you consent to the terms of our
              Privacy Policy.
            </p>
          </article>

          <article
            id="intellectual-property"
            className="bg-white p-6 shadow rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Intellectual Property
            </h2>
            <p>
              All content, logos, trademarks, and materials on our website are
              owned or licensed by us and are protected by intellectual property
              laws. You may not use, reproduce, or distribute our intellectual
              property without prior written consent.
            </p>
          </article>

          <article
            id="user-responsibilities"
            className="bg-white p-6 shadow rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">
              User Responsibilities
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities conducted under your
              account. You agree to provide accurate and truthful information
              and to update your information as necessary.
            </p>
          </article>

          <article
            id="limitation-of-liability"
            className="bg-white p-6 shadow rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Limitation of Liability
            </h2>
            <p>
              We are not liable for any direct, indirect, incidental,
              consequential, or punitive damages arising from your use of our
              website or services. We do not guarantee the accuracy,
              completeness, or reliability of information provided on our
              website.
            </p>
          </article>

          <article
            id="indemnification"
            className="bg-white p-6 shadow rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p>
              You agree to indemnify and hold us harmless from any claims,
              losses, damages, liabilities, and expenses arising from your
              violation of these Terms and Conditions or your use of our
              website.
            </p>
          </article>

          <article
            id="modifications"
            className="bg-white p-6 shadow rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect
              of our website or services at any time without prior notice. We
              may also update these Terms and Conditions periodically, and your
              continued use of our website constitutes acceptance of any
              changes.
            </p>
          </article>

          <article
            id="governing-law"
            className="bg-white p-6 shadow rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of [Your
              Jurisdiction], and any disputes shall be resolved in the courts of
              [Your Jurisdiction].
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
