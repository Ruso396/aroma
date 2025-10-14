import React from 'react';
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
  const rooms: Room[] = [
    {
      id: 1,
      title: 'Deluxe Ocean Suite',
      tags: ['Ocean View', 'Popular'],
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
      rating: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
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
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
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
      description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
      capacity: 'Up to 3 guests',
      amenities: [
        { icon: <Coffee className="w-3 h-3" />, text: 'Coffee Machine' },
        { icon: <Waves className="w-3 h-3" />, text: 'Safe' }
      ],
      price: 259,
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

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700">
              <option>All Prices</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Guest Capacity</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700">
              <option>Any Capacity</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">View Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700">
              <option>All Views</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700">
              <option>Popularity</option>
            </select>
          </div>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Image */}
              <div className="relative h-48">
                <img src={room.image} alt={room.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {room.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`${getTagColors(tag)} text-white text-xs px-3 py-1 rounded-full font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{room.title}</h3>
                  <div className="flex">{renderStars(room.rating)}</div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{room.description}</p>

                <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{room.capacity}</span>
                  </div>
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      {amenity.icon}
                      <span>{amenity.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500">From </span>
                    <span className="text-2xl font-bold text-gray-900">${room.price}</span>
                    <span className="text-sm text-gray-500">{room.priceLabel}</span>
                  </div>
                  <button
                    onClick={() => navigate('/room-details')}
                    className="bg-teal-800 hover:bg-teal-900 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Load More Rooms
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomListing;