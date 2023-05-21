import React from "react";
import banner1 from "../../../assets/banner1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="banner lg:h-screen  p-5 ">
      <div className="justify-center text-center">
        <h2 className="text-xl lg:text-3xl font-bold text-white">
          Buy your favorite character action figures here!
        </h2>
        <p className="text-white my-3">
          The most complete action figures More than 1000 collectible action
          figure rady to collect
        </p>
        <button className="btn btn-warning">Shop Now</button>
      </div>
      <div className="mt-4 lg:w-2/3 mx-auto">
        <Carousel showThumbs={false} interval={2000} infiniteLoop={true} autoPlay={true}>
          <div className="image-container">
            <img src={banner1} alt="Banner 2" />
          </div>
          <div className="image-container">
            <img src={banner1} alt="Banner 2" />
          </div>
          <div className="image-container">
            <img src={banner1} alt="Banner 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
