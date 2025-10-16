import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Car, Train, Plane, Users, Star, Navigation } from 'lucide-react';

export default function Location() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const attractions = [
    {
      name: "Seekuparai Viewpoint",
      distance: "2 km",
      time: "10 minute drive",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Top attraction of Kolli Hills offering captivating panoramic views of dense forests and lush valleys. Also known as 'Suicide Point' due to its dramatic cliffs."
    },
    {
      name: "Agaya Gangai Waterfalls",
      distance: "8 km",
      time: "25 minute drive",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop",
      description: "Spectacular 300-feet cascading waterfall meaning 'Ganges from the Sky'. Requires a trek of 1000 steps down through scenic valley views. A sacred and breathtaking sight."
    },
    {
      name: "Arapaleeswarar Temple",
      distance: "7 km",
      time: "20 minute drive",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop",
      description: "Ancient hilltop temple dedicated to Lord Shiva. Rich in heritage and spiritual significance, attracting pilgrims and tourists seeking tranquility amidst scenic beauty."
    },
    {
      name: "Botanical Garden",
      distance: "3 km",
      time: "8 minute drive",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=300&fit=crop",
      description: "Beautiful garden featuring rose gardens, eco-friendly cottages, majestic viewpoints and children's park. Perfect spot for nature lovers and family outings."
    },
    {
      name: "Masila Waterfalls",
      distance: "12 km",
      time: "35 minute drive",
      image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&h=300&fit=crop",
      description: "Serene waterfall nestled in dense forest surroundings. A perfect trekking destination offering refreshing natural beauty and peaceful atmosphere."
    },
    {
      name: "Namma Falls",
      distance: "5 km",
      time: "15 minute drive",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      description: "Lesser-known gem of Kolli Hills with pristine waters surrounded by lush greenery. Ideal for those seeking offbeat natural attractions and photography."
    }
  ];

  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      subtitle: "70 Hairpin Bends Adventure",
      description: "Navigate through the famous 70 hairpin curves to reach Semmadu. Well-maintained scenic mountain roads with breathtaking valley views. Ample parking available at the resort.",
      tags: ["Scenic Route", "Free Parking"]
    },
    {
      icon: Train,
      title: "By Train",
      subtitle: "Salem Junction - 88 km",
      description: "Salem Junction is the nearest railway station, well-connected to all major cities including Chennai, Bangalore, and Coimbatore. Hire a taxi or take a bus from Salem to reach Kolli Hills.",
      tags: ["Major Connectivity", "Taxi Available"]
    },
    {
      icon: Plane,
      title: "By Flight",
      subtitle: "Trichy Airport - 90 km",
      description: "Tiruchirappalli International Airport is the nearest airport. Direct flights from Chennai, Bangalore, and Madurai. Hire a taxi for a scenic 2-3 hour journey to the hills.",
      tags: ["International Airport", "Taxi Service"]
    },
    {
      icon: Users,
      title: "By Bus",
      subtitle: "Direct from Namakkal",
      description: "Regular state-run buses operate from Namakkal and Salem to Semmadu. TNSTC buses provide comfortable and affordable transportation through the hill route.",
      tags: ["Daily Service", "Affordable"]
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
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-blue-600/5 to-cyan-600/5"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className={`max-w-4xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 text-blue-700 mb-4">
              <MapPin className="w-5 h-5 text-blue-700" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-2">
          {/* Contact Info */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contact & Details
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3">
                    <MapPin className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2 text-lg">
                      Address
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      <span className="font-medium text-blue-700">
                        Aroma Resort
                      </span>
                      <br />
                      Kolli Hills, Semmadu, View Point Road
                      <br />
                      Namakkal District, Tamil Nadu – 637411
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3">
                    <Phone className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2 text-lg">
                      Contact
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      +91 98765 43210 <br />
                      <a
                        href="mailto:info@aromaresort.com"
                        className="text-blue-600 hover:underline"
                      >
                        info@aromaresort.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Nearby Access */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3">
                    <Plane className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2 text-lg">
                      Nearby Access
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      Salem Airport – 90 min drive <br />
                      Namakkal Bus Stand – 60 min drive
                    </div>
                  </div>
                </div>

                {/* Check-in Times */}
                <div className="flex items-start gap-4 group">
                  <div className="p-3">
                    <Clock className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2 text-lg">
                      Check-in Times
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      Check-in: After 2:00 PM <br />
                      Check-out: Before 11:00 AM
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-100">
                <a
                  href="https://maps.google.com/?q=Aroma+Resort,+Kolli+Hills,+Semmadu,+View+Point+Road"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  View on Map
                </a>

                <button className="border-2 border-blue-600 hover:bg-blue-50 text-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[700px] py-3 lg:py-11">
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
        </div>

        {/* Getting Here Section */}
        <div className="mb-10">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent lg:py-3">
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
                  className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div>
                      <IconComponent className="w-8 h-8 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{option.title}</h3>
                      <p className="text-sm text-blue-600 font-semibold">{option.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {option.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {option.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-flex items-center gap-2 text-xs bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium border border-blue-100"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent lg:py-3">
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
                className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
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
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-900">{attraction.distance}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{attraction.name}</h3>
                  <div className="flex items-center gap-2 text-blue-600 mb-4 font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
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
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-700 rounded-3xl p-10 sm:p-16 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Experience Our Prime Location?
              </h2>
              <p className="text-blue-50 text-lg mb-8 max-w-2xl mx-auto">
                Book your stay today and discover why location matters when it comes to luxury
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white hover:bg-gray-50 text-blue-700 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
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