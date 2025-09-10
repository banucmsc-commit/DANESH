import React from 'react';

const technologies = [
    { name: 'SolidWorks', description: 'For 3D modeling and design.' },
    { name: 'Mastercam', description: 'For CNC process automation.' },
    { name: 'FARO Arm', description: 'For precision measurement.' },
    { name: 'PMI & Mobile Spectro', description: 'For material analysis.' },
    { name: 'Hydro Testing', description: 'For final performance validation.' },
];

const TechnologyPage: React.FC = () => {
    return (
        <div className="bg-brand-light py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-brand-dark">Our Technology</h1>
                    <p className="mt-4 text-lg text-brand-gray">Integrating advanced tools and software into our processes.</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <ul className="space-y-4">
                        {technologies.map((tech, index) => (
                            <li key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-6 hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-2xl">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-brand-blue">{tech.name}</h3>
                                    <p className="text-brand-dark">{tech.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TechnologyPage;