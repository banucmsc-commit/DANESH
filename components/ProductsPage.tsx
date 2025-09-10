import React, { useState } from 'react';

// Data extracted from the user-provided document
const productData = [
    {
        id: 'valve-components',
        category: 'Valve Components',
        introduction: 'At Danesh Industries, we specialize in manufacturing high-quality valve components designed for precision, durability, and compatibility with industrial valve systems. Our components are engineered to meet global quality standards and are widely used in oil & gas, petrochemicals, water treatment, and process industries.',
        items: [
            {
                name: 'Plug Valve Components',
                specifications: { Material: 'Teflon', Finishing: 'Machined', 'Packaging Type': 'Box', Size: '2 inch', Color: 'White' },
                additionalInfo: { 'Production Capacity': '500 Nos. per month', 'Delivery Time': '3 weeks', Packaging: 'As per customer requirement' },
                keyFeatures: ['Manufactured with premium-grade Teflon for chemical resistance', 'Precision machined for accurate sealing and smooth operation', 'High-volume production capability (500 pcs/month)', 'Packaged for safe handling and logistics']
            },
            {
                name: 'Stem for Ball Valve',
                specifications: { Material: 'Stainless Steel SS316', Size: '½ inch to 12 inches', 'Usage/Application': 'For use in Ball Valves', 'Head Shape': 'Circular', 'Packaging Type': 'As per customer requirement' },
                additionalInfo: { 'Delivery Time': '1 month' },
                keyFeatures: ['Made from SS316 for superior corrosion resistance and durability', 'Available in a wide size range (½” to 12”)', 'High strength and precision machining for reliable valve operation', 'Custom packaging available']
            },
            {
                name: 'Ball Valve Seat Ring',
                specifications: { Size: '4"', Color: 'Silver', Material: 'Mild Steel', Shape: 'Round', Application: 'Industrial use' },
                additionalInfo: { 'Production Capacity': '100 Nos. per month', 'Delivery Time': '3 weeks', Packaging: 'As per customer requirement' },
                keyFeatures: ['Durable Build from premium mild steel', 'Precision Machined for accurate fit and reliable sealing', 'Corrosion Resistant silver finish', 'Custom Options available', 'Reliable Supply (100 units/month)'],
                faq: [
                    { q: 'What is a Ball Valve Seat Ring?', a: 'It is a round sealing component inside a ball valve that ensures tight shutoff and smooth valve operation.' },
                    { q: 'What is the standard size?', a: 'Our standard offering is 4 inches, but we also provide custom sizes based on project needs.' }
                ]
            },
            // ... other valve components
        ]
    },
    {
        id: 'flanges',
        category: 'Flanges',
        introduction: 'We manufacture and supply a wide range of industrial flanges designed for reliability and performance, engineered to meet international standards (ASME, ASTM, DIN, etc.) for various industries.',
        items: [
            {
                name: 'General Flanges',
                description: 'Types include Slip-On, Butt Weld, Socket Weld, Threaded, Blind, and Lap Joint.',
                advantages: ['Precision engineered', 'Compliance with global standards', 'Excellent sealing capability', 'Versatile applications', 'Cost-effective & durable'],
                faq: [
                    { q: 'What are flanges?', a: 'Flanges are rims or collars used to connect pipes, valves, and other equipment in a piping system.' },
                    { q: 'What materials do you use?', a: 'Carbon steel, stainless steel, duplex, super duplex, and exotic alloys like Monel, Incoloy, and Hastelloy.' }
                ]
            },
            {
                name: 'MS Flanges (Socket Weld & Weld Neck)',
                keyFeatures: ['High-grade mild steel', 'Strong weldability', 'Resistant to corrosion and leakage', 'Available in multiple standards', 'Cost-effective'],
                applications: ['Oil & Gas pipelines', 'Power plants & energy systems', 'Water transfer and treatment facilities', 'Industrial process plants', 'Plumbing & HVAC systems']
            },
            {
                name: 'SS 304 Flanges',
                description: 'A versatile and widely used flange material with excellent durability, weldability, and corrosion resistance.',
                advantages: ['Durability', 'Corrosion Resistance', 'Versatility', 'Affordability'],
                faq: [
                    { q: 'What is SS 304 stainless steel?', a: 'An austenitic stainless steel grade with ~18% chromium and 8% nickel, offering excellent corrosion resistance.' }
                ]
            },
            {
                name: 'MS Spacer Flanges',
                description: 'Used in high-pressure piping systems as filler components between flanges or valves.',
                advantages: ['High Strength', 'Corrosion Resistance', 'Cost-Effective', 'Dimensional Stability', 'Ease of Installation'],
                applications: ['Oil & Gas pipelines', 'Petrochemical plants', 'Power generation systems']
            },
            {
                name: 'SS 316 Flanges',
                description: 'Designed for maximum durability and corrosion resistance, containing molybdenum for enhanced resistance against chlorides, acids, and seawater.',
                keyFeatures: ['Superior Corrosion Resistance', 'High Strength & Durability', 'Excellent Sealing', 'Heat Resistance'],
                faq: [
                    { q: 'What makes SS 316 different from SS 304?', a: 'SS 316 contains molybdenum, which improves resistance to chlorides, chemicals, and seawater, making it stronger against corrosion.' }
                ]
            },
            {
                name: 'GI Slip-On & Threaded Flanges',
                description: 'Galvanized Iron flanges for easy installation and secure connections with enhanced corrosion resistance.',
                advantages: ['Secure & robust connection', 'Easy installation', 'Corrosion-resistant coating'],
                faq: [
                    { q: 'Why use GI instead of plain steel?', a: 'The galvanized coating provides enhanced resistance against corrosion, rust, and harsh environments, extending the service life of the flange.' }
                ]
            }
        ]
    },
    {
        id: 'fittings',
        category: 'Pipe Fittings & Other Components',
        introduction: 'We manufacture a comprehensive range of pipe fittings and other precision components that form the backbone of modern piping and mechanical systems, all designed to meet global standards.',
        items: [
            {
                name: 'Pipe Fittings (General)',
                description: 'We offer Barbed, Threaded, and Compression fittings in materials like steel, brass, and plastic.',
                advantages: ['Premium raw materials', 'Compliance with global standards', 'Durable, corrosion-resistant, and leak-proof designs', 'Customized fittings available'],
                faq: [{ q: 'Do you provide customized fittings?', a: 'Yes, we manufacture custom fittings based on client specifications for specialized projects.' }]
            },
            {
                name: 'Specialized Fittings',
                description: 'Our range includes Cast Steel Screwed, Ductile Iron, Grooved, Forged Steel, GI (including R Brand), and Stainless Steel (SS) fittings.',
                keyFeatures: [
                    'Cast Steel Screwed: Easy assembly without welding.',
                    'Ductile Iron: High tensile strength, heat and corrosion resistant.',
                    'Grooved: Quick installation, flexibility, and enhanced safety.',
                    'Forged Steel: Superior strength for high-pressure/temperature systems.',
                    'SS Fittings: For high-pressure, hygienic, or corrosive applications.'
                ]
            },
            {
                name: 'Other Machined Components',
                description: 'We also manufacture Pull Studs, Control Valve components, Mild Steel Pins, Partition Plate Dies, Thrust Bearings, and Solenoid Valves for various industrial needs.',
                 keyFeatures: [
                    'Pull Studs: High-strength B7 steel for CNC machines.',
                    'Control Valves (Quick Opening Cage): For reliable flow control.',
                    'Mild Steel Pins: Chrome-finished for automotive/industrial use.',
                    'Partition Plate Dies: Precision dies for manufacturing.',
                    'Thrust Bearings: Engineered for high-load axial applications.',
                    'Solenoid Valves: For automation and fluid control.'
                ]
            },
            {
                name: 'Solenoid Valves',
                description: 'Designed for precision control, durability, and efficiency in industrial piping and automation systems. These valves use electromagnetic operation to regulate the flow of liquids or gases.',
                specifications: { 
                    'Type': 'Electromagnetically operated valve',
                    'Material': 'High-grade stainless steel / brass / mild steel (options available)',
                    'Application': 'Industrial automation, fluid & gas control systems',
                    'Surface Finish': 'Polished / Coated (as per requirement)',
                    'Packaging': 'As per customer requirement'
                },
                additionalInfo: { 
                    'Production Capacity': 'Bulk supply available',
                    'Delivery Time': '3–4 weeks',
                    'Packaging': 'Safe and customizable as per client needs'
                },
                keyFeatures: [
                    'Precise Flow Control – Provides accurate regulation of fluids and gases',
                    'Durable Build – Manufactured from premium-grade materials for long service life',
                    'Automation-Ready – Compatible with industrial automation and process systems',
                    'Leak-Proof Operation – Ensures reliability in critical applications',
                    'Custom Options – Available in different sizes, voltages, and materials'
                ],
                applications: [
                    'Industrial automation & process control',
                    'Oil & gas plants',
                    'Chemical & petrochemical industries',
                    'Water treatment & distribution systems',
                    'Food & beverage processing',
                    'Pharmaceutical & medical applications',
                    'HVAC & refrigeration systems'
                ],
                faq: [
                    { q: 'What is a solenoid valve?', a: 'A solenoid valve is an electromagnetically operated valve used to control the flow of liquids or gases in pipelines.' },
                    { q: 'What industries use solenoid valves?', a: 'They are widely used in oil & gas, water treatment, chemical plants, pharmaceuticals, HVAC, and automation systems.' },
                    { q: 'What materials are your solenoid valves made of?', a: 'We manufacture solenoid valves in stainless steel, brass, and mild steel, based on customer requirements.' },
                    { q: 'Can solenoid valves be customized?', a: 'Yes, we offer custom sizes, voltage configurations, and material options as per project needs.' },
                    { q: 'What is the typical delivery time?', a: 'Standard delivery is 3–4 weeks, depending on order volume and customization.' }
                ]
            }
        ]
    }
];

