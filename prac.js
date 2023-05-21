import React, { useContext, useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import { AuthContext } from "../provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = user ? user.email : "";
  const [selectedToy, setSelectedToy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedToys = toys.map((toy) =>
      toy._id === selectedToy._id ? selectedToy : toy
    );
    setToys(updatedToys);
    setSuccessMessage("Toy updated successfully!");

    const url = `https://assignment-11-toy-server-indol.vercel.app/toys/${selectedToy._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        closeModal();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleUpdate = (toy) => {
    setSelectedToy(toy);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedToy(null);
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (userEmail) {
      const url = `https://assignment-11-toy-server-indol.vercel.app/toys?email=${encodeURIComponent(
        userEmail
      )}`;
      fetch(url)
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
    }
  }, [userEmail]);
  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [successMessage]);

  return (
    <div>
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
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
                  <td>
                    <button onClick={() => handleUpdate(toy)} className="btn">
                      Update
                    </button>
                    <button className="btn btn-error ms-2">X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Modal */}
      {selectedToy && (
        <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
          <div className="modal-box">
            <h2 className="font-bold text-lg">Update Toy</h2>
            <form onSubmit={handleUpdateSubmit}>
              {/* Render the form fields for updating toy information */}
              {/* For example: */}
              <div className="mb-4">
                <label className="block font-medium mb-2">Price</label>
                <input
                  type="text"
                  value={selectedToy.price}
                  onChange={(e) =>
                    setSelectedToy((prevToy) => ({
                      ...prevToy,
                      price: e.target.value,
                    }))
                  }
                  className="w-full border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">
                  Available Quantity
                </label>
                <input
                  type="text"
                  value={selectedToy.availableQuantity}
                  onChange={(e) =>
                    setSelectedToy((prevToy) => ({
                      ...prevToy,
                      availableQuantity: e.target.value,
                    }))
                  }
                  className="w-full border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Description</label>
                <textarea
                  value={selectedToy.description}
                  onChange={(e) =>
                    setSelectedToy((prevToy) => ({
                      ...prevToy,
                      description: e.target.value,
                    }))
                  }
                  className="w-full border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button className="btn" onClick={closeModal}>
                  Yay!
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToys;
