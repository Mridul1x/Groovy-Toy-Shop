import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with desired options
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-up" data-aos-delay="1000" className="mt-6 lg:mt-10 px-7">
      <h2 className="text-3xl text-center font-bold mb-6 lg:mb-10">
        Toys Gallery
      </h2>
      <Slider responsive={true} {...settings}>
        <div>
          <img
            src="https://marvtoys.com/wp-content/uploads/2021/10/Marvel-Legends-Integrated-Suit-Spider-Man-Marvels-Armadillo-BAF-4.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://marvtoys.com/wp-content/uploads/2021/04/Marvel-Legends-Deadpool-Pirate-Action-Figure-6-inch-Strong-Guy-BAF-5.jpg "
            alt=""
          />
        </div>
        <div>
          <img
            src="https://marvtoys.com/wp-content/uploads/2021/05/Marvel-Legends-Black-Widow-Grey-Suit-Exclusive-Action-Figure-6-inch-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://marvtoys.com/wp-content/uploads/2021/10/Marvel-Legends-Integrated-Suit-Spider-Man-Marvels-Armadillo-BAF-4.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/1zsMGb4/resize-1684503473111163962horologyhands-GZK7-PPJydwunsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/y56PZ5G/resize-16845031421146704594jannikselzvtk-QTNr-J2csunsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://marvtoys.com/wp-content/uploads/2021/10/Marvel-Legends-Integrated-Suit-Spider-Man-Marvels-Armadillo-BAF-4.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://marvtoys.com/wp-content/uploads/2021/10/Marvel-Legends-Integrated-Suit-Spider-Man-Marvels-Armadillo-BAF-4.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://marvtoys.com/wp-content/uploads/2021/10/Marvel-Legends-Integrated-Suit-Spider-Man-Marvels-Armadillo-BAF-4.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;
