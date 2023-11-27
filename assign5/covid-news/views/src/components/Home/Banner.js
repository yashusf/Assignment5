import React from "react";
import { Carousel } from "react-bootstrap";
import './Home.css'
import slide1 from '../../assets/slide1.jfif'
import slide2 from '../../assets/slide2.jfif'
import slide3 from '../../assets/slide3.jfif'

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-images"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-images"
            src={slide2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slide-images"
            src={slide3}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
