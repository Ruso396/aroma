import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Car, Train, Plane, Users, Star, Navigation } from 'lucide-react';

// Custom SVG Icons
const CheckCircleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WalkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export default function Location() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const attractions = [
    {
      name: "Millennium Park",
      distance: "2 blocks",
      time: "5 minute walk",
      image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&h=300&fit=crop",
      description: "Iconic urban park featuring contemporary art installations, stunning architecture, and beautiful gardens perfect for a leisurely afternoon."
    },
    {
      name: "Art Institute",
      distance: "6 blocks",
      time: "12 minute walk",
      image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=400&h=300&fit=crop",
      description: "World-renowned art museum showcasing masterpieces from around the globe, featuring impressive collections of impressionist and modern art."
    },
    {
      name: "Navy Pier",
      distance: "1.2 miles",
      time: "18 minute walk",
      image: "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=400&h=300&fit=crop",
      description: "Vibrant waterfront destination with entertainment, dining, and breathtaking lake views. Perfect for families and couples alike."
    },
    {
      name: "Theater District",
      distance: "3 blocks",
      time: "10 minute walk",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop",
      description: "Experience world-class Broadway shows and theatrical performances in historic venues. Entertainment excellence awaits nightly."
    },
    {
      name: "Magnificent Mile",
      distance: "1 block",
      time: "2 minute walk",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
      description: "Premier shopping destination featuring luxury brands, upscale boutiques, and world-class dining experiences along Michigan Avenue."
    },
    {
      name: "Lake Michigan Shore",
      distance: "0.8 miles",
      time: "15 minute walk",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop",
      description: "Stunning lakefront with beach access, scenic trails, and waterfront dining. Perfect for morning jogs or sunset strolls."
    }
  ];

  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      subtitle: "Most Convenient",
      description: "Complimentary valet service available. Premium parking garage with direct hotel access and EV charging stations.",
      tags: ["Valet Service", "EV Charging"]
    },
    {
      icon: Train,
      title: "By Metro",
      subtitle: "3 min walk",
      description: "State Street Station directly connects to all major lines. Blue line to airports, Red line to suburbs and entertainment districts.",
      tags: ["Blue Line", "Red Line"]
    },
    {
      icon: Plane,
      title: "Airport Shuttle",
      subtitle: "Every 30 min",
      description: "Luxury shuttle service to both major airports. Premium comfort with WiFi, refreshments, and luggage assistance included.",
      tags: ["WiFi", "Refreshments"]
    },
    {
      icon: Users,
      title: "Ride Share",
      subtitle: "24/7 Available",
      description: "Dedicated pickup zone for all ride-sharing services. Professional concierge staff for booking and special requests.",
      tags: ["Concierge Help", "Express Pickup"]
    }
  ];

 return (
    <div className="min-h-screen bg-white mt-10">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(5, 150, 105, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(5, 150, 105, 0.4);
          }
        }
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .bg-animate {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 via-teal-600/5 to-cyan-600/5 bg-animate"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className={`max-w-4xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 text-emerald-700 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold text-sm tracking-wide uppercase">Prime Location</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              Luxury Downtown Experience
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl">
              Perfectly positioned in the heart of the city, our hotel offers unparalleled access to premier attractions, world-class dining, and vibrant entertainment. Experience the best of urban luxury with everything you need just steps away.
            </p>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <div className="container mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Contact Info */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact & Details</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2 text-lg">Address</div>
                    <div className="text-gray-600 leading-relaxed">456 Madison Street<br />Chicago, IL 60601</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2 text-lg">Contact</div>
                    <div className="text-gray-600 leading-relaxed">+1 (202) 555-0432<br />info@grandoria.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2 text-lg">Airport Access</div>
                    <div className="text-gray-600 leading-relaxed">O'Hare International - 30 min<br />Midway Airport - 25 min</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2 text-lg">Check-in Times</div>
                    <div className="text-gray-600 leading-relaxed">Check-in: After 3:00 PM<br />Check-out: Before 11:00 AM</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-100">
                <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  View on Map
                </button>
                <button className="border-2 border-emerald-600 hover:bg-emerald-50 text-emerald-700 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-full min-h-[400px] lg:min-h-[500px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3547706707647!2d-87.62979768455385!3d41.88415497922108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34aaaab%3A0x4c01c8b9b1bd213a!2s456%20N%20Madison%20St%2C%20Chicago%2C%20IL%2060601!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Getting Here Section */}
        <div className="mb-20">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Getting Here is Easy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple convenient transportation options to reach our hotel with comfort and ease
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {transportOptions.map((option, idx) => {
              const IconComponent = option.icon;
              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{option.title}</h3>
                      <p className="text-sm text-emerald-600 font-semibold">{option.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {option.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {option.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-medium border border-emerald-100"
                      >
                        <CheckCircleIcon />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Explore Neighborhood */}
        <div className={`${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Explore the Neighborhood
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              World-class attractions and entertainment right at your doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {attractions.map((attraction, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span className="text-gray-900">{attraction.distance}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{attraction.name}</h3>
                  <div className="flex items-center gap-2 text-emerald-600 mb-4 font-medium">
                    <WalkIcon />
                    <span className="text-sm">{attraction.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-20 ${isVisible ? 'animate-fade-in-up delay-800' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 rounded-3xl p-10 sm:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-animate opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)' }}></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Experience Our Prime Location?
              </h2>
              <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto">
                Book your stay today and discover why location matters when it comes to luxury
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-emerald-700 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Reserve Your Stay
                </button>
                <button className="border-2 border-white hover:bg-white/10 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  Contact Concierge
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}