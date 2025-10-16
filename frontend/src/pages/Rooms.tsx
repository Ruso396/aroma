import React, { useState } from 'react';
import {
  Users,
  Wifi,
  Tv,
  Phone,
  Bed,
  Utensils,
  Car,
  Coffee,
  Waves,
} from 'lucide-react';
import { useNavigate } from "react-router-dom";


// ✅ Import all room images (titles must exactly match file names)
import DeluxeOceanSuite from '../assets/Deluxe Ocean Suite.webp';
import ExecutiveBusinessSuite from '../assets/Executive Business Suite.webp';
import FamilyGardenRoom from '../assets/Family Garden Room.webp';
import RomanticHoneymoonSuite from '../assets/Romantic Honeymoon Suite.webp';
import StandardCityRoom from '../assets/Standard City Room.webp';
import PremiumOceanView from '../assets/Premium Ocean View.webp';
import GardenVillaSuite from '../assets/Garden Villa Suite.webp';
import PenthouseSkySuite from '../assets/Penthouse Sky Suite.webp';
import CozyMountainCabin from '../assets/Cozy Mountain Cabin.webp';
import LuxuryPoolVilla from '../assets/Luxury Pool Villa.webp';


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
  // ✅ Local images used instead of URLs
  const rooms: Room[] = [
    { id: 1, title: 'Deluxe Ocean Suite', tags: ['Ocean View', 'Popular'], image: DeluxeOceanSuite, rating: 5, description: 'Experience breathtaking ocean views from your suite.', capacity: 'Up to 4 guests', amenities: [{ icon: <Wifi className="w-3 h-3" />, text: 'Free WiFi' }, { icon: <Tv className="w-3 h-3" />, text: 'Smart TV' }], price: 289, priceLabel: '/ night' },
    { id: 2, title: 'Executive Business Suite', tags: ['Business'], image: ExecutiveBusinessSuite, rating: 4.5, description: 'Perfect for professionals, combining comfort and style.', capacity: 'Up to 2 guests', amenities: [{ icon: <Utensils className="w-3 h-3" />, text: 'Work Desk' }, { icon: <Phone className="w-3 h-3" />, text: 'Business Phone' }], price: 199, priceLabel: '/ night' },
    { id: 3, title: 'Family Garden Room', tags: ['Family Friendly', 'Garden View'], image: FamilyGardenRoom, rating: 4, description: 'Enjoy a family stay surrounded by lush greenery.', capacity: 'Up to 5 guests', amenities: [{ icon: <Utensils className="w-3 h-3" />, text: 'Mini Kitchen' }, { icon: <Waves className="w-3 h-3" />, text: 'Game Console' }], price: 159, priceLabel: '/ night' },
    { id: 4, title: 'Romantic Honeymoon Suite', tags: ['Romantic', 'Premium'], image: RomanticHoneymoonSuite, rating: 5, description: 'Luxury suite with jacuzzi and romantic ambiance.', capacity: 'Up to 2 guests', amenities: [{ icon: <Bed className="w-3 h-3" />, text: 'King Bed' }, { icon: <Waves className="w-3 h-3" />, text: 'Jacuzzi' }], price: 349, priceLabel: '/ night' },
    { id: 5, title: 'Standard City Room', tags: ['City View'], image: StandardCityRoom, rating: 4, description: 'Comfortable room with modern interiors and city views.', capacity: 'Up to 2 guests', amenities: [{ icon: <Wifi className="w-3 h-3" />, text: 'Free WiFi' }, { icon: <Car className="w-3 h-3" />, text: 'Parking' }], price: 129, priceLabel: '/ night' },
    { id: 6, title: 'Premium Ocean View', tags: ['Ocean View', 'Luxury'], image: PremiumOceanView, rating: 5, description: 'Wake up to beautiful ocean views and luxury decor.', capacity: 'Up to 3 guests', amenities: [{ icon: <Coffee className="w-3 h-3" />, text: 'Coffee Machine' }, { icon: <Waves className="w-3 h-3" />, text: 'Safe' }], price: 259, priceLabel: '/ night' },
    { id: 7, title: 'Garden Villa Suite', tags: ['Garden View', 'Luxury'], image: GardenVillaSuite, rating: 5, description: 'Spacious villa surrounded by beautiful gardens.', capacity: 'Up to 6 guests', amenities: [{ icon: <Wifi className="w-3 h-3" />, text: 'Free WiFi' }, { icon: <Coffee className="w-3 h-3" />, text: 'Coffee Machine' }], price: 399, priceLabel: '/ night' },
    { id: 8, title: 'Penthouse Sky Suite', tags: ['Premium', 'City View'], image: PenthouseSkySuite, rating: 5, description: 'Penthouse suite with panoramic city skyline views.', capacity: 'Up to 4 guests', amenities: [{ icon: <Tv className="w-3 h-3" />, text: 'Smart TV' }, { icon: <Bed className="w-3 h-3" />, text: 'King Bed' }], price: 499, priceLabel: '/ night' },
    { id: 9, title: 'Cozy Mountain Cabin', tags: ['Garden View'], image: CozyMountainCabin, rating: 4, description: 'Peaceful cabin retreat surrounded by mountain views.', capacity: 'Up to 3 guests', amenities: [{ icon: <Wifi className="w-3 h-3" />, text: 'Free WiFi' }, { icon: <Coffee className="w-3 h-3" />, text: 'Coffee Maker' }], price: 179, priceLabel: '/ night' },
    { id: 10, title: 'Luxury Pool Villa', tags: ['Luxury', 'Premium'], image: LuxuryPoolVilla, rating: 5, description: 'Private pool villa with elegant interiors.', capacity: 'Up to 4 guests', amenities: [{ icon: <Waves className="w-3 h-3" />, text: 'Private Pool' }, { icon: <Tv className="w-3 h-3" />, text: 'Smart TV' }], price: 599, priceLabel: '/ night' },
  ];

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, i) => (
      <span key={i} className={i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));

  const handleCardClick = (roomId: number) => {
    setClickedCard(roomId);
    setTimeout(() => setClickedCard(null), 600);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-blue-50 pt-24 sm:pt-36">
      {/* ✅ Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-8 bg-white rounded-xl shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Price Range', options: ['All Prices', '₹100 - ₹200', '₹200 - ₹300', '₹300+'] },
            { label: 'Guest Capacity', options: ['Any Capacity', '2 Guests', '3-4 Guests', '5+ Guests'] },
            { label: 'View Type', options: ['All Views', 'Ocean View', 'City View', 'Garden View'] },
            { label: 'Sort By', options: ['Popularity', 'Price: Low to High', 'Price: High to Low', 'Rating'] },
          ].map((filter, i) => (
            <div key={i}>
              <select className="w-full text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer">
                {filter.options.map((opt, j) => (
                  <option key={j}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Room Cards */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {displayedRooms.map((room) => (
            <div
              key={room.id}
              className={`bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-500 cursor-pointer ₹{
                activeCard === room.id ? 'scale-[1.03]' : ''
              }`}
              onMouseEnter={() => setActiveCard(room.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => handleCardClick(room.id)}
            >
              <div className="relative h-56 overflow-hidden group">
                <img
                  src={room.image}
                  alt={room.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${activeCard === room.id ? 'scale-110' : 'scale-100'
                    }`}
                />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                  {room.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-600 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-[2px] rounded-full font-medium shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900">{room.title}</h3>
                  <div className="flex text-xs">{renderStars(room.rating)}</div>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">{room.description}</p>
                <div className="flex items-center gap-3 mb-4 text-[11px] sm:text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>{room.capacity}</span>
                  </div>
                  {room.amenities.map((a, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <span className="text-blue-600">{a.icon}</span>
                      <span>{a.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500">From </span>
                    <span className="text-xl sm:text-2xl font-bold text-blue-600">₹{room.price}</span>
                    <span className="text-xs text-gray-500">{room.priceLabel}</span>
                  </div>
                  <button
                    onClick={() => navigate("/room-details")}
                    className="bg-blue-600 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-blue-700 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Load More */}
        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-full text-sm sm:text-base font-semibold shadow-md hover:scale-105 transition disabled:opacity-50"
            >
              {isLoading ? 'Loading...' : 'Load More Rooms'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomListing;
