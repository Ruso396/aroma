import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/Home';
import HotelLandingPage from './pages/About';
import ContactPage from './pages/Contact';
import ResortBookingForm from './pages/Login';
import RoomListing from './pages/Rooms';
import GrandoriaAmenities from './pages/grandoria-amenities';
import GrandoriaLocation from './pages/grandoria-location';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="HotelLandingPage"element={<HotelLandingPage/>}/>
            <Route path="ContactPage" element={<ContactPage/>}/>
            <Route path="ResortBookingForm" element={<ResortBookingForm/>}/>
            <Route path="RoomListing" element={<RoomListing/>}/>
             <Route path="GrandoriaAmenities" element={<GrandoriaAmenities />} />
            <Route path="GrandoriaLocation" element={<GrandoriaLocation />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;