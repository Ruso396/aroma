import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { Home } from 'lucide-react';
import Footer from './components/Footer';
import HomePage from './components/Home';

// Home Component

// App Component
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;