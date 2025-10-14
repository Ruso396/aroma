import React, { useState, useEffect } from 'react';
import { Wifi, Car, Plane, Headphones, Bell, Shield, MessageSquare, Heart } from 'lucide-react';

// Custom SVG Icons
const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WaterDropIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const CocktailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

// ... (Add other custom icons here, same as your previous code)

// Main Amenities component
const Amenities: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

const amenities = [
 
  
  {
    title: '24-Hour Fitness Center',
    image: 'https://assets-news.housing.com/news/wp-content/uploads/2022/11/25125733/GYM-INTERIORS-FEATURE-compressed.jpg',
    description:
      'Stay fit any time of the day in our fully equipped gym featuring the latest cardio and strength training equipment. Enjoy personal training sessions or relax in the stretching zone after your workout.',
    features: [
      { icon: ClockIcon, text: 'Open 24 Hours' },
      { icon: WaterDropIcon, text: 'Modern fitness machines' },
      { icon: CocktailIcon, text: 'Personal training available' },
    ],
  },
  {
    title: 'Fine Dining Restaurant',
    image: 'https://images.surferseo.art/7d5164fa-7a4d-49bd-a811-307c98f79698.png',
    description:
      'Savor exquisite international cuisine crafted by our master chefs. Dine in a refined atmosphere with panoramic views, or enjoy private dining for a more intimate experience.',
    features: [
      { icon: ClockIcon, text: 'Breakfast, Lunch & Dinner' },
      { icon: WaterDropIcon, text: 'Panoramic city views' },
      { icon: CocktailIcon, text: 'Signature cocktails & wines' },
    ],
  },
];
  const services = [
    { icon: Wifi, title: 'Free Wi-Fi', description: 'High-speed internet throughout the property' },
    { icon: Car, title: 'Valet Parking', description: 'Complimentary valet service for all guests' },
    { icon: Plane, title: 'Airport Shuttle', description: 'Scheduled transfers to major airports' },
    { icon: Headphones, title: 'Concierge', description: '24/7 assistance for reservations and tours' },
    { icon: Bell, title: 'Room Service', description: 'Gourmet dining delivered to your room' },
    { icon: Shield, title: 'Safe Deposit', description: 'Secure storage for your valuables' },
    { icon: MessageSquare, title: 'Multilingual Staff', description: 'Service in English, Spanish, French, and more' },
    { icon: Heart, title: 'Pet Friendly', description: 'Welcome amenities for your furry friends' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

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
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
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
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
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

      {/* Hero Section with Background Image */}
      <section 
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: 'url(https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/202510031336347435-1116607044-1114ce27-2ee3-49d2-b5f2-36ea4ac0ca2f.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Experience Unparalleled Luxury
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
            Discover our world-class amenities designed to provide ultimate comfort and indulgence during your stay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Book Your Stay
            </button>
            <button className="bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white/20 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              View All Rooms
            </button>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <main className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
        {/* Amenities Section */}
        <div className="mb-20">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Premium Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Indulge in our carefully curated facilities designed for your ultimate comfort and enjoyment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={amenity.image} 
                    alt={amenity.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{amenity.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                    {amenity.description}
                  </p>
                  <div className="space-y-3">
                    {amenity.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-gray-700 group/item">
                        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-2.5 shadow-md group-hover/item:shadow-lg transition-all duration-300 text-white">
                          <feature.icon />
                        </div>
                        <span className="text-sm font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services Section */}
        <div className={`mb-20 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Additional Hotel Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive amenities designed to make your stay comfortable and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-center group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.7 + idx * 0.05}s` }}
                >
                  <div className="relative inline-block mb-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${isVisible ? 'animate-fade-in-up delay-800' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-10 sm:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-animate opacity-20" style={{ 
              backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
              backgroundSize: '40px 40px'
            }}></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Experience Luxury?
              </h2>
              <p className="text-amber-50 text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Book your stay today and discover why our guests return time and time again to experience our world-class amenities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-amber-600 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  Reserve Your Stay
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  Contact Concierge
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Amenities;
