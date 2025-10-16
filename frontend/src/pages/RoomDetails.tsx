import React, { useState } from 'react';
import { Star, Users, Maximize, Wifi, Coffee, Phone, Bath } from 'lucide-react';
import { useNavigate } from "react-router-dom";

import mainImage from "../assets/room.jpg"
import gallery1 from "../assets/gallery1.webp"
import gallery2 from "../assets/gallery2.webp"
import gallery3 from "../assets/gallery3.webp"
import gallery4 from "../assets/gallery4.webp"

export default function RoomDetails() {
  const navigate = useNavigate();

const galleryImages = [gallery1, gallery2, gallery3, gallery4];
  return (
    <div className="min-h-screen bg-white mt-28">
      

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Main Room Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Room Image */}
          <div className="relative">
            <span className="absolute top-4 left-4 bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium z-10">
              Popular Suite
            </span>
            <img
              src={mainImage}
              alt="Room"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Room Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-blue-700 text-white px-2 py-1 text-xs font-bold rounded">4.8</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 text-sm">124 Reviews</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Deluxe Ocean View Suite
            </h2>

            <p className="text-gray-600 mb-6">
              Experience luxury with breathtaking views created and modern amenities.
            </p>

            <div className="flex gap-6 mb-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>4-6 guests</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="w-4 h-4" />
                <span>823 sqft</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4" />
                <span>Free Wifi</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                <span>Breakfast</span>
              </div>
            </div>

            <div className="flex items-end gap-3 mb-6">
              <span className="text-4xl font-bold text-blue-600">₹395</span>
              <span className="text-gray-600 mb-1">per night</span>
            </div>

            <button
      onClick={() => navigate("/booking")}
      className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded font-medium transition-colors"
    >
      Book Now
    </button>
          </div>
        </div>

        {/* Room Gallery */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Room Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow cursor-pointer hover:opacity-90 transition"
              />
            ))}
          </div>
        </section>

        {/* Room Overview */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Room Overview</h3>
              <p className="text-gray-600 mb-4">
                Indulge in the ultimate luxury experience at our Deluxe Ocean View Suite. This Spacious room combines the finest amenities with stunning ocean views, creating a haven perfect for the relaxation and rejuvenation. The suite features elegant furnishings, a king-sized bed, and a private balcony where you can soak in the panoramic seascape. The property's spacious, luxuriously appointed living areas, complete with elegant seating and state of the art entertainment systems, create more than just a comforta ble stay.
              </p>
              <p className="text-gray-600">
                Immerse yourself in luxury by indulging in premium linens that cocoon you in softness, creating an oasis of relaxation. Embrace the exquisite beauty of our meticulously designed suite, where every element converges to create an atmosphere of sophistication and comfort. Whether you're seeking a romantic getaway or a peaceful retreat, the Deluxe Ocean View Suite offers an unparalleled experience that goes beyond expectations to ensure you enjoy a memorable stay.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Premium Experience</h4>
              <p className="text-gray-600 mb-4">
                Experience the epitome of luxury with our Premium Deluxe Ocean View Suite, where every detail is meticulously crafted to ensure a memorable stay.
              </p>
              <button className="text-blue-700 font-medium hover:text-blue-800">
                Learn More →
              </button>
            </div>
          </div>
        </section>

        {/* Room Amenities */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Room Amenities</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sleeping */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Sleeping</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>King-sized bed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>Premium linen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>Memory foam Pillows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>Blackout curtain</span>
                </li>
              </ul>
            </div>

            {/* Technology */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Technology</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>High-speed WiFi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>55" Smart TV</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>Bluetooth speaker</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>USB charging ports</span>
                </li>
              </ul>
            </div>

            {/* Comfort */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Comfort</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>Climate control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>Room safe/safe box</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>Coffee/Tea maker</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>Mini-fridge/bar</span>
                </li>
              </ul>
            </div>

            {/* Bathroom */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Bathroom</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>Marble bathroom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>Rain shower</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>Luxury toiletries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">✓</span>
                  <span>Hairdryer</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Policies and Info */}
        <section className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-gray-800 mb-3">Check-in / Checkout</h4>
            <p className="text-sm text-gray-600 mb-2">Check-in: 2:00 PM</p>
            <p className="text-sm text-gray-600">Check-out: 11:00 AM</p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-gray-800 mb-3">Cancellation</h4>
            <p className="text-sm text-gray-600">
              Free cancellation up to 24 hrs before arrival
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h4 className="font-bold text-gray-800 mb-3">Pets</h4>
            <p className="text-sm text-gray-600">
              Pets policy information not available
            </p>
          </div>
        </section>

        {/* Enhance Your Stay */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Enhance Your Stay</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-6 h-6 text-blue-700" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Breakfast Package</h4>
              <p className="text-sm text-gray-600 mb-4">
                Start your day with a delicious breakfast buffet featuring local and international 
              </p>
              <p className="text-blue-700 font-bold">+₹30 per person</p>
            </div>

            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bath className="w-6 h-6 text-blue-700" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Spa Access</h4>
              <p className="text-sm text-gray-600 mb-4">
                Enjoy unlimited access to our state-of-the-art spa facilities during your stay
              </p>
              <p className="text-blue-700 font-bold">+₹75 per day</p>
            </div>

            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-700" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Airport Transfer</h4>
              <p className="text-sm text-gray-600 mb-4">
                Private luxury vehicle airport transfers for a smooth and comfortable journey
              </p>
              <p className="text-blue-700 font-bold">+₹90 round trip</p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-blue-900 text-white p-8 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to book your stay?</h3>
            <p className="text-blue-100">
              Experience luxury and comfort at our Deluxe Ocean View Suite. Book now and make unforgettable memories!
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold mb-2">₹395</div>
            <div className="text-blue-200 text-sm mb-4">PER NIGHT</div>
            <button className="bg-white text-blue-900 px-6 py-3 rounded font-medium hover:bg-gray-100">
              Check Availability
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}