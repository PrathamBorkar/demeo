import React, { useState, useEffect, useRef } from 'react';
import { Heart, Share2, ChevronLeft, ChevronRight, Phone, MessageSquare, Check, Info } from 'lucide-react';

const CarListingTailwind = () => {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [activeTab, setActiveTab] = useState('details'); // details, specifications, features
  const slideRef = useRef(null);

  // Mock car data
  const carData = {
    id: "thar-123456",
    name: "Mahindra Thar LX 4*4 Auto",
    year: "2020",
    mileage: "67,000",
    fuelType: "Diesel",
    owner: "Second Owner",
    price: "₹11,90,000",
    emi: "₹23,456",
    location: "Mumbai, Maharashtra",
    description: "This well-maintained Mahindra Thar LX 4*4 Auto comes with a powerful diesel engine and automatic transmission. The vehicle has been carefully maintained with regular service history and is ready for off-road adventures. Features include power steering, power windows, air conditioning, and premium audio system.",
    status: "Booked", // Available, Booked, Sold
    features: [
      { name: "Well Maintained", details: "Regular service at authorized centers with complete service history available" },
      { name: "Airbags & ABS", details: "Dual front airbags and Anti-lock Braking System for enhanced safety" },
      { name: "Alloys", details: "Premium alloy wheels with all-terrain tires in excellent condition" },
      { name: "Air Conditioning", details: "Fully functional climate control system" },
      { name: "Power Steering", details: "Responsive power steering for easier handling" },
      { name: "4-Wheel Drive", details: "Authentic 4x4 capability with high and low range options" }
    ],
    specifications: {
      engine: "2.2L mHawk Diesel",
      power: "130 BHP",
      torque: "300 Nm",
      transmission: "6-Speed Automatic",
      seating: "4 Seater",
      ground_clearance: "226 mm",
      fuel_tank: "57 Liters",
      dimensions: "3985 x 1855 x 1920 mm"
    },
    sellerDetails: {
      name: "Premium Auto Deals",
      rating: 4.8,
      reviews: 36,
      verified: true,
      since: "2015"
    }
  };

  useEffect(() => {
    // Function to fetch images from backend
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        // Replace with your actual API endpoint
        const response = await fetch(`/api/cars/${carData.id}/images`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        
        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
        // Use placeholder images for demo purposes
        setImages([
          '/api/placeholder/800/500',
          '/api/placeholder/800/500',
          '/api/placeholder/800/500',
          '/api/placeholder/800/500'
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [carData.id]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Auto-scroll thumbnail into view when navigating
  useEffect(() => {
    if (slideRef.current) {
      const selectedThumb = slideRef.current.querySelector(`[data-index="${currentImageIndex}"]`);
      if (selectedThumb) {
        selectedThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentImageIndex]);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const handleShare = () => {
    // Implement sharing functionality
    alert("Share functionality would be implemented here");
  };

  const toggleFeatureDetails = (index) => {
    if (expandedFeature === index) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(index);
    }
  };

  // Get status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case "Available": return "bg-green-500";
      case "Booked": return "bg-blue-500";
      case "Sold": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Gallery */}
      <div className="relative">
        {isLoading ? (
          <div className="h-96 w-full flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="h-96 w-full flex items-center justify-center bg-gray-200">
            <p className="text-red-500">Failed to load images</p>
          </div>
        ) : (
          <div className="relative">
            {/* Status Badge */}
            <div className={`absolute top-4 left-4 ${getStatusColor(carData.status)} text-white py-1 px-3 rounded-full z-10 font-medium`}>
              {carData.status}
            </div>
            
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2 z-10">
              <button 
                onClick={toggleFavorite}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <Heart className={favorite ? "text-red-500 fill-red-500" : "text-gray-600"} size={20} />
              </button>
              <button 
                onClick={handleShare}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <Share2 className="text-gray-600" size={20} />
              </button>
            </div>
            
            {/* Main Image */}
            <img 
              src={images[currentImageIndex]} 
              alt={`${carData.name} - View ${currentImageIndex + 1}`} 
              className="w-full h-96 object-cover"
            />
            
            {/* Navigation arrows */}
            <button 
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              onClick={nextImage}
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
      
      {/* Thumbnails */}
      <div className="relative bg-gray-100 p-2 overflow-x-auto" ref={slideRef}>
        <div className="flex space-x-2 w-max">
          {images.map((image, index) => (
            <div 
              key={index}
              data-index={index}
              className={`rounded-md overflow-hidden border-2 cursor-pointer transition-all ${index === currentImageIndex ? 'border-blue-500 opacity-100' : 'border-transparent opacity-70'}`}
              onClick={() => goToImage(index)}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-24 h-16 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Car Title and Price */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold">{carData.name}</h1>
            <p className="text-gray-600">{carData.location}</p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <h2 className="text-3xl font-bold text-gray-900">{carData.price}</h2>
            <p className="text-gray-600">EMI from {carData.emi}/month</p>
          </div>
        </div>
        
        {/* Quick Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col items-center">
            <span className="text-gray-500 text-sm mb-1">Year</span>
            <span className="font-semibold">{carData.year}</span>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col items-center">
            <span className="text-gray-500 text-sm mb-1">KM Driven</span>
            <span className="font-semibold">{carData.mileage}</span>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col items-center">
            <span className="text-gray-500 text-sm mb-1">Fuel Type</span>
            <span className="font-semibold">{carData.fuelType}</span>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col items-center">
            <span className="text-gray-500 text-sm mb-1">Owner</span>
            <span className="font-semibold">{carData.owner}</span>
          </div>
        </div>
        
        {/* Seller Information */}
        <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{carData.sellerDetails.name}</h3>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 mr-1">★</span>
                <span>{carData.sellerDetails.rating} ({carData.sellerDetails.reviews} reviews)</span>
                {carData.sellerDetails.verified && (
                  <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full flex items-center">
                    <Check size={12} className="mr-1" />
                    Verified
                  </span>
                )}
              </div>
            </div>
            <span className="text-gray-500 text-sm">Member since {carData.sellerDetails.since}</span>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <div className="flex space-x-8">
            <button 
              className={`pb-2 font-medium ${activeTab === 'details' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </button>
            <button 
              className={`pb-2 font-medium ${activeTab === 'specifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </button>
            <button 
              className={`pb-2 font-medium ${activeTab === 'features' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === 'details' && (
            <div>
              <p className={`text-gray-700 ${showFullDescription ? '' : 'line-clamp-3'}`}>
                {carData.description}
              </p>
              {carData.description.length > 150 && (
                <button 
                  className="text-blue-600 mt-2 text-sm font-medium"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? 'Show Less' : 'Read More'}
                </button>
              )}
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(carData.specifications).map(([key, value]) => (
                <div key={key} className="border-b border-gray-100 pb-2">
                  <span className="text-gray-500 text-sm capitalize">{key.replace('_', ' ')}</span>
                  <p className="font-medium">{value}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'features' && (
            <div className="space-y-3">
              {carData.features.map((feature, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div 
                    className="p-3 flex justify-between items-center cursor-pointer bg-gray-50"
                    onClick={() => toggleFeatureDetails(index)}
                  >
                    <span className="font-medium">{feature.name}</span>
                    <Info size={18} className="text-gray-400" />
                  </div>
                  {expandedFeature === index && (
                    <div className="p-3 bg-white border-t border-gray-200">
                      <p className="text-gray-700">{feature.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Contact Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="border border-gray-300 rounded-lg p-4 flex items-center justify-center font-medium hover:bg-gray-50 transition-colors">
            <Phone size={20} className="mr-2" />
            Call Seller
          </button>
          
          <button className="bg-green-600 text-white rounded-lg p-4 flex items-center justify-center font-medium hover:bg-green-700 transition-colors">
            <MessageSquare size={20} className="mr-2" />
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarListingTailwind;