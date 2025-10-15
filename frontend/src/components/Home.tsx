import React, { useState, useEffect, useRef } from 'react';
import homeVideo from "../assets/home.mp4";
import kolli from "../assets/kolli hills.jpg"
import Vasalurpatty from "../assets/Vasalurpatty.jpg"
import Puliancholai from "../assets/Puliancholai-Forest.jpg";
import entrance from "../assets/entrance.png"
import welcome from "../assets/welcome.jpg"
import SeekuParai from "../assets/sunset.jpg";
import explore from "../assets/explore.jpg"
import locationImage from "../assets/kolliLogo.png";
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


    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setIsVisible(true);
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
    navigate("/rooms");
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={homeVideo}
        />

        {/* Overlay for darkening video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fadeIn leading-tight">
            Luxury Redefined in Every Stay
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 animate-fadeIn delay-200 max-w-lg">
            Experience unparalleled comfort and sophistication at our premium hotel.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeIn delay-400 w-full sm:w-auto">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 font-semibold rounded-lg hover:bg-blue-700 transition text-sm sm:text-base w-full sm:w-auto">
              Book Now
            </button>
            <button
              onClick={handleViewRooms}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition text-sm sm:text-base w-full sm:w-auto"
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
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Welcome to Aroma Resort</h2>
              <p className="text-lg sm:text-xl text-gray-600 font-medium">
                Where luxury meets tranquility in the heart of nature's paradise.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Nestled among rolling hills and pristine landscapes, Grandview Resort has been offering exceptional hospitality for over three decades. Our commitment to excellence and attention to detail creates an unforgettable experience for discerning travelers seeking both comfort and adventure.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                From our elegantly appointed suites to our world-class amenities, every aspect of your stay is designed to exceed expectations. Discover breathtaking views, exquisite dining, and personalized service that makes every moment special.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 py-6 sm:py-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">185</div>
                  <div className="text-xs sm:text-sm text-gray-600">Luxury Rooms</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">98%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Guest Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">30</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto">
                  Our Story
                </button>
                <button
                  onClick={handleViewRooms}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition border border-gray-300 text-sm sm:text-base w-full sm:w-auto"
                >
                  View Rooms
                </button>
              </div>
            </div>

<div className="relative mt-8 lg:mt-0">
  <div
    className="relative"
    style={{
      animation: 'slideFromRight 1s ease-out forwards'
    }}
  >
    <img
      src={entrance}
      alt="Resort"
      className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
    />
    <img
      src={welcome}
      alt="Suite"
      className="absolute bottom-4 sm:bottom-8 -left-4 sm:-left-8 rounded-xl shadow-2xl w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover border-2 sm:border-4 border-white"
      style={{
        animation: 'slideFromRight 1s ease-out forwards',
        animationDelay: '0.2s'
      }}
    />
    <div
      className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 rounded-xl shadow-2xl text-center"
      style={{
        animation: 'slideFromRight 1s ease-out forwards',
        animationDelay: '0.4s'
      }}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">30+</div>
      <div className="text-xs sm:text-sm">Years<br />Experience</div>
    </div>
  </div>

  {/* Inline keyframes */}
  <style>
    {`
      @keyframes slideFromRight {
        0% {
          opacity: 0;
          transform: translateX(100%);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `}
  </style>
</div>
          </div>
        </div>
      </section>

      {/* Rooms Showcase */}
