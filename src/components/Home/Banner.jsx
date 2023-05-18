import React from "react";
import AwesomeSlider from "react-awesome-slider";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';

const Banner = () => {
  return (
    <div>
      <AwesomeSlider cssModule={AwsSliderStyles}>
        <div data-src={banner1} />
        <div data-src={banner2} />
        <div data-src={banner1} />
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
