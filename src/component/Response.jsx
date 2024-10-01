import React from 'react';
import { useLocation } from 'react-router-dom';

const ResponsePage = () => {
  const location = useLocation();
  const formData = location.state; // Retrieve form data from state

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-center text-3xl font-bold mb-8">Form Response</h2>
        {formData ? (
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-4">
            <h3 className="text-xl font-bold">Submitted Data:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p><strong>First Name:</strong> {formData.firstName}</p>
              </div>
              <div>
                <p><strong>Last Name:</strong> {formData.lastName}</p>
              </div>
            </div>
            <div>
              <p><strong>Street Address:</strong> {formData.address}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p><strong>City:</strong> {formData.city}</p>
              </div>
              <div>
                <p><strong>State/Province:</strong> {formData.state}</p>
              </div>
              <div>
                <p><strong>Zip/Postal Code:</strong> {formData.zip}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p><strong>Email:</strong> {formData.email}</p>
              </div>
              <div>
                <p><strong>Phone:</strong> {formData.phone}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p><strong>Date of Birth:</strong> {formData.dob}</p>
              </div>
              <div>
                <p><strong>Age:</strong> {formData.age}</p>
              </div>
            </div>
            <div>
              <p>
                <strong>TCPA Consent:</strong> {formData.tcpaConsent ? 'Yes' : 'No'}
              </p>
            </div>
            {/* Display the hidden input value */}
            <div>
              <p><strong>Universal Lead ID:</strong> {formData.universal_leadid || 'Not provided'}</p>
            </div>
          </div>
        ) : (
          <p>No data submitted.</p>
        )}
      </div>
    </section>
  );
};

export default ResponsePage;
