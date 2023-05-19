import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToysTabs = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);

  return (
    <Tabs className="mt-12">
      <TabList className="flex space-x-4 bg-red-500 p-4 justify-center">
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
              <div key={toy.name} className="bg-white shadow-lg rounded-lg p-6 space-y-2">
                <figure>
                  <img src={toy.pictureUrl} alt={toy.name} />
                </figure>
                <h3 className="text-lg font-bold mb-2">{toy.name}</h3>
                <p className="text-gray-700 mb-2">Price: ${toy.price}</p>
                <p className="text-gray-700 mb-2">Rating: {toy.rating}</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none">
                  View Details
                </button>
              </div>
            ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
          {toys
            .filter((toy) => toy.subCategory === "Star Wars")
            .map((toy) => (
              <div key={toy.name} className="bg-white shadow-lg rounded-lg p-6 space-y-2">
                <figure >
                  <img  src={toy.pictureUrl} alt={toy.name} />
                </figure>
                <h3 className="text-lg font-bold mb-2">{toy.name}</h3>
                <p className="text-gray-700 mb-2">Price: ${toy.price}</p>
                <p className="text-gray-700 mb-2">Rating: {toy.rating}</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none">
                  View Details
                </button>
              </div>
            ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
          {toys
            .filter((toy) => toy.subCategory === "Transformers")
            .map((toy) => (
              <div key={toy.name} className="bg-white shadow-lg rounded-lg p-6 space-y-2">
                <figure>
                  <img src={toy.pictureUrl} alt={toy.name} />
                </figure>
                <h3 className="text-lg font-bold mb-2">{toy.name}</h3>
                <p className="text-gray-700 mb-2">Price: ${toy.price}</p>
                <p className="text-gray-700 mb-2">Rating: {toy.rating}</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none">
                  View Details
                </button>
              </div>
            ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default ToysTabs;
