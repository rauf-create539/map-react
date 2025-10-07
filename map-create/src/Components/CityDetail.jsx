import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cities from '../FilterData/Cities';

function CityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the city by id
  const city = cities.find(c => c.id === parseInt(id));
  
  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">City not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-6 px-8 shadow-lg">
        <button 
          onClick={() => navigate('/')}
          className="mb-4 px-4 py-2 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition font-semibold"
        >
          ← Back to Cities
        </button>
        <h1 className="text-4xl font-bold">{city.name}</h1>
        <p className="text-xl mt-2 capitalize">Region: {city.category}</p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-8">
        {/* Main Image */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <img 
            src={city.image} 
            alt={city.name}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-600">About {city.name}</h2>
            <p className="text-gray-700 leading-relaxed">
              {city.name} is a beautiful city located in the {city.category} region of the Philippines. 
              Known for its vibrant culture, rich history, and warm hospitality, it offers visitors 
              a unique blend of urban development and natural beauty.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Quick Facts</h2>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="font-semibold mr-2">Region:</span>
                <span className="capitalize">{city.category}</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Country:</span>
                <span>Philippines</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Status:</span>
                <span className="text-green-600">Highly Urbanized City</span>
              </li>
            </ul>
          </div>

          {/* Attractions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Popular Attractions</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Historic landmarks and monuments</li>
              <li>• Local markets and shopping districts</li>
              <li>• Cultural centers and museums</li>
              <li>• Parks and recreational areas</li>
            </ul>
          </div>

          {/* Activities */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-600">Things to Do</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Explore local cuisine and restaurants</li>
              <li>• Visit historical sites</li>
              <li>• Experience local festivals</li>
              <li>• Enjoy nightlife and entertainment</li>
            </ul>
          </div>
        </div>

        {/* Back Button at Bottom */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold text-lg"
          >
            Explore More Cities
          </button>
        </div>
      </div>
    </div>
  );
}

export default CityDetail;