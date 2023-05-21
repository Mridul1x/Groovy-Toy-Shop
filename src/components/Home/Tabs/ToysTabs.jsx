import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToysTabs = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-toy-server-indol.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  return (
    <Tabs className="mt-12 ">
      <h2 className="text-3xl text-center font-bold mb-4">Shop by Category</h2>
      <TabList className="flex space-x-4 bg-red-500 p-4 justify-center items-center">
        <Tab className="px-4 py-2 text-white font-bold hover:bg-red-600 transition duration-300">
          Avengers
        </Tab>
        <Tab className="px-4 py-2 text-white font-bold hover:bg-red-600 transition duration-300">
          Star Wars
        </Tab>
        <Tab className="px-4 py-2 text-white font-bold hover:bg-red-600 transition duration-300">
          Transformers
        </Tab>
      </TabList>

      <TabPanel>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
          {toys
            .filter((toy) => toy.subCategory === "Avengers")
            .map((toy) => (
              <div
                key={toy._id}
                className="bg-white card card-compact w-4/5 mx-auto shadow-lg rounded-lg p-6 space-y-2"
              >
                <figure>
                  <img src={toy.pictureUrl} alt={toy.name} />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-lg font-bold mb-2">
                    {toy.name}
                  </h3>
                  <p className="text-gray-700 mb-2 text-base">
                    Price: ${toy.price}
                  </p>
                  <p className="text-gray-700 mb-2 text-base">
                    Rating: {toy.rating}
                  </p>
                  <button className=" bg-red-500 hover:bg-red-600 text-base   text-white font-bold py-2 px-4 rounded focus:outline-none">
                    <Link to={`/product-category/${toy._id}`}>
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
          {toys
            .filter((toy) => toy.subCategory === "Star Wars")
            .map((toy) => (
              <div
                key={toy._id}
                className="bg-white card card-compact w-4/5 mx-auto shadow-lg rounded-lg p-6 space-y-2"
              >
                <figure>
                  <img src={toy.pictureUrl} alt={toy.name} />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-lg font-bold mb-2">
                    {toy.name}
                  </h3>
                  <p className="text-gray-700 mb-2 text-base">
                    Price: ${toy.price}
                  </p>
                  <p className="text-gray-700 mb-2 text-base">
                    Rating: {toy.rating}
                  </p>
                  <button className=" bg-red-500 hover:bg-red-600 text-base   text-white font-bold py-2 px-4 rounded focus:outline-none">
                    <Link to={`/product-category/${toy._id}`}>
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
          {toys
            .filter((toy) => toy.subCategory === "Transformers")
            .map((toy) => (
              <div
                key={toy._id}
                className="bg-white card card-compact w-4/5 mx-auto shadow-lg rounded-lg p-6 space-y-2"
              >
                <figure>
                  <img src={toy.pictureUrl} alt={toy.name} />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-lg font-bold mb-2">
                    {toy.name}
                  </h3>
                  <p className="text-gray-700 mb-2 text-base">
                    Price: ${toy.price}
                  </p>
                  <p className="text-gray-700 mb-2 text-base">
                    Rating: {toy.rating}
                  </p>
                  <button className=" bg-red-500 hover:bg-red-600 text-base   text-white font-bold py-2 px-4 rounded focus:outline-none">
                    <Link to={`/product-category/${toy._id}`}>
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default ToysTabs;
