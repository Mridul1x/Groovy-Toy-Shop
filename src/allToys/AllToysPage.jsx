import React, { useState, useEffect } from "react";
import { MutatingDots, ProgressBar } from "react-loader-spinner";
import { Link } from "react-router-dom";

const AllToysPage = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://assignment-11-toy-server-indol.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }, []);

  const handleSearch = () => {
    fetch(
      `https://assignment-11-toy-server-indol.vercel.app/toys?search=${encodeURIComponent(
        searchTerm
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="bg-red-500 p-4 text-center">
        <h1 className=" text-white font-bold text-2xl mb-2">All Toys</h1>
        <div>
          <input
            type="text"
            placeholder="Search by Toy Name"
            value={searchTerm}
            className="p-2 rounded"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="ml-2 bg-white p-2 rounded  "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {loading ? (
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperClass="progress-bar-wrapper"
          borderColor="#EC1D24"
          barColor="#FFDE00"
        />
      ) : (
        <div className="overflow-x-auto mx-auto w-11/12">
          <table className="table table-normal w-full table-auto">
            <thead className=" red-500">
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <tr key={toy._id} className="hover">
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
                      <Link to={`/product-category/${toy._id}`}>
                        View Details
                      </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllToysPage;
