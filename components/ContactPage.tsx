import React, { useState } from 'react';
import type { JSX } from 'react';
import SEO from './SEO';

const ContactInfoItem: React.FC<{ icon: JSX.Element; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 text-brand-blue">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-brand-dark">{title}</h3>
      <div className="text-brand-dark">{children}</div>
    </div>
  </div>
);

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };


  return (
    <>
      <SEO
        title="Contact Us - Danesh Industries"
        description="Get in touch with Danesh Industries for precision machined parts, flanges, fittings, and valves. Contact us for inquiries, quotes, and industrial solutions."
        keywords="contact Danesh Industries, precision machining, industrial components, flanges, fittings, valves, Chennai, India, OEM spare parts, pump spare parts, valve components, pipe fittings, stainless steel flanges, carbon steel flanges, industrial valves, mechanical engineering, reverse engineering, CNC machining, industrial manufacturing, petrochemical equipment, oil and gas components, water treatment parts, HVAC components, process industry equipment, custom machining, bulk manufacturing, quality assurance, ASME standards, ASTM standards, DIN standards"
        url="/contact"
      />
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes contact-slideshow {
              0% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=4000&auto=format&fit=crop'); }
              25% { background-image: url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=4000&auto=format&fit=crop'); }
              50% { background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=4000&auto=format&fit=crop'); }
              75% { background-image: url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=4000&auto=format&fit=crop'); }
              100% { background-image: url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=4000&auto=format&fit=crop'); }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
            opacity: 0;
          }
        `
      }} />
      <div className="bg-brand-light py-20 relative" style={{ backgroundSize: 'cover', backgroundPosition: 'center', animation: 'contact-slideshow 18s infinite' }}>
        <div className="absolute inset-0 bg-white opacity-25"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-extrabold text-brand-dark">Contact Us</h1>
            <p className="mt-4 text-lg text-brand-gray">We're here to help and answer any question you might have.</p>
          </div>

          <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg grid md:grid-cols-2 gap-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Contact Info */}
            <div className="space-y-8 flex flex-col justify-center">
              <ContactInfoItem
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                title="Address"
              >
                <p>No 906, 10th Cross Street,</p>
                <p>Venkateswara Nagar, Perungudi,</p>
                <p>Chennai - 600096, Tamil Nadu, India</p>
              </ContactInfoItem>

              <ContactInfoItem
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                title="Email"
              >
                <a href="mailto:marketing@daneshindustries.com" className="hover:text-brand-blue transition-colors duration-300">marketing@daneshindustries.com</a>
                <br />
                <a href="mailto:daneshindustries@gmail.com" className="hover:text-brand-blue transition-colors duration-300">daneshindustries@gmail.com</a>
              </ContactInfoItem>

              <ContactInfoItem
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-pulse" style={{ animationDelay: '0.5s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                title="Phone"
              >
                <p>Praveen Kumar M: <a href="tel:+918939415026" className="hover:text-brand-blue transition-colors duration-300">+91 8939 415026</a>
                  / <a href="tel:+919962333220" className="hover:text-brand-blue transition-colors duration-300">+91 99623 33220</a></p>
                <p>Arivudainambi D: <a href="tel:+919500071287" className="hover:text-brand-blue transition-colors duration-300">+91 95000 71287</a> / <a href="tel:+919884001473" className="hover:text-brand-blue transition-colors duration-300">+91 98840 01473</a></p>
              </ContactInfoItem>

              <ContactInfoItem
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-pulse" style={{ animationDelay: '1s' }} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>}
                title="WhatsApp"
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <a href="https://wa.me/918939415026?text=Hello%20Danesh%20Industries,%20I%20would%20like%20to%20inquire%20about%20your%20services" target="_blank" rel="noopener noreferrer" className="hover:text-brand-blue transition-colors duration-300 text-sm">
                      Praveen Kumar M: +91 8939 415026
                    </a>
                  </div>
                </div>
              </ContactInfoItem>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Send us a Message</h2>
              {isSubmitted ? (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 animate-fade-in" role="alert">
                  <p className="font-bold">Success!</p>
                  <p>Thank you for your message. We will get back to you shortly.</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-dark">Full Name</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue hover:border-brand-blue transition-colors duration-300"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-dark">Email Address</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue hover:border-brand-blue transition-colors duration-300"/>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-brand-dark">Subject</label>
                  <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue hover:border-brand-blue transition-colors duration-300"/>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-dark">Message</label>
                  <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue hover:border-brand-blue transition-colors duration-300"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </form>
              )}
            </div>
          </div>
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-3xl font-bold text-center text-brand-dark mb-8">Our Location</h2>
              <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.301134267781!2d80.2478583152682!3d12.968856990826469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d64758f5555%3A0x95925016e91f2d6f!2sPerungudi%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1628882583568!5m2!1sen!2sus"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Danesh Industries Location"
                  ></iframe>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;