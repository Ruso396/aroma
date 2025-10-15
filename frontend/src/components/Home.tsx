import React, { useState, useEffect, useRef } from 'react';
import homeVideo from "../assets/home.mp4"; // relative path from this file
import { useNavigate } from "react-router-dom";

const Homepage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Countdown Timer
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });


  useEffect(() => {
    const targetDate = new Date('2025-12-15').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);
  const navigate = useNavigate();

  const handleViewRooms = () => {
    navigate("/rooms"); // /rooms page-ku navigate aagum
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={homeVideo}
        />

        {/* Overlay for darkening video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-6 lg:px-20 text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fadeIn">
            Luxury Redefined in Every Stay
          </h1>
          <p className="text-lg lg:text-xl mb-8 animate-fadeIn delay-200">
            Experience unparalleled comfort and sophistication at our premium hotel.
          </p>
          <div className="flex gap-4 animate-fadeIn delay-400">
            <button className="px-8 py-4 bg-blue-600 font-semibold rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
            <button
              onClick={handleViewRooms}
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              View Rooms
            </button>
          </div>
        </div>

        {/* Inline Keyframes */}
        <style>
          {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          .animate-fadeIn.delay-200 {
            animation-delay: 0.2s;
          }
          .animate-fadeIn.delay-400 {
            animation-delay: 0.4s;
          }
        `}
        </style>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Welcome to Aroma Resort</h2>
              <p className="text-xl text-gray-600 font-medium">
                Where luxury meets tranquility in the heart of nature's paradise.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nestled among rolling hills and pristine landscapes, Grandview Resort has been offering exceptional hospitality for over three decades. Our commitment to excellence and attention to detail creates an unforgettable experience for discerning travelers seeking both comfort and adventure.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From our elegantly appointed suites to our world-class amenities, every aspect of your stay is designed to exceed expectations. Discover breathtaking views, exquisite dining, and personalized service that makes every moment special.
              </p>

              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">185</div>
                  <div className="text-sm text-gray-600">Luxury Rooms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Guest Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">30</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Our Story
                </button>
                <button
                  onClick={handleViewRooms}
                  className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
                >
                  View Rooms
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=700&fit=crop"
                  alt="Resort"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=300&fit=crop"
                  alt="Suite"
                  className="absolute bottom-8 -left-8 rounded-xl shadow-2xl w-48 h-48 object-cover border-4 border-white"
                />
                <div className="absolute top-8 right-8 bg-blue-600 text-white px-6 py-8 rounded-xl shadow-2xl text-center">
                  <div className="text-4xl font-bold mb-1">30+</div>
                  <div className="text-sm">Years<br />Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Rooms</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Our Accommodations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our collection of elegantly designed rooms and suites, each offering unparalleled comfort and luxury
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Room */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=500&fit=crop"
                  alt="Presidential Suite"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Presidential
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 flex justify-around">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-users text-gray-600"></i>
                    <span className="text-sm font-medium">6 Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-home text-gray-600"></i>
                    <span className="text-sm font-medium">180m²</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-gray-600"></i>
                    <span className="text-sm font-medium">Top Floor</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Grand Presidential Suite</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Experience the pinnacle of luxury in our spacious presidential suite featuring panoramic city views, elegant furnishings, and premium amenities designed for the most discerning guests.
                </p>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <i className="fas fa-wifi text-2xl text-gray-400 mb-2"></i>
                    <p className="text-xs text-gray-600">Premium WiFi</p>
                  </div>
                  <div className="text-center">
                    <i className="fas fa-tv text-2xl text-gray-400 mb-2"></i>
                    <p className="text-xs text-gray-600">Smart TV</p>
                  </div>
                  <div className="text-center">
                    <i className="fas fa-mug-hot text-2xl text-gray-400 mb-2"></i>
                    <p className="text-xs text-gray-600">Coffee Bar</p>
                  </div>
                  <div className="text-center">
                    <i className="fas fa-snowflake text-2xl text-gray-400 mb-2"></i>
                    <p className="text-xs text-gray-600">Climate Control</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">$649</span>
                    <span className="text-gray-600 text-sm ml-2">per night</span>
                  </div>
                  <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Reserve Suite
                  </button>
                </div>
              </div>
            </div>

            {/* Side Rooms */}
            <div className="space-y-8">
              {[
                {
                  name: 'Executive Business Room',
                  price: 329,
                  image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop',
                  features: ['Work Space', 'City Views']
                },
                {
                  name: 'Garden View Deluxe',
                  price: 269,
                  image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
                  features: ['Garden View', 'Private Terrace']
                }
              ].map((room, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="relative group">
                    <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <i className="fas fa-arrow-up-right text-white text-2xl"></i>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{room.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Elegant accommodations with modern amenities and stunning views.
                    </p>
                    <div className="flex gap-3 mb-4 text-xs">
                      {room.features.map((feature, i) => (
                        <span key={i} className="flex items-center gap-1 text-gray-600">
                          <i className="fas fa-check-circle text-blue-600"></i>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-2xl font-bold text-gray-900">
                        ${room.price}
                        <span className="text-sm text-gray-600 font-normal">/night</span>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* More Rooms Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Classic Double', price: 189, image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop' },
              { name: 'Superior King', price: 249, image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=400&h=300&fit=crop' },
              { name: 'Premium Ocean View', price: 359, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop' },
              { name: 'Luxury Penthouse', price: 1199, image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&h=300&fit=crop' }
            ].map((room, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="relative group">
                  <img src={room.image} alt={room.name} className="w-full h-56 object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <i className="fas fa-eye text-gray-900"></i>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="font-bold text-gray-900 mb-3">{room.name}</h5>
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-xl font-bold text-blue-600">
                      ${room.price.toLocaleString()}
                      <span className="text-sm text-gray-600 font-normal">/night</span>
                    </div>
                  </div>
                  <div className="flex gap-2 text-gray-400">
                    <i className="fas fa-wifi"></i>
                    <i className="fas fa-tv"></i>
                    <i className="fas fa-phone"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
              <span>Explore All Accommodations</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>


      {/* Offers Section */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        {/* Inline Keyframes for Animation */}
        <style>
          {`
      @keyframes fadeUp {
        0% {
          opacity: 0;
          transform: translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes hoverGlow {
        0% {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          transform: translateY(0) scale(1);
        }
        100% {
          box-shadow: 0 20px 40px rgba(0, 80, 255, 0.25);
          transform: translateY(-8px) scale(1.02);
        }
      }

      .fade-up {
        animation: fadeUp 0.9s ease-out forwards;
      }

      .offer-card:hover {
        animation: hoverGlow 0.4s ease forwards;
      }

      /* Remove blue outline when focused or clicked */
      button:focus,
      a:focus {
        outline: none !important;
        box-shadow: none !important;
      }
    `}
        </style>

        <div className="max-w-7xl mx-auto fade-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Offers
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              Special Deals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take advantage of our exclusive offers and packages
            </p>
          </div>

          {/* Offer Cards */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              {
                badge: "25% OFF",
                title: "Weekend Getaway",
                desc: "Escape the ordinary with our exclusive weekend package. Includes complimentary breakfast and late checkout.",
                originalPrice: 299,
                offerPrice: 224,
                validity: "Valid until Dec 31, 2024",
                image:
                  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
              },
              {
                badge: "BEST VALUE",
                title: "Extended Stay Deal",
                desc: "Stay 5 nights or more and enjoy significant savings. Perfect for business travelers and extended vacations.",
                originalPrice: 189,
                offerPrice: 149,
                validity: "Book by Jan 15, 2025",
                image:
                  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
              },
              {
                badge: "EARLY BIRD",
                title: "Advance Booking",
                desc: "Plan ahead and save more! Book your stay 30 days in advance with free cancellation up to 7 days.",
                originalPrice: 249,
                offerPrice: 199,
                validity: "Available year-round",
                image:
                  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
              },
            ].map((offer, idx) => (
              <div
                key={idx}
                className="offer-card bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                    {offer.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{offer.desc}</p>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl text-gray-400 line-through">
                        ${offer.originalPrice}
                      </span>
                      <span className="text-3xl font-bold text-blue-600">
                        ${offer.offerPrice}
                      </span>
                      <span className="text-sm text-gray-600">per night</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="fas fa-calendar-check"></i>
                      <span>{offer.validity}</span>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Limited Time Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl fade-up">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
                <p className="text-blue-100 text-lg">
                  Don't miss out on our exclusive seasonal promotion. Book now and
                  save up to 40% on your dream vacation with complimentary upgrades
                  and special perks.
                </p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <div className="flex gap-4">
                  <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                    <div className="text-4xl font-bold">{countdown.days}</div>
                    <div className="text-sm text-blue-100">Days</div>
                  </div>
                  <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                    <div className="text-4xl font-bold">{countdown.hours}</div>
                    <div className="text-sm text-blue-100">Hours</div>
                  </div>
                  <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                    <div className="text-4xl font-bold">{countdown.minutes}</div>
                    <div className="text-sm text-blue-100">Minutes</div>
                  </div>
                </div>
                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Claim Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Experience Luxury Like Never Before</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Immerse yourself in unparalleled comfort and sophistication at our premium hotel. From elegantly appointed rooms to world-class amenities, every detail is crafted to exceed your expectations.
              </p>
              <ul className="space-y-4">
                {[
                  'Complimentary breakfast and Wi-Fi',
                  '24/7 concierge and room service',
                  'State-of-the-art spa and fitness center',
                  'Prime location with stunning city views'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                  Book Your Stay
                </button>
                <button
                  onClick={handleViewRooms}
                  className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
                >
                  View Rooms
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=700&fit=crop"
                alt="Luxury Experience"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute top-8 right-8 bg-red-500 text-white px-6 py-4 rounded-xl shadow-2xl">
                <div className="text-sm font-semibold mb-1">Special Offer</div>
                <div className="text-3xl font-bold">Save 30%</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Location */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Location & Activities</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Discover the Area</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore attractions and activities near our prime location
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Entertainment Quarter',
                  distance: '2 min walk',
                  icon: 'fa-music',
                  desc: 'Vibrant district with theaters, clubs, and live entertainment venues.',
                  stats: ['Open 24/7', '4.8 Rating'],
                  image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop'
                },
                {
                  name: 'Waterfront Marina',
                  distance: '5 min drive',
                  icon: 'fa-water',
                  desc: 'Beautiful waterfront with scenic views perfect for evening strolls.',
                  stats: ['Scenic Views', 'Photo Spot'],
                  image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
                },
                {
                  name: 'Historic Quarter',
                  distance: '10 min walk',
                  icon: 'fa-landmark',
                  desc: 'Rich cultural heritage with museums and historical landmarks.',
                  stats: ['Guided Tours', 'Bike Friendly'],
                  image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'
                },
                {
                  name: 'Premium Shopping Plaza',
                  distance: '3 min walk',
                  icon: 'fa-shopping-bag',
                  desc: 'Luxury shopping destination with international brands and dining.',
                  stats: ['Tax Free', 'Cafés Inside'],
                  image: 'https://images.unsplash.com/photo-1555529902-5261145633bf?w=400&h=300&fit=crop'
                }
              ].map((location, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="relative h-48">
                    <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                      <i className={`fas ${location.icon}`}></i>
                      {location.distance}
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="text-lg font-bold text-gray-900 mb-2">{location.name}</h5>
                    <p className="text-gray-600 text-sm mb-4">{location.desc}</p>
                    <div className="flex gap-3">
                      {location.stats.map((stat, i) => (
                        <span key={i} className="text-xs text-gray-600 flex items-center gap-1">
                          <i className="fas fa-check-circle text-blue-600"></i>
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Prime Location Benefits</h3>
                <p className="text-sm text-gray-600">Easy access to city attractions and transport</p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: 'fa-train', title: 'Public Transport Hub', desc: 'Metro station 200m away' },
                  { icon: 'fa-plane', title: 'Airport Connection', desc: 'Direct shuttle every 30 min' },
                  { icon: 'fa-car', title: 'Valet Parking', desc: 'Complimentary for guests' },
                  { icon: 'fa-compass', title: 'City Center Access', desc: 'Walking distance to attractions' }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${benefit.icon} text-blue-600`}></i>
                    </div>
                    <div>
                      <h6 className="font-semibold text-gray-900 text-sm mb-1">{benefit.title}</h6>
                      <p className="text-xs text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                View Full Location Guide
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>



{/* Scroll to Top Button */}
{scrolled && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed bottom-8 right-8 w-16 h-16 z-50 flex items-center justify-center hover:scale-110 transition-transform"
  >
    <svg
      height="64px"
      width="64px"
      viewBox="0 0 58 58"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <g>
        <path
          style={{ fill: '#2CB742' }}
          d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"
        ></path>
        <path
          style={{ fill: '#FFFFFF' }}
          d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"
        ></path>
      </g>
    </svg>
  </button>
)}


      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
    
  );
};

export default Homepage;