import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FreshnessDetection from './pages/FreshnessDetection';
import ProductCounting from './pages/ProductCounting';
import ExpiryDateValidation from './pages/ExpiryDateValidation';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <header className="bg-gradient-to-r from-amber-700 to-amber-900 text-white w-full py-6 px-4 text-center shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">Application Dashboard</h1>
        <p className="text-blue-100 mt-2">Select a service to get started</p>
      </header>

      <div className="container mx-auto px-4 flex items-center justify-center min-h-[80vh] mt-10 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-green-400 to-green-600" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Freshness Detection</h2>
                <p className="text-gray-600 mb-4">Analyze product freshness with AI</p>
                <Link to="/freshness-detection" className="block mx-auto bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg text-center hover:from-green-600 hover:to-green-700 transition-all duration-300">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-blue-400 to-blue-600" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Product Based Counting</h2>
                <p className="text-gray-600 mb-4">Automated inventory counting</p>
                <Link to="/product-counting" className="block mx-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="transform hover:scale-105 transition-all duration-300">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-red-400 to-red-600" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Expiry Date Extraction</h2>
                <p className="text-gray-600 mb-4">Automated date verification</p>
                <Link to="/expiry-date-extraction" className="block mx-auto bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg text-center hover:from-red-600 hover:to-red-700 transition-all duration-300">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/freshness-detection" element={<FreshnessDetection />} />
        <Route path="/product-counting" element={<ProductCounting />} />
        <Route path="/expiry-date-extraction" element={<ExpiryDateValidation />} />
      </Routes>
    </Router>
  );
};

export default App;