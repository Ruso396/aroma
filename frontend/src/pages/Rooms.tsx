import React, { useState } from 'react';
import { Users, Wifi, Tv, Phone, Bed, Utensils, Car, Coffee, Waves } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Room {
  id: number;
  title: string;
  tags: string[];
  image: string;
  rating: number;
  description: string;
  capacity: string;
  amenities: { icon: React.ReactNode; text: string }[];
  price: number;
  priceLabel: string;
}

const RoomListing: React.FC = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [clickedCard, setClickedCard] = useState<number | null>(null);
  const [visibleRooms, setVisibleRooms] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const rooms: Room[] = [
    {
      id: 1,
      title: 'Deluxe Ocean Suite',
      tags: ['Ocean View', 'Popular'],
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
      rating: 5,
      description: 'Experience breathtaking ocean views from the comfort of your spacious suite. The Deluxe Ocean Suite offers modern interiors, elegant furnishings, and a private balcony - perfect for couples or families seeking luxury and relaxation.',
      capacity: 'Up to 4 guests',
      amenities: [
        { icon: <Wifi className="w-3 h-3" />, text: 'Free WiFi' },
        { icon: <Tv className="w-3 h-3" />, text: 'Smart TV' }
      ],
      price: 289,
      priceLabel: '/ night'
    },
    {
      id: 2,
      title: 'Executive Business Suite',
      tags: ['Business'],
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
      rating: 4.5,
      description: 'Designed for professionals, the Executive Business Suite combines comfort and functionality. It features a private workspace, high-speed internet, and elegant decor - ideal for business travelers who value productivity and style.',
      capacity: 'Up to 2 guests',
      amenities: [
        { icon: <Utensils className="w-3 h-3" />, text: 'Work Desk' },
        { icon: <Phone className="w-3 h-3" />, text: 'Business Phone' }
      ],
      price: 199,
      priceLabel: '/ night'
    },
    {
      id: 3,
      title: 'Family Garden Room',
      tags: ['Family Friendly', 'Garden View'],
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop',
      rating: 4,
      description: 'Enjoy a relaxing family stay surrounded by lush greenery. The Family Garden Room offers ample space, warm lighting, and a cozy ambiance - a perfect retreat for parents and children to unwind together.',
      capacity: 'Up to 5 guests',
      amenities: [
        { icon: <Utensils className="w-3 h-3" />, text: 'Mini Kitchen' },
        { icon: <Waves className="w-3 h-3" />, text: 'Game Console' }
      ],
      price: 159,
      priceLabel: '/ night'
    },
    {
      id: 4,
      title: 'Romantic Honeymoon Suite',
      tags: ['Romantic', 'Premium'],
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
      rating: 5,
      description: 'Indulge in a luxurious romantic getaway in our Honeymoon Suite. Featuring a king-sized bed, private Jacuzzi, and soft ambient lighting - the perfect setting for newlyweds or couples celebrating love.',
      capacity: 'Up to 2 guests',
      amenities: [
        { icon: <Bed className="w-3 h-3" />, text: 'King Bed' },
        { icon: <Waves className="w-3 h-3" />, text: 'Jacuzzi' }
      ],
      price: 349,
      priceLabel: '/ night'
    },
    {
      id: 5,
      title: 'Standard City Room',
      tags: ['City View'],
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
      rating: 4,
      description: 'A perfect blend of comfort and simplicity, the Standard City Room provides everything you need for a pleasant stay. Enjoy scenic city views, cozy interiors, and modern amenities at an affordable price.',
      capacity: 'Up to 2 guests',
      amenities: [
        { icon: <Wifi className="w-3 h-3" />, text: 'Free WiFi' },
        { icon: <Car className="w-3 h-3" />, text: 'Parking' }
      ],
      price: 129,
      priceLabel: '/ night'
    },
    {
      id: 6,
      title: 'Premium Ocean View',
      tags: ['Ocean View', 'Luxury'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
      rating: 5,
      description: 'Wake up to the soothing sound of waves and panoramic ocean views. The Premium Ocean View Room combines modern luxury with natural beauty, featuring elegant decor, a private balcony, and first-class amenities.',
      capacity: 'Up to 3 guests',
      amenities: [
        { icon: <Coffee className="w-3 h-3" />, text: 'Coffee Machine' },
        { icon: <Waves className="w-3 h-3" />, text: 'Safe' }
      ],
      price: 259,
      priceLabel: '/ night'
    },
    {
      id: 7,
      title: 'Garden Villa Suite',
      tags: ['Garden View', 'Luxury'],
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
      rating: 5,
      description: 'A luxurious villa surrounded by beautiful gardens. Perfect for families or groups looking for spacious accommodation with premium amenities and stunning natural views.',
      capacity: 'Up to 6 guests',
      amenities: [
        { icon: <Wifi className="w-3 h-3" />, text: 'Free WiFi' },
        { icon: <Coffee className="w-3 h-3" />, text: 'Coffee Machine' }
      ],
      price: 399,
      priceLabel: '/ night'
    },
    {
      id: 8,
      title: 'Penthouse Sky Suite',
      tags: ['Premium', 'City View'],
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop',
      rating: 5,
      description: 'Experience luxury at its finest with panoramic city skyline views. This penthouse suite features high-end furnishings, a private terrace, and exclusive amenities for discerning guests.',
      capacity: 'Up to 4 guests',
      amenities: [
        { icon: <Tv className="w-3 h-3" />, text: 'Smart TV' },
        { icon: <Bed className="w-3 h-3" />, text: 'King Bed' }
      ],
      price: 499,
      priceLabel: '/ night'
    },
    {
      id: 9,
      title: 'Cozy Mountain Cabin',
      tags: ['Garden View'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      rating: 4,
      description: 'Escape to tranquility in this charming mountain cabin. Featuring rustic decor, warm fireplaces, and breathtaking mountain views - ideal for nature lovers and adventure seekers.',
      capacity: 'Up to 3 guests',
      amenities: [
        { icon: <Wifi className="w-3 h-3" />, text: 'Free WiFi' },
        { icon: <Coffee className="w-3 h-3" />, text: 'Coffee Maker' }
      ],
      price: 179,
      priceLabel: '/ night'
    },
    {
      id: 10,
      title: 'Luxury Pool Villa',
      tags: ['Luxury', 'Premium'],
      image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&h=600&fit=crop',
      rating: 5,
      description: 'Indulge in ultimate relaxation with your own private pool villa. This exclusive accommodation features modern luxury, elegant interiors, and direct pool access for the perfect getaway.',
      capacity: 'Up to 4 guests',
      amenities: [
        { icon: <Waves className="w-3 h-3" />, text: 'Private Pool' },
        { icon: <Tv className="w-3 h-3" />, text: 'Smart TV' }
      ],
      price: 599,
      priceLabel: '/ night'
    },
    {
      id: 11,
      title: 'Beach Bungalow',
      tags: ['Ocean View', 'Popular'],
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
      rating: 4.5,
      description: 'Step directly onto the sand from your private beach bungalow. Enjoy ocean breezes, stunning sunsets, and the soothing sound of waves just steps from your door.',
      capacity: 'Up to 3 guests',
      amenities: [
        { icon: <Wifi className="w-3 h-3" />, text: 'Free WiFi' },
        { icon: <Coffee className="w-3 h-3" />, text: 'Beach Access' }
      ],
      price: 329,
      priceLabel: '/ night'
    },
    {
      id: 12,
      title: 'Urban Loft Studio',
      tags: ['City View', 'Business'],
      image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=600&fit=crop',
      rating: 4,
      description: 'A stylish urban loft in the heart of the city. Perfect for solo travelers or couples who want modern design, convenience, and easy access to city attractions.',
      capacity: 'Up to 2 guests',
      amenities: [
        { icon: <Wifi className="w-3 h-3" />, text: 'High-Speed WiFi' },
        { icon: <Car className="w-3 h-3" />, text: 'Parking' }
      ],
      price: 149,
      priceLabel: '/ night'
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  const getTagColors = (tag: string) => {
    const colors: { [key: string]: string } = {
      'Ocean View': 'bg-blue-500',
      'Popular': 'bg-orange-500',
      'Business': 'bg-gray-600',
      'Family Friendly': 'bg-green-500',
      'Garden View': 'bg-green-600',
      'Romantic': 'bg-pink-500',
      'Premium': 'bg-yellow-500',
      'City View': 'bg-teal-500',
      'Luxury': 'bg-purple-600'
    };
    return colors[tag] || 'bg-gray-500';
  };

  const handleCardClick = (roomId: number) => {
    setClickedCard(roomId);
    setTimeout(() => {
      setClickedCard(null);
      console.log(`Navigating to room ${roomId} details`);
    }, 600);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleRooms(prev => Math.min(prev + 6, rooms.length));
      setIsLoading(false);
    }, 800);
  };

  const displayedRooms = rooms.slice(0, visibleRooms);
  const hasMore = visibleRooms < rooms.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 pt-40">
      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all cursor-pointer">
              <option value="">All Prices</option>
              <option value="100-200">$100 - $200</option>
              <option value="200-300">$200 - $300</option>
              <option value="300+">$300+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Guest Capacity</label>
            <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all cursor-pointer">
              <option value="">Any Capacity</option>
              <option value="2">2 Guests</option>
              <option value="3-4">3-4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">View Type</label>
            <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all cursor-pointer">
              <option value="">All Views</option>
              <option value="ocean">Ocean View</option>
              <option value="city">City View</option>
              <option value="garden">Garden View</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all cursor-pointer">
              <option value="popularity">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Room Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedRooms.map((room) => (
            <div
              key={room.id}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 ${activeCard === room.id && clickedCard !== room.id
                  ? 'transform scale-105 shadow-2xl z-10'
                  : ''
                } ${clickedCard === room.id
                  ? 'transform scale-95 opacity-70'
                  : ''
                }`}
              onMouseEnter={() => setActiveCard(room.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => handleCardClick(room.id)}
              style={{
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {/* Glow effect on hover */}
              {activeCard === room.id && clickedCard !== room.id && (
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-xl blur-lg opacity-75 animate-pulse"></div>
              )}

              <div className="relative bg-white rounded-xl overflow-hidden">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${activeCard === room.id ? 'scale-110' : 'scale-100'
                      }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {room.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`${getTagColors(tag)} text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg backdrop-blur-sm transform transition-transform duration-300 ${activeCard === room.id ? 'translate-x-1' : ''
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">
                      {room.title}
                    </h3>
                    <div className="flex">{renderStars(room.rating)}</div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {room.description}
                  </p>

                  <div className="flex items-center gap-4 mb-5 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-teal-600" />
                      <span>{room.capacity}</span>
                    </div>
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <span className="text-teal-600">{amenity.icon}</span>
                        <span>{amenity.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-500">From </span>
                      <span className="text-3xl font-bold text-teal-800">
                        ₹{room.price}
                      </span>
                      <span className="text-sm text-gray-500">
                        {room.priceLabel}
                      </span>
                    </div>
                    <button
                      onClick={() => navigate(`/room-details`)}
                      className={`bg-gradient-to-r from-teal-700 to-teal-900 hover:from-teal-800 hover:to-teal-950 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-xl ${activeCard === room.id ? 'scale-105' : ''
                        }`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="group flex items-center gap-3 px-8 py-4 bg-white border-2 border-teal-600 rounded-full text-teal-700 font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Load More Rooms
                </>
              )}
            </button>
          ) : (
            <div className="text-gray-500 text-center py-4">

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomListing;