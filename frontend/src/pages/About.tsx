import React, { useState } from 'react';

// SVG Icons
const CheckIcon = () => (
    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${filled ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const UsersIcon = () => (
    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const BedIcon = () => (
    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 12v6h18v-6M3 12V9a2 2 0 012-2h14a2 2 0 012 2v3" />
    </svg>
);

const ExpandIcon = () => (
    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
);

const WifiIcon = () => (
    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
);

const HeartIcon = ({ filled }: { filled: boolean }) => (
    <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${filled ? 'text-red-500 fill-current' : 'text-white'}`} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

const HotelLandingPage: React.FC = () => {
    const [selectedRoom, setSelectedRoom] = useState(0);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [showAllRooms, setShowAllRooms] = useState(false);

    const roomImages = [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop'
    ];

    const allRooms = [
        { name: 'Standard Room', price: 159, img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop' },
        { name: 'Superior Room', price: 199, img: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400&h=300&fit=crop' },
        { name: 'Family Suite', price: 349, img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop' },
        { name: 'Presidential Suite', price: 599, img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop' },
        { name: 'Luxury Suite', price: 449, img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop' },
        { name: 'Business Suite', price: 299, img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop' },
        { name: 'Honeymoon Suite', price: 499, img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop' },
        { name: 'Garden View Room', price: 249, img: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=400&h=300&fit=crop' },
    ];

    const displayedRooms = showAllRooms ? allRooms : allRooms.slice(0, 4);

    const toggleFavorite = (id: number) => {
        setFavorites(prev =>
            prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
        );
        
    };
    
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 mt-20 sm:mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image Collage */}
                    <div className="relative w-full">
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="col-span-2 relative h-[200px] sm:h-64 md:h-80 overflow-hidden rounded-2xl shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=500&fit=crop"
                                    alt="Hotel exterior"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-3 right-3 bg-yellow-400 rounded-full p-2.5 sm:p-3">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="h-32 sm:h-40 overflow-hidden rounded-2xl shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop"
                                    alt="Hotel lobby"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="h-32 sm:h-40 overflow-hidden rounded-2xl shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop"
                                    alt="Hotel room"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <div className="inline-block bg-teal-50 text-teal-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3">
                            5 Star Hotel
                        </div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                            Where Timeless Elegance<br className="hidden sm:block" />Meets Modern Luxury
                        </h1>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed max-w-xl">
                            Experience unparalleled comfort in our meticulously designed rooms and suites. Each space combines contemporary elegance with thoughtful amenities to ensure an unforgettable stay in the heart of the city.
                        </p>

                        {/* Features */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-600 rounded-full p-2 mt-1 flex-shrink-0">
                                    <CheckIcon />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">Prime Location</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">Steps away from major attractions, dining, and entertainment</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-600 rounded-full p-2 mt-1 flex-shrink-0">
                                    <CheckIcon />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">World-Class Amenities</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">State-of-the-art fitness center, spa, and rooftop pool</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-blue-600 rounded-full p-2 mt-1 flex-shrink-0">
                                    <CheckIcon />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">24/7 Concierge</h3>
                                    <p className="text-gray-600 text-xs sm:text-sm">Dedicated team ready to assist with any request</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-colors">
                                Explore Rooms
                            </button>
                            <button className="w-full sm:w-auto border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hospitality Section */}
            <section className="bg-gray-50 py-10 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Exceptional Hospitality Redefined</h2>
                        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                            Discover a world of luxury and comfort with our premium services and amenities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="w-full h-44 sm:h-56 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                                    alt="Elegant Interior"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Elegant Interiors</h3>
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} filled={true} />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-xs sm:text-sm mb-4">
                                    Thoughtfully designed spaces that blend sophistication with warmth and comfort
                                </p>
                                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <UsersIcon />
                                        2-4 Guests
                                    </span>
                                    <span>From $299/night</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="w-full h-44 sm:h-56 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                                    alt="Gourmet Dining"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Gourmet Dining</h3>
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} filled={i < 4} />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-xs sm:text-sm mb-4">
                                    Award-winning restaurants serving exquisite cuisine from around the world
                                </p>
                                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <UsersIcon />
                                        Open Daily
                                    </span>
                                    <span>7 AM - 11 PM</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                            <div className="w-full h-44 sm:h-56 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&h=400&fit=crop"
                                    alt="Scenic Views"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Scenic Location</h3>
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} filled={true} />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-xs sm:text-sm mb-4">
                                    Breathtaking views of the city skyline and surrounding natural beauty
                                </p>
                                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <UsersIcon />
                                        All Rooms
                                    </span>
                                    <span>360° Views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-10 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
                        <div>
                            <p className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1">150+</p>
                            <p className="text-xs sm:text-sm text-gray-600">Luxury Rooms</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1">20+</p>
                            <p className="text-xs sm:text-sm text-gray-600">Facilities</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1">4.9</p>
                            <p className="text-xs sm:text-sm text-gray-600">Guest Rating</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1">24/7</p>
                            <p className="text-xs sm:text-sm text-gray-600">Service</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rooms Gallery Section */}
            <section className="py-10 sm:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Featured Rooms</h2>
                        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                            Hand-picked suites designed to deliver the perfect balance of comfort and style
                        </p>
                    </div>

                    {/* Main Room Image */}
                    <div className="relative mb-6 sm:mb-8">
                        <div className="rounded-2xl overflow-hidden shadow-lg relative">
                            <img
                                src={roomImages[selectedRoom]}
                                alt={`Room ${selectedRoom + 1}`}
                                className="w-full h-[220px] sm:h-[350px] md:h-[450px] object-cover transition-all duration-500"
                            />
                            <button
                                onClick={() => toggleFavorite(selectedRoom)}
                                className="absolute top-3 right-3 bg-white/80 hover:bg-white text-red-500 p-1.5 sm:p-2 rounded-full shadow-md transition-colors"
                            >
                                <HeartIcon filled={favorites.includes(selectedRoom)} />
                            </button>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-5">
                                <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                                    {selectedRoom === 0
                                        ? 'Presidential Suite'
                                        : selectedRoom === 1
                                        ? 'Deluxe King Room'
                                        : selectedRoom === 2
                                        ? 'Ocean View Suite'
                                        : 'Cityscape Studio'}
                                </h3>
                                <div className="flex items-center gap-3 text-white text-xs sm:text-sm">
                                    <span className="flex items-center gap-1">
                                        <BedIcon /> King Bed
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <UsersIcon /> 2 Guests
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <ExpandIcon /> 60 m²
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <WifiIcon /> Free Wi-Fi
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        {roomImages.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedRoom(i)}
                                className={`cursor-pointer rounded-2xl overflow-hidden shadow-md border-2 transition-all ${
                                    selectedRoom === i ? 'border-blue-600 scale-[1.02]' : 'border-transparent hover:scale-[1.02]'
                                }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${i + 1}`}
                                    className="w-full h-28 sm:h-36 md:h-44 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Room Grid */}
            <section className="py-10 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {displayedRooms.map((room, idx) => (
                            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                <img
                                    src={room.img}
                                    alt={room.name}
                                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                                />
                                <div className="p-4 sm:p-5">
                                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{room.name}</h4>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <StarIcon key={i} filled={i < 4} />
                                            ))}
                                        </div>
                                        <span className="text-sm sm:text-base md:text-lg font-bold text-teal-700">${room.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-6 sm:mt-8">
                        <button 
                            onClick={() => setShowAllRooms(!showAllRooms)}
                            className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-colors"
                        >
                            {showAllRooms ? 'Show Less Rooms ↑' : 'Explore More Rooms →'}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HotelLandingPage;