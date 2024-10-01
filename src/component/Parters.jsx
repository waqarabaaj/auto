import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const partnersData = [
  'Forbes And York Insurance LLC', 'Xy7 elite calls', 'My Usa Health', 'Klb National LLC',
  'Quantum Leads LLC', 'Call Pixel Media LLC', 'Lux Media Mix LLC', 'Elite calls',
  'BPO List', 'J-Cam Insurance Corp', 'LeadCreations.com LLC', 'AK Leads Private Limited',
  'United Health Advisor', 'Healthplan One, LLC', 'Clear Match Medicare', 'Medicare Solutions',
  'EDM Leads Network', 'PLI Marketing', '4A Communication And Technologies PVT LTD',
  'SolidQuote LLC', 'Marketing Partners', 'US Medicare Solutions', 'Health Solutions Direct LLC',
  'Senior Protect Solutions, INC.', 'Trusted Senior Specialists', 'QuoteManage LLC', 'Ascend Health',
  'Advantage Health', 'Advise Insurance', 'AHG Insure', 'American Select', 'Axad LLC',
  'Astoria Company Marketing LLC', 'Boost Health Insurance', 'Boost Marketing Inc', 'EHG Group',
  'Flex Rates LLC', 'Health Insurance Alliance LLC', 'Feugo Leads LLC', 'Health guys', 'Health IQ',
  'Healthworks', 'Insurance Line One', 'Insure Farm', 'Rocket Health Insurance', 'TZ Insurance Solutions',
  'Insure Farm', 'Nexlevel', 'Family First Insurance Advisors', 'Select Quote', 'Tobias and Associates',
  'True Coverage', 'Resource Connect', 'Better Living Health Services', 'Brighter HealthCare',
  'Senior Protection, LLC', 'Adolicious', 'GoHealth', 'DigitalTelemarketingSolutions', 
  'US Senior Healthcare Advocates', 'QuoteManage LLC', 'BrokerCalls LLC', '1800 Remodel', 
  '21st Century Insurance', '5 Star Auto Protection', 'Allstate', 'Nationwide', 'AFLAC', 
  'State Farm', 'Amica', 'Farmers', 'Geico', '21st Century', 'Liberty Mutual', 'Esurance', 
  'Progressive', 'American Family', 'AAA', 'Travelers', 'Liberty Insurance Corp', 'Auto Club Insurance Company', 
  'AARP', 'USAA', 'The Hartford', 'Country Insurance and Financial Services', 'Kemper Lloyds Insurance', 
  'Farm Bureau/Farm Family/Rural', 'The General', 'MetLife Auto and Home', 'SAFECO', 
  'CNA', 'Metropolitan Insurance Co.', 'Mega/Midwest', 'Allied', 'Hanover Lloyd’s Insurance Company',
  'Fireman’s Fund', 'Arbella', 'Erie Insurance', 'Dairyland Insurance', 'State National', 
  'American Casualty', 'Mercury', 'AIU', 'American Service Insurance', 'National Insurance',
  'Safeway Insurance', 'American Automobile Insurance', 'Infinity Insurance', 'Taurus SE', 
  'Stratus SXT', 'Escape SEL', 'Citizens', 'American Alliance Insurance', 'Sentinel Insurance',
  'Viking Insurance', 'United Insurance', 'Electric Insurance', 'Lumbermens Mutual', 
  'Shelter', 'Mass Mutual', 'GMAC', 'Taurus SEL'
];

const Partners = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter partners based on search term
  const filteredPartners = partnersData.filter(partner => 
    partner.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
      <section className="bg-blue-600 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Our Partners</h1>
          <p className="text-center mt-2">
            We are proud to work with the these partners
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-6 text-center">
        <input
          type="text"
          placeholder="Search Partners..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-2/4 p-3 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      {/* Partners Grid */}
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPartners.map((partner, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-lg font-semibold text-center text-gray-800">{partner}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
