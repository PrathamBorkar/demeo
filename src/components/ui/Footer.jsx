import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Email signup section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">Join BoxCar</h3>
          <p className="text-gray-400 mt-2">Receive pricing updates, shopping tips & more!</p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-l-md border-none focus:outline-none text-gray-800 w-64"
            />
            <button className="bg-blue-500 px-6 py-2 rounded-r-md hover:bg-blue-600 text-white">
              Sign Up
            </button>
          </div>
        </div>

        {/* Footer links section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Get in Touch</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Live Chat</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">How it Works</a></li>
            </ul>
          </div>

          {/* Our Brands */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Brands</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Toyota</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Porsche</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Audi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">BMW</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Ford</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Nissan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Peugeot</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Volkswagen</a></li>
            </ul>
          </div>

          {/* Vehicles Type */}
          <div>
            <h4 className="font-bold text-lg mb-4">Vehicles Type</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Sedan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Hatchback</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">SUV</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Hybrid</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Electric</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Coupe</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Truck</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Convertible</a></li>
            </ul>
          </div>
        </div>

        {/* Mobile App and Social Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mobile App */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Mobile App</h4>
            <button className="flex items-center bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
              <span className="mr-2">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M12 4.5C10.683 4.5 9.5 5.683 9.5 7V7.5H14.5V7C14.5 5.683 13.317 4.5 12 4.5ZM16 7.5V7C16 4.791 14.209 3 12 3C9.791 3 8 4.791 8 7V7.5H7C6.448 7.5 6 7.948 6 8.5V19.5C6 20.052 6.448 20.5 7 20.5H17C17.552 20.5 18 20.052 18 19.5V8.5C18 7.948 17.552 7.5 17 7.5H16Z"/>
                </svg>
              </span>
              Download on the Apple Store
            </button>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12.5 16.5H11V10H12.5V16.5ZM12 8.75C11.586 8.75 11.25 8.414 11.25 8C11.25 7.586 11.586 7.25 12 7.25C12.414 7.25 12.75 7.586 12.75 8C12.75 8.414 12.414 8.75 12 8.75Z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.42 3.89 14.28C4.41 15.98 6.01 17.22 7.89 17.25C6.37 18.4 4.5 19.06 2.52 19.06C2.16 19.06 1.81 19.04 1.47 18.99C3.38 20.24 5.65 20.97 8.06 20.97C16 20.97 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 13.5H5.5V8H8V13.5ZM6.75 6.75C6.75 6.06 7.31 5.5 8 5.5C8.69 5.5 9.25 6.06 9.25 6.75C9.25 7.44 8.69 8 8 8C7.31 8 6.75 7.44 6.75 6.75ZM18.5 13.5H16V10.21C16 9.45 15.31 8.83 14.55 8.83C13.79 8.83 13 9.45 13 10.21V13.5H10.5V8H13V9C13.53 8.23 14.61 7.76 15.5 7.76C17.09 7.76 18.5 9.17 18.5 10.76V13.5Z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;