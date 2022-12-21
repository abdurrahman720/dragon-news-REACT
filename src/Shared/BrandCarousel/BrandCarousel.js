import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../assets/brands/brand1.png';
import Brand2 from '../../assets/brands/brand2.png';

const BrandCarousel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src={Brand1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-20"
          src={Brand2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default BrandCarousel;