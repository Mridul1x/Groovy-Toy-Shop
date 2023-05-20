import React, { useContext, useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle, FaUpload } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = user.email;

  useEffect(() => {
    if (userEmail) {
      const url = `http://localhost:5000/toys?email=${encodeURIComponent(
        userEmail
      )}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setToys(data);
          setLoading(false);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  }, [userEmail]);

  const handleDeleteButton = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toys has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== _id);
              setToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <tr key={toy._id} className="">
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
                  <td>
                    <div className="flex space-x-2">
                      <button className="btn btn-warning hover:bg-[#f1d997] btn-sm btn-accent ">
                        Update
                      </button>
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyToys;
