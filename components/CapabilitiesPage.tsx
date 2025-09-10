import React from 'react';

const capabilities = {
    machines: [
        { name: 'CNC Turning Centers', description: 'For high-precision rotational parts.' },
        { name: 'VMC (Vertical Machining Centers)', description: 'For complex milling and drilling operations.' },
        { name: 'Conventional Lathes & Milling', description: 'For versatile and custom machining tasks.' },
        { name: 'Band Saw & Power Hacksaw Cutting', description: 'For accurate raw material preparation.' },
    ],
    facilities: [
        { name: 'In-House Calibration', description: 'Regularly calibrated measuring instruments to ensure accuracy.' },
        { name: 'Hydro Testing Facilities', description: 'To validate the performance and integrity of components under pressure.' },
        { name: 'PMI & Material Analysis', description: 'Positive Material Identification to verify alloy composition.' },
    ],
    factory: {
        size: '3000 sq. ft. Facility',
        description: 'Our modern, well-organized factory in Chennai is equipped to handle projects of varying scales efficiently and safely.',
    },
    capacity: {
        title: 'High Production Capacity',
        description: 'With a robust infrastructure and skilled team, we are capable of meeting bulk orders and stringent delivery schedules without compromising on quality. Our monthly production capacity is geared to support large-scale industrial requirements.'
    }
};

const CapabilityCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <h3 className="text-xl font-bold text-brand-blue mb-2">{title}</h3>
        <p className="text-brand-dark">{description}</p>
    </div>
);

const CapabilitiesPage: React.FC = () => {
    return (
        <div className="bg-brand-light py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-brand-dark">Our Capabilities</h1>
                    <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
                        State-of-the-art infrastructure and a skilled workforce to deliver precision and quality in every component.
                    </p>
                </div>

                <section id="machinery" className="mb-16">
                    <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Machinery & Equipment</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.machines.map(item => <CapabilityCard key={item.name} title={item.name} description={item.description} />)}
                    </div>
                </section>

                <section id="facilities" className="mb-16">
                    <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">In-House Facilities & Factory Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.facilities.map(item => <CapabilityCard key={item.name} title={item.name} description={item.description} />)}
                        <CapabilityCard title={capabilities.factory.size} description={capabilities.factory.description} />
                    </div>
                </section>
                
                <section id="capacity">
                     <div className="max-w-4xl mx-auto bg-brand-blue text-white p-10 rounded-lg shadow-lg text-center">
                        <h2 className="text-3xl font-bold text-brand-yellow mb-4">{capabilities.capacity.title}</h2>
                        <p className="text-lg">{capabilities.capacity.description}</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CapabilitiesPage;