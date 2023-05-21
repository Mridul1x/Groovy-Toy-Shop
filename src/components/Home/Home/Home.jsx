import React from "react";
import Banner from "../Banner/Banner";
import ToysTabs from "../Tabs/ToysTabs";
import Gallery from "../Gallery/Gallery";
import Feedback from "../Feedback/Feedback";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery> </Gallery>
      <ToysTabs></ToysTabs>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
