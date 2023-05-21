import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  const [subCategories, setSubCategories] = useState([]);
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    // Fetch the toy data from the server
    fetch("https://assignment-11-toy-server-indol.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        // Extract unique subCategories from the toy data
        const uniqueSubCategories = [
          ...new Set(data.map((toy) => toy.subCategory)),
        ];
        setSubCategories(uniqueSubCategories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    fetch("https://assignment-11-toy-server-indol.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Your toy has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        return errorMessage;
      });
  };

  return (
    <div className="bg-black p-8">
      <div className="bg-red-500 rounded-2xl">
        <form className="p-6 " onSubmit={handleSubmit(onSubmit)}>
          {/* row-1 */}
          <h2 className="text-3xl font-extrabold text-center mb-4 ">Add Toy</h2>
          <div className="flex mb-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  required
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter Coffee Name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ms-8 w-1/2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  required
                  {...register("pictureUrl", { required: true })}
                  type="text"
                  name="pictureUrl"
                  placeholder="Enter toy picture Url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row-2 */}
          <div className="flex mb-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <label className="input-group">
                <input
                  required
                  {...register("sellerName", { required: true })}
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="sellerName"
                  name="sellerName"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ms-8 w-1/2">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <label className="input-group">
                <input
                  required
                  {...register("sellerEmail", { required: true })}
                  type="text"
                  defaultValue={user?.email}
                  placeholder="sellerEmail"
                  name="sellerEmail"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row-3 */}
          <div className="flex mb-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Sub Category</span>
              </label>
              <label className="input-group">
                <select
                  required
                  className="input input-bordered w-full"
                  {...register("subCategory", { required: true })}
                  defaultValue="Avenger"
                >
                  {subCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-control ms-8 w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  required
                  {...register("price", { required: true })}
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row-4 */}
          <div className="flex mb-6">
            <div className="form-control w-1/2 ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  required
                  {...register("rating", { required: true })}
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control ms-8 w-1/2 ">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  required
                  {...register("availableQuantity", { required: true })}
                  type="text"
                  placeholder="availableQuantity"
                  name="availableQuantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* row-5 */}
          <div className="flex mb-6">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <textarea
                  required
                  {...register("description", { required: true })}
                  type="text"
                  placeholder="description"
                  name="description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-warning hover:bg-[#f1d997] text-base btn-block"
            value="Add Toy"
          />
        </form>
      </div>
    </div>
    // <div>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     {/* register your input into the hook by invoking the "register" function */}
    //     <input defaultValue="test" {...register("Name")} />

    //     {/* include validation with required or other standard HTML validation rules */}
    //     <input {...register("exampleRequired", { required: true })} />
    //     {/* errors will return when field validation fails  */}
    //     {errors.exampleRequired && <span>This field is required</span>}

    //     <input type="submit" />
    //   </form>
    // </div>
  );
};

export default AddAToy;
