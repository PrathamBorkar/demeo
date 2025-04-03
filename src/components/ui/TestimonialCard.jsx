// components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ title, text, author, company, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80 text-left m-2">
      <h3 className="font-bold text-lg">{title}</h3>
      <i className="fas fa-quote-right text-2xl text-gray-400 float-right"></i>
      <p className="text-gray-600 mt-4 text-sm">{text}</p>
      <div className="flex items-center mt-4">
        <img src={image} alt={author} className="rounded-full" />
        <div className="ml-3">
          <p className="font-bold text-sm">{author}</p>
          <p className="text-xs text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;