import React, { useState, useEffect } from 'react';

const Homepage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Countdown Timer
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-15').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeIn">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Luxury Redefined in Every Stay
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Experience unparalleled comfort and sophistication at our premium hotel. From elegant suites to world-class amenities, every moment of your stay is crafted to perfection.
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <i className="fas fa-wifi text-2xl text-blue-600"></i>
                  <span className="text-gray-700 font-medium">Complimentary WiFi</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-car text-2xl text-blue-600"></i>
                  <span className="text-gray-700 font-medium">Valet Parking</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-mug-hot text-2xl text-blue-600"></i>
                  <span className="text-gray-700 font-medium">24/7 Room Service</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                  Book Now
                </button>
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                  View Rooms
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
                  alt="Luxury Hotel"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Floating Review Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white rounded-xl p-6 shadow-2xl animate-float">
                <div className="flex gap-1 mb-3">
                  {[...Array(4)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                </div>
                <h6 className="font-bold text-gray-900 mb-2">Exceptional Experience</h6>
                <p className="text-sm text-gray-600 mb-3">
                  "Absolutely stunning hotel! The service was impeccable and the views breathtaking."
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Sarah Johnson"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">Sarah Johnson</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">150</div>
              <div className="text-gray-600 font-medium">Luxury Rooms</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600 font-medium">Star Rating</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-gray-600 font-medium">Hour Service</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">98</div>
              <div className="text-gray-600 font-medium">Guest Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Welcome to Aroma Resort</h2>
              <p className="text-xl text-gray-600 font-medium">
                Where luxury meets tranquility in the heart of nature's paradise.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nestled among rolling hills and pristine landscapes, Grandview Resort has been offering exceptional hospitality for over three decades. Our commitment to excellence and attention to detail creates an unforgettable experience for discerning travelers seeking both comfort and adventure.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From our elegantly appointed suites to our world-class amenities, every aspect of your stay is designed to exceed expectations. Discover breathtaking views, exquisite dining, and personalized service that makes every moment special.
              </p>

              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">185</div>
                  <div className="text-sm text-gray-600">Luxury Rooms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Guest Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">30</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Our Story
                </button>
                <button className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                  View Rooms
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=700&fit=crop"
                  alt="Resort"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=300&fit=crop"
                  alt="Suite"
                  className="absolute bottom-8 -left-8 rounded-xl shadow-2xl w-48 h-48 object-cover border-4 border-white"
                />
                <div className="absolute top-8 right-8 bg-blue-600 text-white px-6 py-8 rounded-xl shadow-2xl text-center">
                  <div className="text-4xl font-bold mb-1">30+</div>
                  <div className="text-sm">Years<br />Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Showcase */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Rooms</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Our Accommodations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our collection of elegantly designed rooms and suites, each offering unparalleled comfort and luxury
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Room */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=500&fit=crop"
                  alt="Presidential Suite"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Presidential
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 flex justify-around">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-users text-gray-600"></i>
                    <span className="text-sm font-medium">6 Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-home text-gray-600"></i>
                    <span className="text-sm font-medium">180m²</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-map-marker-alt text-gray-600"></i>
                    <span className="text-sm font-medium">Top Floor</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Grand Presidential Suite</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Experience the pinnacle of luxury in our spacious presidential suite featuring panoramic city views, elegant furnishings, and premium amenities designed for the most discerning guests.
                </p>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <i className="fas fa-wifi text-2xl text-gray-400 mb-2"></i>
                    <p className="text-xs text-gray-600">Premium WiFi</p>
                  </div>
                  <div className="text-center">
                    <i className="fas fa-tv text-2xl text-gray-400 mb-2"></i>
                    <p className="text-xs text-gray-600">Smart TV</p>
                  </div>
                  <div className="text-center">
                    <i className="fas fa-mug-hot text-2xl text-gray-400 mb-2"></i>
                    <p className="text-xs text-gray-600">Coffee Bar</p>
                  </div>
                  <div className="text-center">
                    <i className="fas fa-snowflake text-2xl text-gray-400 mb-2"></i>
                    <p className="text-xs text-gray-600">Climate Control</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">$649</span>
                    <span className="text-gray-600 text-sm ml-2">per night</span>
                  </div>
                  <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Reserve Suite
                  </button>
                </div>
              </div>
            </div>

            {/* Side Rooms */}
            <div className="space-y-8">
              {[
                {
                  name: 'Executive Business Room',
                  price: 329,
                  image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop',
                  features: ['Work Space', 'City Views']
                },
                {
                  name: 'Garden View Deluxe',
                  price: 269,
                  image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop',
                  features: ['Garden View', 'Private Terrace']
                }
              ].map((room, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="relative group">
                    <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <i className="fas fa-arrow-up-right text-white text-2xl"></i>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{room.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Elegant accommodations with modern amenities and stunning views.
                    </p>
                    <div className="flex gap-3 mb-4 text-xs">
                      {room.features.map((feature, i) => (
                        <span key={i} className="flex items-center gap-1 text-gray-600">
                          <i className="fas fa-check-circle text-blue-600"></i>
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-2xl font-bold text-gray-900">
                        ${room.price}
                        <span className="text-sm text-gray-600 font-normal">/night</span>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* More Rooms Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Classic Double', price: 189, image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop' },
              { name: 'Superior King', price: 249, image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=400&h=300&fit=crop' },
              { name: 'Premium Ocean View', price: 359, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop' },
              { name: 'Luxury Penthouse', price: 1199, image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&h=300&fit=crop' }
            ].map((room, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="relative group">
                  <img src={room.image} alt={room.name} className="w-full h-56 object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <i className="fas fa-eye text-gray-900"></i>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h5 className="font-bold text-gray-900 mb-3">{room.name}</h5>
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-xl font-bold text-blue-600">
                      ${room.price.toLocaleString()}
                      <span className="text-sm text-gray-600 font-normal">/night</span>
                    </div>
                  </div>
                  <div className="flex gap-2 text-gray-400">
                    <i className="fas fa-wifi"></i>
                    <i className="fas fa-tv"></i>
                    <i className="fas fa-phone"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
              <span>Explore All Accommodations</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Amenities</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">World-Class Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our exceptional amenities designed to enhance your stay
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-wifi',
                title: 'High-Speed Internet',
                desc: 'Complimentary wireless internet access throughout the hotel premises with enterprise-grade security.',
                features: ['24/7 Available', 'High Speed'],
                image: 'https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?w=400&h=300&fit=crop'
              },
              {
                icon: 'fa-swimming-pool',
                title: 'Rooftop Pool',
                desc: 'Luxurious rooftop swimming pool with breathtaking city skyline views and premium lounging areas.',
                features: ['Heated Pool', 'City Views'],
                image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=400&h=300&fit=crop'
              },
              {
                icon: 'fa-car',
                title: 'Valet Parking',
                desc: 'Premium valet parking service with secure underground facility and professional attendants.',
                features: ['Secure', 'Valet Service'],
                image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=400&h=300&fit=crop'
              },
              {
                icon: 'fa-dumbbell',
                title: 'Modern Fitness Center',
                desc: 'Cutting-edge fitness facility featuring premium equipment and personal training services.',
                features: ['24/7 Access', 'Personal Training'],
                image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop'
              },
              {
                icon: 'fa-utensils',
                title: 'Signature Restaurant',
                desc: 'Award-winning culinary experience featuring international cuisine crafted by renowned chefs.',
                features: ['Fine Dining', 'Wine Selection'],
                image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop'
              },
              {
                icon: 'fa-spa',
                title: 'Luxury Spa',
                desc: 'Tranquil sanctuary offering therapeutic treatments and holistic wellness experiences.',
                features: ['Full Service', 'Wellness Programs'],
                image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop'
              }
            ].map((amenity, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden group">
                  <img src={amenity.image} alt={amenity.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className={`fas ${amenity.icon} text-5xl text-white`}></i>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{amenity.title}</h4>
                  <p className="text-gray-600 mb-4">{amenity.desc}</p>
                  <div className="flex gap-3">
                    {amenity.features.map((feature, i) => (
                      <span key={i} className="flex items-center gap-1 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-green-500"></i>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">What Our Guests Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read reviews from our satisfied guests who experienced exceptional hospitality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Robert Johnson',
                role: 'Chief Executive Officer',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
                image: 'https://randomuser.me/api/portraits/men/32.jpg'
              },
              {
                name: 'Sarah Williams',
                role: 'Marketing Director',
                review: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id.',
                image: 'https://randomuser.me/api/portraits/women/65.jpg'
              },
              {
                name: 'Michael Davis',
                role: 'Product Manager',
                review: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram.',
                image: 'https://randomuser.me/api/portraits/men/54.jpg'
              },
              {
                name: 'Emily Thompson',
                role: 'Design Lead',
                review: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam.',
                image: 'https://randomuser.me/api/portraits/women/44.jpg'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="mb-6">
                  <i className="fas fa-quote-left text-4xl text-blue-200"></i>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.review}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Offers</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Special Deals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take advantage of our exclusive offers and packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                badge: '25% OFF',
                title: 'Weekend Getaway',
                desc: 'Escape the ordinary with our exclusive weekend package. Includes complimentary breakfast and late checkout.',
                originalPrice: 299,
                offerPrice: 224,
                validity: 'Valid until Dec 31, 2024',
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
                featured: false
              },
              {
                badge: 'BEST VALUE',
                title: 'Extended Stay Deal',
                desc: 'Stay 5 nights or more and enjoy significant savings. Perfect for business travelers and extended vacations.',
                originalPrice: 189,
                offerPrice: 149,
                validity: 'Book by Jan 15, 2025',
                image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop',
                featured: true
              },
              {
                badge: 'EARLY BIRD',
                title: 'Advance Booking',
                desc: 'Plan ahead and save more! Book your stay 30 days in advance with free cancellation up to 7 days.',
                originalPrice: 249,
                offerPrice: 199,
                validity: 'Available year-round',
                image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop',
                featured: false
              }
            ].map((offer, idx) => (
              <div key={idx} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 ${offer.featured ? 'ring-4 ring-blue-600' : ''}`}>
                <div className="relative">
                  <img src={offer.image} alt={offer.title} className="w-full h-56 object-cover" />
                  <div className={`absolute top-4 right-4 ${offer.featured ? 'bg-amber-500' : 'bg-red-500'} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                    {offer.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.desc}</p>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-2xl text-gray-400 line-through">${offer.originalPrice}</span>
                      <span className="text-3xl font-bold text-blue-600">${offer.offerPrice}</span>
                      <span className="text-sm text-gray-600">per night</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <i className="fas fa-calendar-check"></i>
                      <span>{offer.validity}</span>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Limited Time Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
                <p className="text-blue-100 text-lg">
                  Don't miss out on our exclusive seasonal promotion. Book now and save up to 40% on your dream vacation with complimentary upgrades and special perks.
                </p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <div className="flex gap-4">
                  <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                    <div className="text-4xl font-bold">{countdown.days}</div>
                    <div className="text-sm text-blue-100">Days</div>
                  </div>
                  <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                    <div className="text-4xl font-bold">{countdown.hours}</div>
                    <div className="text-sm text-blue-100">Hours</div>
                  </div>
                  <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-4">
                    <div className="text-4xl font-bold">{countdown.minutes}</div>
                    <div className="text-sm text-blue-100">Minutes</div>
                  </div>
                </div>
                <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Claim Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Experience Luxury Like Never Before</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Immerse yourself in unparalleled comfort and sophistication at our premium hotel. From elegantly appointed rooms to world-class amenities, every detail is crafted to exceed your expectations.
              </p>
              <ul className="space-y-4">
                {[
                  'Complimentary breakfast and Wi-Fi',
                  '24/7 concierge and room service',
                  'State-of-the-art spa and fitness center',
                  'Prime location with stunning city views'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <i className="fas fa-check-circle text-green-500 text-xl"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                  Book Your Stay
                </button>
                <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors">
                  View Rooms
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=700&fit=crop"
                alt="Luxury Experience"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute top-8 right-8 bg-red-500 text-white px-6 py-4 rounded-xl shadow-2xl">
                <div className="text-sm font-semibold mb-1">Special Offer</div>
                <div className="text-3xl font-bold">Save 30%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Events</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Perfect Venue for Every Occasion</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Host unforgettable events in our elegant spaces designed for celebrations and gatherings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'fa-heart',
                title: 'Wedding Celebrations',
                desc: 'Create magical moments with our comprehensive wedding packages and stunning venues.',
                features: ['Premium Venues', 'Full Catering'],
                image: 'https://images.unsplash.com/photo-1710587385468-33b89e80bd31?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'
              },
              {
                icon: 'fa-building',
                title: 'Business Conferences',
                desc: 'State-of-the-art facilities equipped with modern technology for successful meetings.',
                features: ['Modern Tech', 'WiFi Access'],
                image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop'
              },
              {
                icon: 'fa-calendar',
                title: 'Special Occasions',
                desc: 'Celebrate life\'s milestones in style with customized event planning and coordination.',
                features: ['Custom Setup', 'Event Coordination'],
                image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop'
              },
              {
                icon: 'fa-users',
                title: 'Corporate Retreats',
                desc: 'Perfect setting for team building activities and corporate getaways.',
                features: ['Team Building', 'Outdoor Activities'],
                image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop'
              },
              {
                icon: 'fa-music',
                title: 'Entertainment Events',
                desc: 'Host spectacular entertainment events with premium sound and lighting systems.',
                features: ['Live Music', 'Dance Floor'],
                image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop'
              },
              {
                icon: 'fa-star',
                title: 'VIP Gatherings',
                desc: 'Exclusive spaces for intimate VIP events with premium service and amenities.',
                features: ['Exclusive Access', 'Premium Service'],
                image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400&h=300&fit=crop'
              }
            ].map((event, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <i className={`fas ${event.icon} text-white text-xl`}></i>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h4>
                  <p className="text-gray-600 mb-4">{event.desc}</p>
                  <div className="flex gap-3 mb-4">
                    {event.features.map((feature, i) => (
                      <span key={i} className="flex items-center gap-1 text-sm text-gray-600">
                        <i className="fas fa-check-circle text-green-500"></i>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Explore Details
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Location & Activities</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Discover the Area</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore attractions and activities near our prime location
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Entertainment Quarter',
                  distance: '2 min walk',
                  icon: 'fa-music',
                  desc: 'Vibrant district with theaters, clubs, and live entertainment venues.',
                  stats: ['Open 24/7', '4.8 Rating'],
                  image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop'
                },
                {
                  name: 'Waterfront Marina',
                  distance: '5 min drive',
                  icon: 'fa-water',
                  desc: 'Beautiful waterfront with scenic views perfect for evening strolls.',
                  stats: ['Scenic Views', 'Photo Spot'],
                  image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
                },
                {
                  name: 'Historic Quarter',
                  distance: '10 min walk',
                  icon: 'fa-landmark',
                  desc: 'Rich cultural heritage with museums and historical landmarks.',
                  stats: ['Guided Tours', 'Bike Friendly'],
                  image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop'
                },
                {
                  name: 'Premium Shopping Plaza',
                  distance: '3 min walk',
                  icon: 'fa-shopping-bag',
                  desc: 'Luxury shopping destination with international brands and dining.',
                  stats: ['Tax Free', 'Cafés Inside'],
                  image: 'https://images.unsplash.com/photo-1555529902-5261145633bf?w=400&h=300&fit=crop'
                }
              ].map((location, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className="relative h-48">
                    <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                      <i className={`fas ${location.icon}`}></i>
                      {location.distance}
                    </div>
                  </div>
                  <div className="p-5">
                    <h5 className="text-lg font-bold text-gray-900 mb-2">{location.name}</h5>
                    <p className="text-gray-600 text-sm mb-4">{location.desc}</p>
                    <div className="flex gap-3">
                      {location.stats.map((stat, i) => (
                        <span key={i} className="text-xs text-gray-600 flex items-center gap-1">
                          <i className="fas fa-check-circle text-blue-600"></i>
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Prime Location Benefits</h3>
                <p className="text-sm text-gray-600">Easy access to city attractions and transport</p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: 'fa-train', title: 'Public Transport Hub', desc: 'Metro station 200m away' },
                  { icon: 'fa-plane', title: 'Airport Connection', desc: 'Direct shuttle every 30 min' },
                  { icon: 'fa-car', title: 'Valet Parking', desc: 'Complimentary for guests' },
                  { icon: 'fa-compass', title: 'City Center Access', desc: 'Walking distance to attractions' }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${benefit.icon} text-blue-600`}></i>
                    </div>
                    <div>
                      <h6 className="font-semibold text-gray-900 text-sm mb-1">{benefit.title}</h6>
                      <p className="text-xs text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                View Full Location Guide
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {[
              'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1519167758481-83f29da8fd49?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=400&fit=crop',
              'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400&fit=crop'
            ].map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg aspect-square">
                <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <i className="fas fa-eye text-gray-900"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
              <i className="fas fa-images"></i>
              Discover Our Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 z-50 flex items-center justify-center"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Homepage;