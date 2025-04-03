import React, { useState, useEffect } from 'react';
import { Search, Calendar, Gauge, DollarSign, Car } from 'lucide-react';

const CarListingApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [minKm, setMinKm] = useState('1900');
  const [maxKm, setMaxKm] = useState('209000');
  const [minBudget, setMinBudget] = useState('285000');
  const [maxBudget, setMaxBudget] = useState('950000');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define years and brands arrays that were missing
  const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  const brands = ['Jeep', 'Hyundai', 'Skoda', 'Mahindra', 'Toyota', 'Maruti Suzuki'];

  // Simulating database fetch
  useEffect(() => {
    // Simulated data for demonstration
    const fetchedCars = [
      {
        id: 1,
        brand: 'Jeep',
        model: 'Grand Cherokee Limited(O) 4*4',
        year: 2023,
        kilometers: 24000,
        fuelType: 'Petrol',
        price: 4590000,
        imageUrl: 'https://placehold.co/400x300',
        status: 'Available'
      },
      {
        id: 2,
        brand: 'Hyundai',
        model: 'I20 1.2 Asta(O) IVT Auto',
        year: 2023,
        kilometers: 22000,
        fuelType: 'Petrol',
        price: 995000,
        imageUrl: 'https://placehold.co/400x300',
        status: 'Available'
      },
      {
        id: 3,
        brand: 'Skoda',
        model: 'Superb 2.0 TSI Sportline Auto',
        year: 2023,
        kilometers: 28000,
        fuelType: 'Petrol',
        price: 2890000,
        imageUrl: 'https://placehold.co/400x300',
        status: 'Available'
      },
      {
        id: 4,
        brand: 'Mahindra',
        model: 'Thar LX 4WD AT Petrol',
        year: 2022,
        kilometers: 15000,
        fuelType: 'Petrol',
        price: 1950000,
        imageUrl: 'https://placehold.co/400x300',
        status: 'Booked'
      },
      {
        id: 5,
        brand: 'Toyota',
        model: 'Fortuner 4x4 AT Diesel',
        year: 2022,
        kilometers: 32000,
        fuelType: 'Diesel',
        price: 4250000,
        imageUrl: 'https://placehold.co/400x300',
        status: 'Booked'
      },
      {
        id: 6,
        brand: 'Maruti Suzuki',
        model: 'Swift ZXi Plus',
        year: 2023,
        kilometers: 5000,
        fuelType: 'Petrol',
        price: 890000,
        imageUrl: 'https://placehold.co/400x300',
        status: 'Available'
      }
    ];
    
    setCars(fetchedCars);
    setLoading(false);
  }, [searchTerm, selectedYear, minKm, maxKm, minBudget, maxBudget, selectedBrand]);

  const formatPrice = (price) => {
    return '₹' + price.toLocaleString('en-IN');
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Left Side - Filter Panel */}
      <div className="w-72 bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Filter Results</h2>
        
        {/* Search Box */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search by model or brand"
            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        </div>
        
        <div className="space-y-6">
          {/* Registration Year Filter */}
          <div className="filter-group">
            <div className="flex items-center mb-3">
              <Calendar className="h-5 w-5 text-red-600 mr-2" />
              <label className="font-semibold text-gray-700">Registration Year</label>
            </div>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          {/* Kilometers Driven Filter */}
          <div className="filter-group">
            <div className="flex items-center mb-3">
              <Gauge className="h-5 w-5 text-red-600 mr-2" />
              <label className="font-semibold text-gray-700">Kilometers Driven</label>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-3 text-gray-500 text-sm">Min</span>
                <input
                  type="text"
                  className="w-full p-3 pt-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  value={minKm}
                  onChange={(e) => setMinKm(e.target.value)}
                />
              </div>
              <div className="relative flex-1">
                <span className="absolute left-3 top-3 text-gray-500 text-sm">Max</span>
                <input
                  type="text"
                  className="w-full p-3 pt-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  value={maxKm}
                  onChange={(e) => setMaxKm(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Budget Filter */}
          <div className="filter-group">
            <div className="flex items-center mb-3">
              <DollarSign className="h-5 w-5 text-red-600 mr-2" />
              <label className="font-semibold text-gray-700">Budget (₹)</label>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-3 text-gray-500 text-sm">Min</span>
                <input
                  type="text"
                  className="w-full p-3 pt-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  value={minBudget}
                  onChange={(e) => setMinBudget(e.target.value)}
                />
              </div>
              <div className="relative flex-1">
                <span className="absolute left-3 top-3 text-gray-500 text-sm">Max</span>
                <input
                  type="text"
                  className="w-full p-3 pt-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Brand Filter */}
          <div className="filter-group">
            <div className="flex items-center mb-3">
              <Car className="h-5 w-5 text-red-600 mr-2" />
              <label className="font-semibold text-gray-700">Brand</label>
            </div>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="">All Brands</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          
          {/* Apply Filters Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors mt-4">
            Apply Filters
          </button>
          
          {/* Reset Filters Link */}
          <button className="w-full text-center text-gray-600 hover:text-red-600 transition-colors mt-2">
            Reset Filters
          </button>
        </div>
      </div>
      
      {/* Right Side - Car Listings */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-3 gap-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            cars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                {/* Status Badge */}
                <div className="relative">
                  <img 
                    src={car.imageUrl} 
                    alt={`${car.brand} ${car.model}`} 
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-3 left-3 py-1 px-3 rounded-md text-white font-medium ${car.status === 'Available' ? 'bg-red-600' : 'bg-blue-400'}`}>
                    {car.status}
                  </div>
                </div>
                
                {/* Car Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{car.brand} {car.model}</h3>
                  <div className="border-t border-b border-gray-200 my-3 py-3">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col items-center">
                        <div className="bg-gray-100 p-2 rounded-full mb-1">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">{car.year}</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="bg-gray-100 p-2 rounded-full mb-1">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
                            <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">{car.kilometers.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className="bg-gray-100 p-2 rounded-full mb-1">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 15V17C4 18.1046 4.89543 19 6 19H18C19.1046 19 20 18.1046 20 17V15M4 15V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V15M4 15H20" stroke="currentColor" strokeWidth="2" />
                            <path d="M8 7H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">{car.fuelType}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{formatPrice(car.price)}</span>
                    <a 
                      href={`/cardetail/${car.id}`} 
                      className="text-red-600 font-medium flex items-center"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CarListingApp;