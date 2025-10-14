import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Train, Plane, Users } from 'lucide-react';

export default function GrandoriaLocation() {
  const attractions = [
    {
      name: "Millennium Park",
      distance: "2 blocks",
      time: "5 minute walk",
      image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=400&h=300&fit=crop",
      description: "Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Praesent sapien massa iaculis nec."
    },
    {
      name: "Art Institute",
      distance: "6 blocks",
      time: "12 minute walk",
      image: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?w=400&h=300&fit=crop",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas accumsan adipiscing."
    },
    {
      name: "Navy Pier",
      distance: "1.2 miles",
      time: "18 minute walk",
      image: "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=400&h=300&fit=crop",
      description: "Vivamus magna justo lacinia eget accumsan sed convallis at tellus. Pellentesque viverra eros eget lorem laoreet."
    },
    {
      name: "Theater District",
      distance: "3 blocks",
      time: "10 minute walk",
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop",
      description: "Mauris blandit aliquet elit eget tincidunt nibh pulvinar. Broadway shows and world-class performances nightly."
    },
    {
      name: "Magnificent Mile",
      distance: "1 block",
      time: "2 minute walk",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop",
      description: "Premium shopping luxury brands and upscale dining experiences. Shop famous designer stores and restaurants."
    },
    {
      name: "Lake Michigan Shore",
      distance: "0.8 miles",
      time: "15 minute walk",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop",
      description: "Sed porttitor lectus nibh magna bibendum aliquam elit. Beach access, recreational trails, and scenic waterfront dining."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
  
      {/* Location Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Prime Location</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Luxury Downtown Experience</h1>
          <p className="text-gray-600 max-w-2xl">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque leo eget malesuada. Proin eget tortor risus. Mauris blandit aliquet elit eget tincidunt nibh pulvinar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start mb-4">
                <MapPin className="w-5 h-5 text-emerald-700 mr-3 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Address</div>
                  <div className="text-gray-600">456 Madison Street</div>
                  <div className="text-gray-600">Chicago, IL 60601</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-4">
                <Phone className="w-5 h-5 text-emerald-700 mr-3 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Contact</div>
                  <div className="text-gray-600">+1 (202) 555-0432</div>
                  <div className="text-gray-600">info@grandoria.com</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-4">
                <Plane className="w-5 h-5 text-emerald-700 mr-3 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Airport Access</div>
                  <div className="text-gray-600">O'Hare - 30 min</div>
                  <div className="text-gray-600">Midway - 25 min</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start mb-4">
                <Clock className="w-5 h-5 text-emerald-700 mr-3 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Check-in</div>
                  <div className="text-gray-600">After 3:00 PM</div>
                  <div className="text-gray-600">Before 11:00 AM</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="bg-emerald-800 text-white px-6 py-3 rounded-lg hover:bg-emerald-900 transition">
                View on Map
              </button>
              <button className="border-2 border-emerald-800 text-emerald-800 px-6 py-3 rounded-lg hover:bg-emerald-50 transition">
                Book Now
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2 text-red-500" />
                <div className="font-semibold">Downtown Conference Center</div>
                <div className="text-sm">157 William St, New York, NY 10038</div>
                <div className="text-xs text-yellow-600 mt-1">★★★★★ 45 reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Here Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Getting Here is Easy</h2>
          <p className="text-center text-gray-600 mb-8">Multiple convenient transportation options to reach our hotel</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* By Car */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <Car className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">By CarBy Car</div>
                  <div className="text-sm text-gray-600">Most Convenient</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Complimentary valet service available. Premium parking garage with direct hotel access and EV charging stations.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-white px-3 py-1 rounded border border-gray-300">Valet Service</span>
                <span className="text-xs bg-white px-3 py-1 rounded border border-gray-300">EV Charging</span>
              </div>
            </div>

            {/* By Metro */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <Train className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">By Metro</div>
                  <div className="text-sm text-gray-600">3 min walk</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                State Street Station directly connects to all major lines. Blue line to airports. Red line to suburbs and entertainment districts.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-white px-3 py-1 rounded border border-gray-300">Blue Line</span>
                <span className="text-xs bg-white px-3 py-1 rounded border border-gray-300">Red Line</span>
              </div>
            </div>

            {/* Airport Shuttle */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <Plane className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Airport Shuttle</div>
                  <div className="text-sm text-gray-600">Every 30 min</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Luxury shuttle service to both major airports. Premium comfort with WiFi, refreshments, and luggage assistance included.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-white px-3 py-1 rounded border border-gray-300">WiFi</span>
                <span className="text-xs bg-white px-3 py-1 rounded border border-gray-300">Refreshments</span>
              </div>
            </div>

            {/* Ride Share */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <Users className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ride Share</div>
                  <div className="text-sm text-gray-600">24/7 Available</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Dedicated pickup zone for all ride-sharing services. Professional concierge staff for booking and special requests.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-white px-3 py-1 rounded border border-gray-300">Concierge Help</span>
                <span className="text-xs bg-white px-3 py-1 rounded border border-gray-300">Express Pickup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Neighborhood */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Explore the Neighborhood</h2>
          <p className="text-center text-gray-600 mb-8">World class attractions and entertainment right at your doorstep</p>

          <div className="grid md:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative">
                  <img src={attraction.image} alt={attraction.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {attraction.distance}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{attraction.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    {attraction.time}
                  </div>
                  <p className="text-gray-600 text-sm">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}