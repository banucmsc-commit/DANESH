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
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-500 group">
        <h3 className="text-xl font-bold text-brand-blue mb-2 group-hover:text-brand-dark transition-colors duration-300">{title}</h3>
        <p className="text-brand-dark group-hover:text-gray-700 transition-colors duration-300">{description}</p>
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full h-1 bg-gradient-to-r from-brand-blue to-brand-yellow rounded-full"></div>
        </div>
    </div>
);

const CapabilitiesPage: React.FC = () => {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes capabilities-slideshow {
                        0% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop'); }
                        20% { background-image: url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop'); }
                        40% { background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop'); }
                        60% { background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'); }
                        80% { background-image: url('https://images.unsplash.com/photo-1581092921462-63f1c1ae3b09?q=80&w=2070&auto=format&fit=crop'); }
                        100% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop'); }
                    }
                    @keyframes fade-in {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in {
                        animation: fade-in 0.6s ease-out forwards;
                        opacity: 0;
                    }
                    @keyframes bounce-in {
                        0% { transform: scale(0.3); opacity: 0; }
                        50% { transform: scale(1.05); }
                        70% { transform: scale(0.9); }
                        100% { transform: scale(1); opacity: 1; }
                    }
                    .animate-bounce-in {
                        animation: bounce-in 0.8s ease-out forwards;
                        opacity: 0;
                    }
                    @keyframes zoom-in {
                        from { transform: scale(0.8); opacity: 0; }
                        to { transform: scale(1); opacity: 1; }
                    }
                    .animate-zoom-in {
                        animation: zoom-in 0.8s ease-out forwards;
                        opacity: 0;
                    }
                    @keyframes slide-in-left {
                        from { transform: translateX(-50px); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    .animate-slide-in-left {
                        animation: slide-in-left 0.7s ease-out forwards;
                        opacity: 0;
                    }
                    @keyframes slide-in-right {
                        from { transform: translateX(50px); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    .animate-slide-in-right {
                        animation: slide-in-right 0.7s ease-out forwards;
                        opacity: 0;
                    }
                `
            }} />
            <div className="bg-brand-light py-20 relative" style={{ backgroundSize: 'cover', backgroundPosition: 'center', animation: 'capabilities-slideshow 18s infinite' }}>
                <div className="absolute inset-0 bg-white opacity-60"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl font-extrabold text-brand-dark">Our Capabilities</h1>
                        <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
                            State-of-the-art infrastructure and a skilled workforce to deliver precision and quality in every component.
                        </p>
                    </div>

                    <section id="machinery" className="mb-16">
                        <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>Machinery & Equipment</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {capabilities.machines.map((item, index) => (
                                <div key={item.name} className="animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                                    <CapabilityCard title={item.name} description={item.description} />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="facilities" className="mb-16">
                        <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center animate-zoom-in" style={{ animationDelay: '0.6s' }}>In-House Facilities & Factory Highlights</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {capabilities.facilities.map((item, index) => (
                                <div key={item.name} className={index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"} style={{ animationDelay: `${0.8 + index * 0.15}s` }}>
                                    <CapabilityCard title={item.name} description={item.description} />
                                </div>
                            ))}
                            <div className="animate-zoom-in" style={{ animationDelay: '1.2s' }}>
                                <CapabilityCard title={capabilities.factory.size} description={capabilities.factory.description} />
                            </div>
                        </div>
                    </section>

                    <section id="capacity">
                        <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg text-center animate-bounce-in" style={{ animationDelay: '1.4s' }}>
                            <h2 className="text-3xl font-bold text-brand-blue mb-4">{capabilities.capacity.title}</h2>
                            <p className="text-lg text-brand-dark">{capabilities.capacity.description}</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default CapabilitiesPage;
