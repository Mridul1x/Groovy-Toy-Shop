import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const {
    pictureUrl,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
  } = useLoaderData();

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-2">
      <div className="flex">
        <div className="w-1/3">
          <figure>
            <img src={pictureUrl} alt={name} className="h-full object-cover" />
          </figure>
        </div>
        <div className="w-2/3 pl-4">
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <p className="text-gray-700 mb-2">Seller Name: {sellerName}</p>
          <p className="text-gray-700 mb-2">Seller Email: {sellerEmail}</p>
          <p className="text-gray-700 mb-2">Price: ${price}</p>
          <p className="text-gray-700 mb-2">Rating: {rating}</p>
          <p className="text-gray-700 mb-2">
            Available Quantity: {availableQuantity}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
