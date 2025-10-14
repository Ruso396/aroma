import React, { useState, useEffect } from 'react';

// SVG Icons
const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const BedIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 12v6h18v-6M3 12V9a2 2 0 012-2h14a2 2 0 012 2v3" />
  </svg>
);

const ExpandIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);

const WifiIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-5 h-5 ${filled ? 'text-red-500 fill-current' : 'text-white'}`} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const HotelLandingPage: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roomImages = [
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop'
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mt-10">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse-soft {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-soft {
          animation: pulse-soft 4s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Collage */}
          <div className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=500&fit=crop" 
                  alt="Hotel exterior"
                  className="w-full h-64 sm:h-80 object-cover rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-3 animate-pulse-soft">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <div className="group">
                <img 
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop" 
                  alt="Hotel lobby"
                  className="w-full h-32 sm:h-40 object-cover rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                />
              </div>
              <div className="group">
                <img 
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop" 
                  alt="Hotel room"
                  className="w-full h-32 sm:h-40 object-cover rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            <div className="inline-block bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-md">
               5 Star Hotel
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
              Where Timeless Elegance<br />Meets Modern Luxury
            </h1>
            <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
              Experience unparalleled comfort in our meticulously designed rooms and suites. Each space combines contemporary elegance with thoughtful amenities to ensure an unforgettable stay in the heart of the city.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {[
                { title: 'Prime Location', desc: 'Steps away from major attractions, dining, and entertainment' },
                { title: 'World-Class Amenities', desc: 'State-of-the-art fitness center, spa, and rooftop pool' },
                { title: '24/7 Concierge', desc: 'Dedicated team ready to assist with any request' }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-full p-2 mt-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                Explore Rooms
              </button>
              <button className="border-2 border-gray-300 hover:border-teal-600 hover:bg-teal-50 text-gray-700 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Exceptional Hospitality Redefined
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Discover a world of luxury and comfort with our premium services and amenities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Elegant Interiors', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', desc: 'Thoughtfully designed spaces that blend sophistication with warmth and comfort', guests: '2-4 Guests', price: '$299/night', stars: 5 },
              { title: 'Gourmet Dining', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop', desc: 'Award-winning restaurants serving exquisite cuisine from around the world', guests: 'Open Daily', price: '7 AM - 11 PM', stars: 4 },
              { title: 'Scenic Location', img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&h=400&fit=crop', desc: 'Breathtaking views of the city skyline and surrounding natural beauty', guests: 'All Rooms', price: '360° Views', stars: 5 }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < item.stars} />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-2">
                      <UsersIcon />
                      {item.guests}
                    </span>
                    <span className="font-semibold text-teal-700">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { num: '236', label: 'Luxury Rooms' },
              { num: '96%', label: 'Satisfaction Rate' },
              { num: '15', label: 'Years of Service' },
              { num: '100', label: 'Team Members' }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className={`text-center bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.num}
                </div>
                <div className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Rooms</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Browse our collection of elegantly appointed rooms and suites
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Room Display */}
            <div className={`lg:col-span-2 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative group">
                  <img 
                    src={roomImages[selectedRoom]}
                    alt="Room"
                    className="w-full h-80 sm:h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <button 
                    onClick={() => toggleFavorite(selectedRoom)}
                    className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                  >
                    <HeartIcon filled={favorites.includes(selectedRoom)} />
                  </button>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {[UsersIcon, BedIcon, ExpandIcon, WifiIcon].map((Icon, idx) => (
                      <button key={idx} className="bg-white/90 backdrop-blur-sm p-3 rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <Icon />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Deluxe Suite</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={true} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    Indulge in the ultimate comfort of our Deluxe Suite. Featuring a spacious bedroom, elegant living area, and premium amenities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { Icon: UsersIcon, text: 'Up to 4 guests' },
                      { Icon: BedIcon, text: 'King Size Bed' },
                      { Icon: ExpandIcon, text: '450 sq ft' },
                      { Icon: WifiIcon, text: 'Free WiFi' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <item.Icon />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div>
                        <span className="text-gray-500 text-sm">Starting from</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">$289</span>
                          <span className="text-gray-500">/ night</span>
                        </div>
                      </div>
                      <button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room Thumbnails */}
            <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
              <h3 className="text-xl font-bold text-gray-900 mb-4">More Views</h3>
              <div className="space-y-4">
                {roomImages.map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setSelectedRoom(idx)}
                    className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                      selectedRoom === idx ? 'ring-4 ring-teal-600 shadow-2xl' : 'shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <img 
                      src={img}
                      alt={`Room ${idx + 1}`}
                      className="w-full h-24 sm:h-32 object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4">Quick Features</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  {['24/7 Room Service', 'Smart TV & Entertainment', 'Mini Bar & Coffee Maker', 'Premium Toiletries', 'Work Desk & Ergonomic Chair'].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="bg-teal-600 rounded-full p-1">
                        <CheckIcon />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Room Grid */}
      <section className="pb-16 md:pb-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Standard Room', price: 159, img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop' },
              { name: 'Superior Room', price: 199, img: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400&h=300&fit=crop' },
              { name: 'Family Suite', price: 349, img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop' },
              { name: 'Presidential Suite', price: 599, img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop' }
            ].map((room, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.7 + idx * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={room.img} 
                    alt={room.name} 
                    className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 mb-3">{room.name}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < 4} />
                      ))}
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">${room.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button className="border-2 border-gray-300 hover:border-teal-600 hover:bg-white text-gray-700 hover:text-teal-700 px-10 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore More Rooms →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HotelLandingPage;