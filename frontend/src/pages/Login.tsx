import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function ResortBookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Booking submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">


      {/* Main Content */}
      <div className="relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Form Container */}
        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <div className="bg-black bg-opacity-70 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
            {/* Title */}
            <h1 className="text-white text-3xl font-bold text-center mb-8">
              Resort Booking Form
            </h1>

            {/* Subtitle */}
            <h2 className="text-white text-center text-lg mb-8 font-light tracking-wide">
              Booking Now
            </h2>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* First Name */}
              <div>
                <label className="flex items-center gap-2 text-white text-sm mb-2">
                  <span className="text-red-500">*</span>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-20"
                  placeholder="First Name"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="flex items-center gap-2 text-white text-sm mb-2">
                  <span className="text-red-500">*</span>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-20"
                  placeholder="Last Name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="flex items-center gap-2 text-white text-sm mb-2">
                  <span className="text-red-500">*</span>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-20"
                  placeholder="Email Address"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-white text-sm mb-2">
                  <span className="text-red-500">*</span>
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-20"
                  placeholder="Phone"
                />
              </div>

              {/* Destination */}
              <div>
                <label className="flex items-center gap-2 text-white text-sm mb-2">
                  <span className="text-red-500">*</span>
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-20"
                  placeholder="Destination"
                />
              </div>

              {/* Check In */}
              <div>
                <label className="flex items-center gap-2 text-white text-sm mb-2">
                  <span className="text-red-500">*</span>
                  Check In
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-20"
                />
              </div>

              {/* Check Out */}
              <div>
                <label className="flex items-center gap-2 text-white text-sm mb-2">
                  <span className="text-red-500">*</span>
                  Check Out
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-20"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="flex items-center gap-2 text-white text-sm mb-2">
                  <span className="text-red-500">*</span>
                  Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-500 rounded text-white focus:outline-none focus:ring-2 focus:ring-white focus:bg-opacity-20"
                >
                  <option value="" className="bg-gray-800">Select Guests</option>
                  <option value="1" className="bg-gray-800">1 Guest</option>
                  <option value="2" className="bg-gray-800">2 Guests</option>
                  <option value="3" className="bg-gray-800">3 Guests</option>
                  <option value="4" className="bg-gray-800">4+ Guests</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-gray-800 hover:bg-gray-700 text-white px-12 py-3 rounded font-medium transition-colors"
              >
                Book Now
              </button>
            </div>

            {/* Footer Text */}
            <div className="text-center mt-8 text-white text-xs">
              <span className="text-red-500">*</span> Mandatory Fields to be Filled • 
              <span className="ml-1">All Data Encrypted</span> • 
              <span className="ml-1">Data is not Vulnerable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}