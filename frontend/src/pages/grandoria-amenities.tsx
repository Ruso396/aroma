import React from 'react';
import { Wifi, Car, Plane, Headphones, Bell, Shield, MessageSquare, Heart } from 'lucide-react';

const GrandoriaAmenities: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Pool Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=400&fit=crop" alt="Pool" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Infinity Pool & Sun Deck</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">🕐</span>
                  <span>Open 6 AM - 10 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">💧</span>
                  <span>Heated pool year-round</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">🍹</span>
                  <span>Poolside bar service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Spa Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=400&fit=crop" alt="Spa" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Spa & Wellness</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute dolor in reprehenderit in voluptate velit esse cillum.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">📅</span>
                  <span>Book treatments online</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">💆</span>
                  <span>Couples massage rooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">🌿</span>
                  <span>Organic spa products</span>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop" alt="Restaurant" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Signature Restaurant</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">👨‍🍳</span>
                  <span>Michelin-starred chef</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">🍷</span>
                  <span>Award-winning wine cellar</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">📅</span>
                  <span>Open Tuesday - Sunday</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fitness Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop" alt="Fitness" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Fitness Center</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">💪</span>
                  <span>State-of-the-art equipment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">🏃</span>
                  <span>Personal trainers available</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600">🧴</span>
                  <span>Complimentary towels</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Hotel Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Free Wi-Fi */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Free Wi-Fi</h3>
              <p className="text-sm text-gray-600">High-speed internet throughout the property</p>
            </div>

            {/* Valet Parking */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Valet Parking</h3>
              <p className="text-sm text-gray-600">Complimentary valet service for all guests</p>
            </div>

            {/* Airport Shuttle */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Airport Shuttle</h3>
              <p className="text-sm text-gray-600">Scheduled transfers to major airports</p>
            </div>

            {/* Concierge */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Concierge</h3>
              <p className="text-sm text-gray-600">24/7 assistance for reservations and tours</p>
            </div>

            {/* Room Service */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Room Service</h3>
              <p className="text-sm text-gray-600">Gourmet dining delivered to your room</p>
            </div>

            {/* Safe Deposit */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Safe Deposit</h3>
              <p className="text-sm text-gray-600">Secure storage for your valuables</p>
            </div>

            {/* Multilingual Staff */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Multilingual Staff</h3>
              <p className="text-sm text-gray-600">Service in English, Spanish, French, and more</p>
            </div>

            {/* Pet Friendly */}
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Pet Friendly</h3>
              <p className="text-sm text-gray-600">Welcome amenities for your furry friends</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GrandoriaAmenities;