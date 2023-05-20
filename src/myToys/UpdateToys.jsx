import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
  // const navigate = useNavigate();
  const { id } = useParams();

  const [updatedToy, setUpdatedToy] = useState({
    name: "",
    subCategory: "",
    price: "",
    availableQuantity: "",
    description: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdatedToy({
          name: data.name,
          subCategory: data.subCategory,
          price: data.price,
          availableQuantity: data.availableQuantity,
          description: data.description,
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [id]);

  const handleUpdateSubmit = async (e) => {
    const form = e.target;
    const availableQuantity = form.availableQuantity.value;
    const price = form.price.value;
    const description = form.description.value;

    const updatedToys = {
      price,
      description,
      availableQuantity,
    };

    e.preventDefault();
    fetch(`http://localhost:5000/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToys),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Toys Updated Successfully!",
            confirmButtonText: "cool",
          });
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-black py-8 px-4">
      <div className="bg-red-500 max-w-lg mx-auto    rounded-lg shadow-lg p-6">
        <h3 className=" text-3xl font-bold text-center ">Update Toy</h3>
        <div className="mb-6 mt-2 border p-2 rounded-lg text-white">
          <h1 className="font-semibold text-center">Name: {updatedToy.name}</h1>
          <p className="text-center font-semibold ">
            Category: {updatedToy.subCategory}{" "}
          </p>
        </div>
        <form onSubmit={handleUpdateSubmit}>
          <div className="mb-4">
            <label htmlFor="price" className="text-gray-700 font-medium">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              defaultValue={updatedToy.price}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-marvel-red"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="availableQuantity"
              className="text-gray-700 font-medium"
            >
              Available Quantity:
            </label>
            <input
              type="text"
              id="availableQuantity"
              name="availableQuantity"
              defaultValue={updatedToy.availableQuantity}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-marvel-red"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="text-gray-700 font-medium">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={updatedToy.description}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-marvel-red"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" btn btn-warning hover:bg-[#f1d997] text-base "
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateToys;
