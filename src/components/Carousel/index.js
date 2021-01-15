import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styled.css';

import anpei from './images/anpei-2019.jpg';
import fprofi from './images/fprofi-2019.jpg';
import latinoware from './images/latinoware-2019.jpg';
import nasa from './images/nasa-2019.jpg';
import unimed from './images/unimed-2019.jpg';


export default class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src={unimed} />
            <p>Hackaton Unimed 2019</p>
          </div>
          <div>
            <img src={nasa} />
            <p>Nasa Space Chalange 2019</p>
          </div>
          <div>
            <img src={latinoware} />
            <p>Latinoware 2019</p>
          </div>
          <div>
            <img src={anpei} />
            <p>Anpei 2019</p>
          </div>
          <div>
            <img src={fprofi} />
            <p>Feira das Profissões Uniamérica 2019</p>
          </div>
        </Slider>
      </div>
    );
  }
}


