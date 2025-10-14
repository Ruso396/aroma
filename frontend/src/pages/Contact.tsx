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
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Contact</h1>
          <nav className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-800 font-medium">Contact</a>
          </nav>
        </div>
      </header>

      {/* Map Section */}
      <div className="relative w-full h-96 bg-blue-100">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-2 text-gray-400" />
            <p>Map View - Downtown Conference Center</p>
            <p className="text-sm">New York Area</p>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-3">
          <div className="text-sm font-semibold">Downtown Conference Center</div>
          <div className="text-xs text-gray-600">121 William Street</div>
          <div className="flex items-center gap-1 text-xs text-yellow-500 mt-1">
            <span>4.3</span>
            <span>★★★★☆</span>
            <span className="text-gray-500">52 reviews</span>
          </div>
        </div>
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