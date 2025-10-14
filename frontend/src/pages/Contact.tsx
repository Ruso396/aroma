import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Section */}
      <div className="bg-white border-b mt-32" >
        <div className="max-w-7xl mx-auto px-4  flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Contact</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-teal-700">Home</a>
            <span>/</span>
            <span className="text-gray-800">Contact</span>
          </div>
        </div>
      </div>


      {/* Map Section */}
      <div className="w-full h-[500px]">
          
        <iframe
          title="Namakkal Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62585.89876543211!2d78.1344!3d11.2189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab617c4e46e7f9%3A0x4f1b9b9b9b9b9b9b!2sNamakkal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1696931503000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Info Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Location Card */}
          <div className="bg-gray-100 rounded-lg p-6 flex items-start gap-4">
            <div className="bg-teal-700 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
              <p className="text-gray-600 text-sm">462 Pine Street, Seattle, Washington 98101</p>
            </div>
          </div>

          {/* Phone & Email Card */}
          <div className="bg-gray-100 rounded-lg p-6 flex items-start gap-4">
            <div className="bg-teal-700 p-3 rounded-lg">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Phone & Email</h3>
              <p className="text-gray-600 text-sm">+1 (200) 555-0102</p>
              <p className="text-gray-600 text-sm">connect@example.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Send a Message</h2>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            />

            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-teal-700 text-white px-8 py-3 rounded-md font-medium hover:bg-teal-800 transition-colors uppercase text-sm cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}