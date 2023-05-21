import React, { useContext, useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import MyToysDetails from "./MyToysDetails";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import useTitlte from "../hooks/useTitlte";
const MyToys = () => {
  useTitlte("My Toys")
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = user.email;
  const [sortBy, setSortBy] = useState("asc");

  useEffect(() => {
    if (userEmail) {
      const url = `https://assignment-11-toy-server-indol.vercel.app/toys?email=${encodeURIComponent(
        userEmail
      )}&sort=${sortBy}`;
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
  }, [userEmail, sortBy]);

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
        fetch(`https://assignment-11-toy-server-indol.vercel.app/toys/${_id}`, {
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
  const handleSortChange = (event) => {
    const newSortBy = sortBy === "asc" ? "desc" : "asc";
    setSortBy(newSortBy);
  };
  return (
    <div className="">
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
        <div className="overflow-x-auto ">
          <div className="bg-red-500 p-4 text-center">
            <h1 className=" text-white font-bold text-2xl mb-2">My Toys</h1>
          </div>

          <table className="table table-normal table-auto mx-auto w-11/12">
            <thead className=" red-500">
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th className="flex items-center">
                  Price
                  <button className="ms-2" onClick={handleSortChange}>
                    {sortBy === "asc" ? (
                      <FaArrowDown></FaArrowDown> // Down arrow
                    ) : (
                      <FaArrowUp></FaArrowUp> // Up arrow
                    )}
                  </button>
                </th>
                <th>Available Quantity</th>
                <th>
                  <div className="">Sort by:</div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <MyToysDetails
                  handleDeleteButton={handleDeleteButton}
                  key={toy._id}
                  toy={toy}
                ></MyToysDetails>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyToys;
