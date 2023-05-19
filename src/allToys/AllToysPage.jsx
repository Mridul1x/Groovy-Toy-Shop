import React, { useState, useEffect } from "react";
import { MutatingDots, ProgressBar } from "react-loader-spinner";

const AllToysPage = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/toys`)
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
    fetch(`http://localhost:5000/toys?search=${encodeURIComponent(searchTerm)}`)
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
      <h1>All Toys</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Toy Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="ml-2" onClick={handleSearch}>
          Search
        </button>
      </div>
      {loading ? (
        <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperClass="progress-bar-wrapper"
        borderColor = '#EC1D24'
        barColor = '#FFDE00'
      />
      ) : (
        <div className="overflow-x-auto">
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
                    <button key={toy._id}>
                      <a href={`/product-category/${toy._id}`}>View Details</a>
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
