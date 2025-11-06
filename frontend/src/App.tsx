import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/Home';
import HotelLandingPage from './pages/About';
import ContactPage from './pages/Contact';
import ResortBookingForm from './pages/Bookingfrom';
import RoomListing from './pages/Rooms';
import Location from './pages/Location';
import HotelBooking from './pages/HotelBooking';
import RoomDetails from './pages/RoomDetails';
import Amenities from './pages/Amenities';




// 🔹 Utility Component — Automatically scrolls to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // You can change to 'auto' if you want instant scroll
    });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Include ScrollToTop here so it runs on every route change */}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        {/* Header always visible */}
        <Header />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<HotelLandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resortbookingform" element={<ResortBookingForm />} />
            <Route path="/rooms" element={<RoomListing />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/location" element={<Location />} />
            <Route path="/booking" element={<HotelBooking />} />
            <Route path="/room-details" element={<RoomDetails />} />
            
            {/* fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