<section className="py-6 sm:py-10 md:py-16 px-2 sm:px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-6 sm:mb-10 md:mb-12">
      <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">Rooms</span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-2">Grand Presidential Suite</h2>
      <p className="text-xs sm:text-base text-gray-600 max-w-xl mx-auto mt-1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium, totam rem aperiam.</p>
    </div>

    {/* Featured card + Side cards */}
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6 mb-6 md:mb-10">
      {/* Featured Room */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex-1">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=960&h=480&fit=crop"
            alt="Grand Presidential Suite"
            className="w-full h-44 sm:h-64 md:h-80 object-cover"
          />
          <span className="absolute top-3 left-3 bg-white text-gray-800 font-semibold text-xs sm:text-sm py-1 px-3 rounded-full shadow border">PRESIDENTIAL</span>
          <div className="absolute bottom-3 left-3 flex gap-1 flex-wrap">
            <span className="flex items-center bg-white/90 text-gray-800 text-[11px] sm:text-xs font-medium rounded px-2 py-1 gap-1">
              {/* Users SVG */}
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4.978 4.978 0 00-4-4.899M9 20H4v-2a4 4 0 014-4h.607M15 7a4 4 0 11-8 0 4 4 0 018 0zM23 7a4 4 0 10-8 0 4 4 0 008 0z" />
              </svg>
              6 Guests
            </span>
            <span className="flex items-center bg-white/90 text-gray-800 text-[11px] sm:text-xs font-medium rounded px-2 py-1 gap-1">
              {/* Home SVG (Area) */}
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9-7 9 7-9 7-9-7z" />
              </svg>
              180m²
            </span>
            <span className="flex items-center bg-white/90 text-gray-800 text-[11px] sm:text-xs font-medium rounded px-2 py-1 gap-1">
              {/* Marker SVG */}
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
              </svg>
              Top Floor
            </span>
          </div>
        </div>
        {/* Card Details */}
        <div className="p-3 sm:p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 mb-2">
            <span className="text-base sm:text-lg font-bold text-gray-900">Grand Presidential Suite</span>
            <span className="flex items-center gap-1 text-yellow-500 text-xs sm:text-base font-medium">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              5.0 Excellence
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          {/* Amenities */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
            <span className="flex items-center gap-1">
              {/* WiFi SVG */}
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.11 16.4a5.5 5.5 0 017.78 0M12 20h.01m-7.08-7.07c3.904-3.904 10.236-3.904 14.14 0M1.39 9.39c5.86-5.857 15.36-5.857 21.22 0" />
              </svg>
              Premium WiFi
            </span>
            <span className="flex items-center gap-1">
              {/* TV SVG */}
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect width="16" height="10" x="4" y="7" rx="2" />
                <path d="M8 21h8" />
              </svg>
              Smart TV
            </span>
            <span className="flex items-center gap-1">
              {/* Mug SVG */}
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4 4 4 0 014 4v2M16 17v2m0 0a3 3 0 01-6 0v-2a6 6 0 016 0v2z" />
              </svg>
              Coffee Bar
            </span>
            <span className="flex items-center gap-1">
              {/* Snowflake SVG */}
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 4v3m7.07-10.07l-2.12 2.13M6.05 6.05l2.12 2.12m6.36 6.36l2.12 2.13m-10.6-2.12l2.13 2.12M3 12h3m13.5 0H21" />
              </svg>
              Climate Control
            </span>
          </div>
          <div className="flex items-end justify-between flex-col sm:flex-row mt-4 gap-2 sm:gap-0">
            <span>
              <span className="text-2xl sm:text-3xl font-bold text-blue-600">$649</span>
              <span className="ml-2 text-xs sm:text-sm text-gray-500">per night</span>
            </span>
            <button className="mt-2 sm:mt-0 px-4 py-2 bg-blue-600 text-white text-xs sm:text-base font-semibold rounded-lg hover:bg-blue-800 transition w-full sm:w-auto">
              Reserve Suite
            </button>
          </div>
        </div>
      </div>
      {/* Side Rooms */}
      <div className="flex flex-col gap-4 w-full lg:w-[315px]">
        {[
          {
            name: 'Garden View Deluxe',
            price: 269,
            img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=280&fit=crop',
            features: [
              { label: 'Garden View', icon: (
                <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v7M12 14h.01"/>
                </svg>
              ) },
              { label: 'Private Terrace', icon: (
                <svg className="w-3.5 h-3.5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="4" y="10" width="16" height="8" rx="2"/>
                  <path d="M20 10V7a2 2 0 00-2-2H6a2 2 0 00-2 2v3"/>
                </svg>
              ) },
            ],
          },
          {
            name: 'Family Comfort Suite',
            price: 419,
            img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=280&fit=crop',
            features: [
              { label: 'Family Space', icon: (
                <svg className="w-3.5 h-3.5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4.978 4.978 0 00-4-4.899M9 20H4v-2a4 4 0 014-4h.607M15 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              ) },
              { label: 'Kids Area', icon: (
                <svg className="w-3.5 h-3.5 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="9"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              ) },
            ],
          }
        ].map((room, i) => (
          <div key={room.name} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <img src={room.img} alt={room.name} className="w-full h-28 sm:h-40 object-cover" />
            <div className="p-3 sm:p-4 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-bold text-xs sm:text-sm text-gray-900">{room.name}</span>
                <span className="text-blue-600 font-bold text-sm sm:text-base">${room.price}</span>
              </div>
              <div className="flex flex-wrap gap-2 my-2">
                {room.features.map((f, idx) => (
                  <span key={f.label} className="inline-flex items-center gap-1 text-gray-600 bg-gray-100 rounded-full px-2 py-0.5 text-[11px] sm:text-xs">
                    {f.icon}
                    {f.label}
                  </span>
                ))}
              </div>
              <button className="mt-auto py-1.5 px-3 rounded-lg bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-800 transition">Book</button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Responsive lower grid (if needed) - add as per main site spec! */}
    {/* Place additional room cards here as in the screenshot, reusing the same responsive structure */}
  </div>
</section>

      {/* Offers Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white overflow-hidden">
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

      button:focus,
      a:focus {
        outline: none !important;
        box-shadow: none !important;
      }
    `}
        </style>

        <div className="max-w-7xl mx-auto fade-up">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Offers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">
              Special Deals
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Take advantage of our exclusive offers and packages
            </p>
          </div>

          {/* Offer Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-12 md:mb-16">
            {[
              {
                badge: "25% OFF",
                title: "Weekend Getaway",
                desc: "Escape the ordinary with our exclusive weekend package. Includes complimentary breakfast and late checkout.",
                originalPrice: 299,
                offerPrice: 224,
                validity: "Valid until Dec 31, 2024",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
              },
              {
                badge: "BEST VALUE",
                title: "Extended Stay Deal",
                desc: "Stay 5 nights or more and enjoy significant savings. Perfect for business travelers and extended vacations.",
                originalPrice: 189,
                offerPrice: 149,
                validity: "Book by Jan 15, 2025",
                image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
              },
              {
                badge: "EARLY BIRD",
                title: "Advance Booking",
                desc: "Plan ahead and save more! Book your stay 30 days in advance with free cancellation up to 7 days.",
                originalPrice: 249,
                offerPrice: 199,
                validity: "Available year-round",
                image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
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
                    className="w-full h-44 sm:h-52 md:h-56 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-md">
                    {offer.badge}
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{offer.desc}</p>
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-baseline gap-2 sm:gap-3 mb-2">
                      <span className="text-lg sm:text-xl md:text-2xl text-gray-400 line-through">
                        ${offer.originalPrice}
                      </span>
                      <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                        ${offer.offerPrice}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-600">per night</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                      <i className="fas fa-calendar-check"></i>
                      <span>{offer.validity}</span>
                    </div>
                  </div>
                  <button className="w-full py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Limited Time Banner */}
<div className={`${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
  <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
    
    {/* Animated diagonal shade overlay */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)',
        backgroundSize: '40px 40px',
      }}
    ></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          Limited Time Offer
        </h2>
        <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed">
          Don't miss out on our exclusive seasonal promotion. Book now and
          save up to 40% on your dream vacation with complimentary upgrades
          and special perks.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 sm:gap-6 w-full lg:w-auto">
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-3 sm:px-4 md:px-6 py-3 sm:py-4">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {countdown.minutes}
            </div>
            <div className="text-xs sm:text-sm text-blue-100">Minutes</div>
          </div>
          {/* You can add Hours/Seconds boxes in same style if needed */}
        </div>

        <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl text-sm sm:text-base w-full sm:w-auto">
          Claim Offer
        </button>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Experience Luxury Like Never Before</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Immerse yourself in unparalleled comfort and sophistication at our premium hotel. From elegantly appointed rooms to world-class amenities, every detail is crafted to exceed your expectations.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  'Complimentary breakfast and Wi-Fi',
                  '24/7 concierge and room service',
                  'State-of-the-art spa and fitness center',
                  'Prime location with stunning city views'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 sm:gap-3">
                    <i className="fas fa-check-circle text-blue-500 text-lg sm:text-xl flex-shrink-0"></i>
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg text-sm sm:text-base w-full sm:w-auto">
                  Book Your Stay
                </button>
                <button
                  onClick={handleViewRooms}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition border border-gray-300 text-sm sm:text-base w-full sm:w-auto"
                >
                  View Rooms
                </button>
              </div>
            </div>

            <div className="relative mt-6 lg:mt-0">
              <img
                src={explore}
                alt="Luxury Experience"
                className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute top-4 sm:top-8 right-4 sm:right-8 bg-red-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-2xl">
                <div className="text-xs sm:text-sm font-semibold mb-1">Special Offer</div>
                <div className="text-2xl sm:text-3xl font-bold">Save 30%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">Location & Activities</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3 sm:mb-4">Discover the Area</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Explore attractions and activities near our prime location
            </p>
          </div>


<div className="grid lg:grid-cols-4 gap-6 sm:gap-8">
  {/* Left side: attractions */}
  <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
    {[ {
  name: 'Seeku Parai View Point',
  distance: '2 hr drive', // approximate from main city/resort
  icon: 'fa-mountain',
  desc: 'A breathtaking viewpoint in Kolli Hills offering panoramic views of the valleys and surrounding hills. Ideal for photography and nature lovers.',
  stats: ['Panoramic Views', 'Photography Spot', 'Sunrise & Sunset Point'],
  image: SeekuParai // ✅ replace with your imported image
},
      {
        name: 'Kolli Hills',
        distance: '2 hr drive',
        icon: 'fa-mountain',
        desc: 'A serene mountain range in Tamil Nadu known for lush greenery, waterfalls, and scenic trekking trails.',
        stats: ['Altitude: 1,300m', 'Popular Viewpoints: Arappaleeswarar Temple, Agaya Gangai Waterfalls'],
        image: kolli // ✅ imported image used directly
      },
      {
  name: 'Vasalurpatty Boat House',
  distance: '2 hr drive', // approximate from main city or resort
  icon: 'fa-water',
  desc: 'A serene spot in Kolli Hills where visitors can enjoy a quiet boat ride on a lake surrounded by trees, ideal for families and couples.',
  stats: ['Paddle & Row Boats Available', 'Peaceful Atmosphere', 'Family Friendly'],
  image: Vasalurpatty
}
,
      {
  name: 'Puliancholai Forest',
  distance: '2 hr drive', // approximate from main city/resort
  icon: 'fa-tree',
  desc: 'A dense jungle at the base of Kolli Hills, perfect for trekking, bird watching, and exploring streams, hidden waterfalls, and viewpoints.',
  stats: ['Trekking Trails', 'Bird Watching', 'Hidden Waterfalls'],
  image: Puliancholai // ✅ use imported image directly
}


    ].map((location, idx) => (
      <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
        <div className="relative h-40 sm:h-44 md:h-48">
          <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-blue-600 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2">
            <i className={`fas ${location.icon} text-xs sm:text-sm`}></i>
            {location.distance}
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <h5 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{location.name}</h5>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{location.desc}</p>
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            {location.stats.map((stat, i) => (
              <span key={i} className="text-xs text-gray-600 flex items-center gap-1">
                <i className="fas fa-check-circle text-blue-600 text-xs"></i>
                {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Right side: Prime Location Benefits */}
<div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 md:p-8 h-fit">
  <div className="text-center mb-5 sm:mb-6">
    {/* Circular image */}
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden mx-auto mb-3 sm:mb-4">
      <img
        src={locationImage} // ✅ your imported image variable or URL
        alt="Location"
        className="w-full h-full object-cover"
      />
    </div>

    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Prime Location Benefits</h3>
    <p className="text-xs sm:text-sm text-gray-600">
      Convenient access to nature, trekking spots, and hilltop attractions
    </p>
  </div>

 


  <div className="space-y-3 sm:space-y-4">
    {[
      { icon: 'fa-shuttle-van', title: 'Resort Shuttle Service', desc: 'Pick-up & drop from nearby bus stations' },
      { icon: 'fa-hiking', title: 'Trekking Trails Access', desc: 'Direct trails to Kolli Hills viewpoints' },
      { icon: 'fa-bus', title: 'Local Bus Connection', desc: 'Frequent buses from Namakkal & nearby towns' },
      { icon: 'fa-map', title: 'Nearby Attractions', desc: 'Puliancholai, Vasalurpatty, Seeku Parai within 15–20 min' }
    ].map((benefit, idx) => (
      <div key={idx} className="flex gap-3 sm:gap-4">
        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <i className={`fas ${benefit.icon} text-blue-600 text-sm sm:text-base`}></i>
        </div>
        <div>
          <h6 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">{benefit.title}</h6>
          <p className="text-[10px] sm:text-xs text-gray-600">{benefit.desc}</p>
        </div>
      </div>
    ))}
  </div>

  <button className="w-full mt-5 sm:mt-6 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm">
    View Full Location Guide
    <i className="fas fa-arrow-right text-xs"></i>
  </button>
</div>
</div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 z-50 flex items-center justify-center hover:scale-110 transition-transform"
        >
          <svg
            height="100%"
            width="100%"
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

        /* Prevent horizontal scroll */
        body {
          overflow-x: hidden;
        }
        
        /* Ensure all images are responsive */
        img {
          max-width: 100%;
          height: auto;
        }

        /* Touch-friendly buttons on mobile */
        @media (max-width: 640px) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </div>
  );
};

export default Homepage;