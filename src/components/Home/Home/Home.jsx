import React from "react";
import Banner from "../Banner/Banner";
import ToysTabs from "../Tabs/ToysTabs";
import Gallery from "../Gallery/Gallery";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery> </Gallery>
      <ToysTabs></ToysTabs>
    </div>
  );
};

export default Home;
