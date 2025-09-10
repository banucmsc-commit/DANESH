import React from 'react';

const standards = [
    { name: 'ASME', description: 'American Society of Mechanical Engineers standards for pressure vessels, piping, and components.' },
    { name: 'ASTM', description: 'American Society for Testing and Materials standards for material properties and testing.' },
    { name: 'DIN', description: 'Deutsches Institut für Normung (German Institute for Standardization) standards.' },
    { name: 'API', description: 'American Petroleum Institute standards for the oil and gas industry.' },
    { name: 'NORSOK', description: 'Norwegian standards developed for the petroleum industry.' },
    { name: 'ISO 9001:2015', description: 'International standard for a quality management system (QMS).' },
    { name: 'NACE', description: 'National Association of Corrosion Engineers standards for corrosion control.' },
    { name: 'EN Standards', description: 'European Standards for products, services, or systems.' },
];

const CertificationsPage: React.FC = () => {
    return (
        <div className="bg-brand-light py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-brand-dark">Certifications & Compliance</h1>
                    <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
                        Our unwavering commitment to global quality standards ensures that every product we deliver is reliable, safe, and built to perform.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-xl">
                    <h2 className="text-2xl font-bold text-brand-dark mb-6">Adherence to International Standards</h2>
                    <p className="mb-8 text-brand-dark">
                        We manufacture products in strict compliance with a wide range of international standards to meet the diverse needs of our global clientele. Our quality assurance systems are designed to ensure traceability, consistency, and excellence from raw material sourcing to final inspection.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {standards.map((standard) => (
                            <div key={standard.name} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                                <h3 className="font-bold text-brand-blue text-lg">{standard.name}</h3>
                                <p className="text-sm text-brand-gray">{standard.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-brand-dark mb-4">Our Quality Management System</h2>
                    <p className="max-w-3xl mx-auto text-lg text-brand-gray">
                        Our processes are governed by a robust Quality Management System (QMS) that aligns with ISO 9001:2015 principles. This includes rigorous inspection, continuous process improvement, and comprehensive documentation support to guarantee that our products meet and exceed customer expectations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CertificationsPage;