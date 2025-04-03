import React from 'react';
import Header from './components/ui/Header';
import { Button } from './components/ui/Button';
import CarCard from './components/ui/CarCard';
import TestimonialCard from './components/ui/TestimonialCard';
import Footer from './components/ui/Footer';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-600">Find cars for sale and for rent near you</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Find Your Dream Car</h2>
          
          <div className="mt-6 flex justify-center">
            <div className="bg-white shadow-md rounded-full flex p-2 space-x-4">
              <select className="px-4 py-2 border rounded-full focus:outline-none">
                <option>Used Cars</option>
                <option>New Cars</option>
              </select>
              <select className="px-4 py-2 border rounded-full focus:outline-none">
                <option>Any Makes</option>
              </select>
              <select className="px-4 py-2 border rounded-full focus:outline-none">
                <option>Any Models</option>
              </select>
              <select className="px-4 py-2 border rounded-full focus:outline-none">
                <option>All Prices</option>
              </select>
              <Button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                <i className="fas fa-search"></i>
              </Button>
            </div>
          </div>
          
          <div className="mt-10">
            <img 
              src="/assets/slider51.png" 
              alt="Slider Image" 
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Browse by Type */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Browse by Type</h2>
        <div className="flex justify-center mt-6 space-x-4 flex-wrap">
          {carTypes.map((type, index) => (
            <div 
              key={index}
              className="border px-6 py-3 rounded-lg flex items-center space-x-2 shadow-sm m-2"
            >
              <i className={type.icon}></i>
              <span>{type.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 flex justify-center space-x-8 flex-wrap px-6">
        <div className="w-full md:w-1/3 bg-blue-100 p-8 rounded-lg m-2">
          <h3 className="text-xl font-bold text-gray-900">Are You Looking For a Car?</h3>
          <p className="text-gray-600 mt-2">We are committed to providing our customers with exceptional service.</p>
          <Link to="/carlist">
          <Button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Get Started
          </Button>
          </Link>
        </div>
        <div className="w-full md:w-1/3 bg-pink-100 p-8 rounded-lg m-2">
          <h3 className="text-xl font-bold text-gray-900">Do You Want to Sell a Car?</h3>
          <p className="text-gray-600 mt-2">We are committed to providing our customers with exceptional service.</p>
          <Link to="/sellcar">
            <Button className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Most Searched Cars */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">The Most Searched Cars</h2>
        <div className="flex justify-center mt-6 space-x-4 flex-wrap">
          {['In Stock', 'Sedan', 'SUV', 'Convertible'].map((filter) => (
            <Button key={filter} className="px-4 py-2 border rounded-full m-1 hover:bg-gray-100">
              {filter}
            </Button>
          ))}
        </div>
        <div className="mt-6 flex overflow-x-auto space-x-6 px-6">
          {mostSearchedCars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <div className="flex justify-center mt-6 space-x-10 flex-wrap">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="text-center m-4">
              <i className={`${item.icon} text-blue-500 text-3xl`}></i>
              <h3 className="mt-2 font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Cars */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold">Latest Cars</h2>
        <div className="mt-6 flex overflow-x-auto space-x-6 px-6">
          {latestCars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold text-gray-900">What our customers say</h2>
        <div className="flex justify-center mt-6 space-x-6 px-6 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <p className="mt-6 text-gray-600 text-sm">
          Rated <span className="font-bold">4.7 / 5</span> based on <span className="font-bold">23,870</span> reviews
        </p>
      </section>

      {/* Get in Touch */}
      <section className="relative">
        <div className="w-full h-96">
          <iframe
            className="w-full h-full"
            src="https://maps.google.com/maps?q=Bradenton,FL&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="absolute top-16 left-16 bg-white p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
          <p className="text-gray-600 mt-2">Contact our Sales Department</p>
          <p className="mt-4 text-gray-900 font-semibold">
            <i className="fas fa-phone-alt"></i> +75 986 039 999
          </p>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
            <p key={day} className="text-gray-600">{day}: 9:00-13:00</p>
          ))}
          <p className="text-gray-600 font-semibold">Sunday: CLOSED</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Data Arrays
const carTypes = [
  { name: 'SUV', icon: 'fas fa-car-side' },
  { name: 'Sedan', icon: 'fas fa-car' },
  { name: 'Hatchback', icon: 'fas fa-car' },
  { name: 'Coupe', icon: 'fas fa-car' },
  { name: 'Hybrid', icon: 'fas fa-bolt' },
  { name: 'Convertible', icon: 'fas fa-car' },
  { name: 'Van', icon: 'fas fa-shuttle-van' },
  { name: 'Truck', icon: 'fas fa-truck' },
  { name: 'Electric', icon: 'fas fa-charging-station' },
];

const mostSearchedCars = [
  {
    image: 'https://placehold.co/250x150',
    title: 'Ford Transit - 2021',
    description: '4.0D PowerShift Momentum 8sp AWD',
    miles: '25,000 Miles',
    fuel: 'Diesel',
    transmission: 'Manual',
    price: '$22,000',
    badge: { text: 'Great Price', color: 'bg-green-500' }
  },
  // Add other cars similarly
];

const whyChooseUs = [
  {
    icon: 'fas fa-hand-holding-usd',
    title: 'Special Financing Offers',
    description: 'Our stress-free finance department can find financial solutions.'
  },
  {
    icon: 'fas fa-thumbs-up',
    title: 'Quality Assurance',
    description: 'We ensure the highest quality standards for our vehicles.'
  },
  {
    icon: 'fas fa-car',
    title: 'Wide Selection',
    description: 'Choose from a wide range of vehicles to suit your needs.'
  },
  {
    icon: 'fas fa-headset',
    title: '24/7 Support',
    description: 'Our support team is available around the clock to assist you.'
  }
];

const latestCars = [
  {
    image: 'https://placehold.co/250x150',
    title: 'T-Cross - 2023',
    description: '4.0D PowerShift Momentum 8sp AWD',
    price: '$15,000'
  },
  // Add other cars
];

const testimonials = [
  {
    title: 'Great Work',
    text: 'Amazing design, easy to customize...',
    author: 'Leslie Alexander',
    company: 'Facebook',
    image: 'https://placehold.co/40x40'
  },
  {
    title: 'Excellent Service',
    text: 'The team was very helpful and responsive.',
    author: 'John Doe',
    company: 'Google',
    image: 'https://placehold.co/40x40'
  },
  {
    title: 'Highly Recommend',
    text: 'I had a fantastic experience buying my car.',
    author: 'Jane Smith',
    company: 'Amazon',
    image: 'https://placehold.co/40x40'
  }
];

export default Home;