const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2 hover:bg-gray-50 focus:outline-none"
                aria-expanded={isOpen}
            >
                <h3 className="text-xl font-bold text-brand-blue">{title}</h3>
                <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-6 bg-white prose max-w-none">
                    {children}
                </div>
            </div>
        </div>
    );
};

const ProductDetail: React.FC<{ item: any }> = ({ item }) => {
    const renderList = (items: string[]) => (
        <ul className="list-disc pl-5 space-y-1">
            {items.map((text, index) => <li key={index}>{text}</li>)}
        </ul>
    );

    const renderTable = (data: Record<string, string>) => (
        <table className="min-w-full">
            <tbody>
                {Object.entries(data).map(([key, value]) => (
                    <tr key={key} className="border-b">
                        <td className="py-2 font-semibold pr-4">{key}</td>
                        <td className="py-2">{value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderFaq = (faqItems: { q: string, a: string }[]) => (
        <div className="space-y-4">
            {faqItems.map((faq, index) => (
                <div key={index}>
                    <p className="font-bold">Q: {faq.q}</p>
                    <p>A: {faq.a}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div className="space-y-4">
            {item.description && <p className="text-lg">{item.description}</p>}
            {item.specifications && (<div><h4 className="text-lg font-semibold mb-2">Specifications</h4>{renderTable(item.specifications)}</div>)}
            {item.additionalInfo && (<div><h4 className="text-lg font-semibold mb-2">Additional Information</h4>{renderTable(item.additionalInfo)}</div>)}
            {item.keyFeatures && (<div><h4 className="text-lg font-semibold mb-2">Key Features</h4>{renderList(item.keyFeatures)}</div>)}
            {item.advantages && (<div><h4 className="text-lg font-semibold mb-2">Advantages</h4>{renderList(item.advantages)}</div>)}
            {item.applications && (<div><h4 className="text-lg font-semibold mb-2">Applications</h4>{renderList(item.applications)}</div>)}
            {item.faq && (<div><h4 className="text-lg font-semibold mb-2">FAQs</h4>{renderFaq(item.faq)}</div>)}
        </div>
    );
};

const ProductsPage: React.FC = () => {
    return (
        <div className="bg-brand-light py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark">Our Products</h1>
                    <p className="mt-4 text-lg text-brand-gray max-w-3xl mx-auto">
                        Explore our comprehensive range of high-quality, precision-engineered components for various industrial applications.
                    </p>
                </div>
                
                <div className="sticky top-16 bg-brand-light py-4 z-40 mb-12 border-b-2 border-brand-yellow">
                    <div className="container mx-auto flex justify-center items-center space-x-4 md:space-x-8 overflow-x-auto whitespace-nowrap">
                        <h3 className="hidden md:block font-bold text-brand-dark flex-shrink-0">Navigate to:</h3>
                        {productData.map(cat => (
                            <a key={cat.id} href={`#${cat.id}`} className="font-semibold text-brand-blue hover:text-brand-dark hover:underline transition-colors duration-300 flex-shrink-0">
                                {cat.category}
                            </a>
                        ))}
                    </div>
                </div>

                {productData.map((categoryData) => (
                    <section key={categoryData.id} id={categoryData.id} className="mb-20 scroll-mt-32">
                        <div className="mb-8">
                            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4 border-l-4 border-brand-yellow pl-4">{categoryData.category}</h2>
                            <p className="text-lg text-brand-gray">{categoryData.introduction}</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg">
                            {categoryData.items.map((item, index) => (
                                <AccordionItem key={index} title={item.name}>
                                    <ProductDetail item={item} />
                                </AccordionItem>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;