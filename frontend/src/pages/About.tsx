import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-900">Rooms</div>
                    <nav className="flex gap-8">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-900 font-medium">Rooms</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Collage */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 relative">
                                <img
                                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=500&fit=crop"
                                    alt="Hotel exterior"
                                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                                />
                                <div className="absolute top-4 right-4 bg-yellow-400 rounded-full p-3">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop"
                                alt="Hotel lobby"
                                className="w-full h-40 object-cover rounded-2xl shadow-lg"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop"
                                alt="Hotel room"
                                className="w-full h-40 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <div className="inline-block bg-teal-50 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                            5 Star Hotel
                        </div>
                        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Where Timeless Elegance<br />Meets Modern Luxury
                        </h1>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                            Experience unparalleled comfort in our meticulously designed rooms and suites. Each space combines contemporary elegance with thoughtful amenities to ensure an unforgettable stay in the heart of the city.
                        </p>

                        {/* Features */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="bg-teal-700 rounded-full p-2 mt-1">
                                    <CheckIcon />
                                    <span className="text-white"></span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Prime Location</h3>
                                    <p className="text-gray-600 text-sm">Steps away from major attractions, dining, and entertainment</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-teal-700 rounded-full p-2 mt-1">
                                    <CheckIcon />
                                    <span className="text-white"></span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">World-Class Amenities</h3>
                                    <p className="text-gray-600 text-sm">State-of-the-art fitness center, spa, and rooftop pool</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-teal-700 rounded-full p-2 mt-1">
                                    <CheckIcon />
                                    <span className="text-white"></span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">24/7 Concierge</h3>
                                    <p className="text-gray-600 text-sm">Dedicated team ready to assist with any request</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate("/rooms")}
                                className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full font-medium transition-colors"
                            >
                                Explore Rooms
                            </button>
                            <button
                                onClick={() => navigate("/contact")}
                                className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-full font-medium transition-colors"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hospitality Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Exceptional Hospitality Redefined</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover a world of luxury and comfort with our premium services and amenities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                                alt="Elegant Interior"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Elegant Interiors</h3>
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} filled={true} />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm mb-4">
                                    Thoughtfully designed spaces that blend sophistication with warmth and comfort
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <UsersIcon />
                                        2-4 Guests
                                    </span>
                                    <span>From $299/night</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
                                alt="Gourmet Dining"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Gourmet Dining</h3>
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} filled={i < 4} />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm mb-4">
                                    Award-winning restaurants serving exquisite cuisine from around the world
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <UsersIcon />
                                        Open Daily
                                    </span>
                                    <span>7 AM - 11 PM</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600&h=400&fit=crop"
                                alt="Scenic Views"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Scenic Location</h3>
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} filled={true} />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm mb-4">
                                    Breathtaking views of the city skyline and surrounding natural beauty
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
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
            <section className="py-16 bg-teal-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-teal-700 mb-2">236</div>
                            <div className="text-gray-600">Luxury Rooms</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-teal-700 mb-2">96%</div>
                            <div className="text-gray-600">Satisfaction Rate</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-teal-700 mb-2">15</div>
                            <div className="text-gray-600">Years of Service</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-teal-700 mb-2">100</div>
                            <div className="text-gray-600">Team Members</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rooms Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">ROOMS</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Browse our collection of elegantly appointed rooms and suites
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Room Display */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                                <div className="relative">
                                    <img
                                        src={roomImages[selectedRoom]}
                                        alt="Room"
                                        className="w-full h-96 object-cover"
                                    />
                                    <button
                                        onClick={() => toggleFavorite(selectedRoom)}
                                        className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition-transform"
                                    >
                                        <HeartIcon filled={favorites.includes(selectedRoom)} />
                                    </button>
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                                            Featured
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 flex gap-2">
                                        <button className="bg-white bg-opacity-90 backdrop-blur-sm p-2 rounded-lg hover:bg-opacity-100 transition-all">
                                            <UsersIcon />
                                        </button>
                                        <button className="bg-white bg-opacity-90 backdrop-blur-sm p-2 rounded-lg hover:bg-opacity-100 transition-all">
                                            <BedIcon />
                                        </button>
                                        <button className="bg-white bg-opacity-90 backdrop-blur-sm p-2 rounded-lg hover:bg-opacity-100 transition-all">
                                            <ExpandIcon />
                                        </button>
                                        <button className="bg-white bg-opacity-90 backdrop-blur-sm p-2 rounded-lg hover:bg-opacity-100 transition-all">
                                            <WifiIcon />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-3xl font-bold text-gray-900">Deluxe Suite</h3>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <StarIcon key={i} filled={true} />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        Indulge in the ultimate comfort of our Deluxe Suite. Featuring a spacious bedroom, elegant living area, and premium amenities, this suite offers a perfect blend of luxury and functionality. Floor-to-ceiling windows provide stunning views, while modern technology ensures your stay is as convenient as it is memorable.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <UsersIcon />
                                            <span className="text-sm">Up to 4 guests</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <BedIcon />
                                            <span className="text-sm">King Size Bed</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <ExpandIcon />
                                            <span className="text-sm">450 sq ft</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-700">
                                            <WifiIcon />
                                            <span className="text-sm">Free WiFi</span>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 pt-6">
                                        <div className="flex items-end justify-between mb-4">
                                            <div>
                                                <span className="text-gray-500 text-sm">Starting from</span>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-4xl font-bold text-teal-700">$289</span>
                                                    <span className="text-gray-500">/ night</span>
                                                </div>
                                            </div>
                                            <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full font-medium transition-colors">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Room Thumbnails */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Executive Suite</h3>
                            <div className="space-y-4">
                                {roomImages.map((img, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedRoom(idx)}
                                        className={`cursor-pointer rounded-xl overflow-hidden transition-all ${selectedRoom === idx ? 'ring-4 ring-teal-700 shadow-xl' : 'hover:shadow-lg'
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Room ${idx + 1}`}
                                            className="w-full h-32 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6 mt-6">
                                <h4 className="font-bold text-gray-900 mb-3">Quick Features</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <CheckIcon />
                                        <span>24/7 Room Service</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon />
                                        <span>Smart TV & Entertainment</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon />
                                        <span>Mini Bar & Coffee Maker</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon />
                                        <span>Premium Toiletries</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckIcon />
                                        <span>Work Desk & Ergonomic Chair</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Room Grid */}
            <section className="pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { name: 'Standard Room', price: 159, img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop' },
                            { name: 'Superior Room', price: 199, img: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=400&h=300&fit=crop' },
                            { name: 'Family Suite', price: 349, img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop' },
                            { name: 'Presidential Suite', price: 599, img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop' }
                        ].map((room, idx) => (
                            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <img src={room.img} alt={room.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h4 className="font-bold text-gray-900 mb-2">{room.name}</h4>
                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <StarIcon key={i} filled={i < 4} />
                                            ))}
                                        </div>
                                        <span className="text-lg font-bold text-teal-700">${room.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-full font-medium transition-colors">
                            Explore More Rooms →
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HotelLandingPage;