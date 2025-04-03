// components/CarCard.jsx
import React from 'react';
import { Button } from './button'; // Ensure the case matches the file name


const CarCard = ({ image, title, description, miles, fuel, transmission, price, badge }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg w-64 flex-shrink-0">
      <div className="relative">
        <img src={image} alt={title} />
        {badge && (
          <span className={`absolute top-2 left-2 ${badge.color} text-xs px-2 py-1 rounded`}>
            {badge.text}
          </span>
        )}
      </div>
      <h3 className="mt-4 font-bold">{title}</h3>
      <p className="text-sm">{description}</p>
      {(miles || fuel || transmission) && (
        <div className="flex justify-between text-xs mt-2">
          <span>{miles}</span>
          <span>{fuel}</span>
          <span>{transmission}</span>
        </div>
      )}
      <p className="mt-2 font-bold">{price}</p>
      <Button className="mt-4 w-full bg-white text-gray-900 py-2 rounded hover:bg-gray-100">
        View Details
      </Button>
    </div>
  );
};

export default CarCard;
