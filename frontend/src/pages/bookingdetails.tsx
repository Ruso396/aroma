import React, { useState } from 'react';
import { Wifi, Clock, Car, Dumbbell, Shield, RefreshCw, Phone } from 'lucide-react';

export default function HotelBooking() {
  const [formData, setFormData] = useState({
    arrivalDate: '',
    departureDate: '',
    totalGuests: '',
    totalRooms: '',
    accommodationType: '',
    additionalRequirements: '',
    primaryGuestName: '',
    emailAddress: '',
    contactNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Reservation submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Booking</h1>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#" className="text-gray-800 font-medium">Booking</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Reserve Your Stay</h2>
          <p className="text-gray-600">Experience unmatched hospitality with our streamlined booking process</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Booking Form */}
          <div>
            {/* Booking Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Booking Details</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">Arrival Date</label>
                  <input
                    type="date"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                    placeholder="dd-mm-yyyy"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">Departure Date</label>
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                    placeholder="dd-mm-yyyy"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">Total Guests</label>
                  <select
                    name="totalGuests"
                    value={formData.totalGuests}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm text-gray-600"
                  >
                    <option value="">Choose guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">Total Rooms</label>
                  <select
                    name="totalRooms"
                    value={formData.totalRooms}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm text-gray-600"
                  >
                    <option value="">Choose rooms</option>
                    <option value="1">1 Room</option>
                    <option value="2">2 Rooms</option>
                    <option value="3">3 Rooms</option>
                    <option value="4+">4+ Rooms</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Room Preferences */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Room Preferences</h3>
              
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">Accommodation Type</label>
                <select
                  name="accommodationType"
                  value={formData.accommodationType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm text-gray-600"
                >
                  <option value="">No preference</option>
                  <option value="single">Single Room</option>
                  <option value="double">Double Room</option>
                  <option value="suite">Suite</option>
                  <option value="deluxe">Deluxe Room</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">Additional Requirements</label>
                <textarea
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  placeholder="Please specify any special arrangements or preferences..."
                  rows={4}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm resize-none"
                />
              </div>
            </div>

            {/* Guest Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Guest Information</h3>
              
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">Primary Guest Name</label>
                <input
                  type="text"
                  name="primaryGuestName"
                  value={formData.primaryGuestName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">Email Address</label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full mt-6 bg-teal-700 hover:bg-teal-800 text-white py-3.5 rounded font-medium transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              SUBMIT RESERVATION REQUEST
            </button>
          </div>

          {/* Right Column */}
          <div>
            {/* Hotel Image */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=400&fit=crop"
                alt="Hotel"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Why Choose Our Hotel */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Why Choose Our Hotel</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-50 p-2 rounded">
                    <Wifi className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Premium Connectivity</h4>
                    <p className="text-xs text-gray-600">High-speed internet access in all areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-teal-50 p-2 rounded">
                    <Clock className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">24/7 Service</h4>
                    <p className="text-xs text-gray-600">Round-the-clock assistance and support</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-teal-50 p-2 rounded">
                    <Car className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Valet Parking</h4>
                    <p className="text-xs text-gray-600">Complimentary parking with valet service</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-teal-50 p-2 rounded">
                    <Dumbbell className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Wellness Center</h4>
                    <p className="text-xs text-gray-600">Full-service spa and fitness facilities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                <Shield className="w-5 h-5 text-gray-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-800">Secure Booking</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                <RefreshCw className="w-5 h-5 text-gray-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-800">Flexible Cancellation</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                <Phone className="w-5 h-5 text-gray-600 mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-800">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}