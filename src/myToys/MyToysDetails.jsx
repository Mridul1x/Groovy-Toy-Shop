import React from "react";
import { Link } from "react-router-dom";

const MyToysDetails = ({ toy, handleDeleteButton }) => {
  return (
    <tr>
      <td>{toy.sellerName}</td>
      <td>{toy.name}</td>
      <td>{toy.subCategory}</td>
      <td>${toy.price}</td>
      <td>{toy.availableQuantity}</td>
      <td>
        <button
          className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
          key={toy._id}
        >
          <Link to={`/product-category/${toy._id}`}>View Details</Link>
        </button>
      </td>
      <td>
        <div className="flex space-x-2">
          <Link
            to={`/mytoys/${toy._id}/update`}
            className="btn btn-warning hover:bg-[#f1d997] btn-sm"
          >
            Update
          </Link>
          <button
            onClick={() => handleDeleteButton(toy._id)}
            className="btn btn-sm btn-circle btn-outline  hover:bg-red-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyToysDetails;
