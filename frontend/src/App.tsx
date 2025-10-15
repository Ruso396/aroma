import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/Home';
import HotelLandingPage from './pages/About';
import ContactPage from './pages/Contact';
import ResortBookingForm from './pages/Login';
import RoomListing from './pages/Rooms';
import Location from './pages/Location';
import HotelBooking from './pages/HotelBooking';
import RoomDetails from './pages/RoomDetails';
import Amenities from './pages/Amenities';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col ">
        {/* Header is always visible */}
        <Header />

        {/* Main content */}
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<HomePage />} />
          
            <Route path="/about" element={<HotelLandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<ResortBookingForm />} />
            <Route path="/rooms" element={<RoomListing />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/location" element={<Location />} />
            <Route path="/booking" element={<HotelBooking />} />
            <Route path="/room-details" element={<RoomDetails />} />
            {/* fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
