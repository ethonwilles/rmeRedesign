import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

import HeaderImage from "../components/HeaderImage";
import NavBar from "../components/NavBar";

import mainImg from "../images/rmemainpic.jpg";
import premiereImg from "../images/premiere.jpg";
import greatwall from "../images/greatwall.jpg";
import gregMaria from "../images/gregNmaria.jpg";
import twodancers from "../images/twodancers.jpg";

import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const Homepage = () => {
  return (
    <div>
      <HeaderImage headerPic={mainImg} />
      <NavBar />
      <div className="home-content">
        <img src={premiereImg} />
        <div className="text-content">
          <h2>
            Rocky Mountain Express Cloggers is a fun, family studio based upon
            teaching the fundamentals of clogging. We strive to provide the
            ultimate in American dancing through enriching performances, healthy
            competition, exciting tours and lifelong friends!
          </h2>
          <Link to="/signup">SIGN UP</Link>
        </div>
      </div>
      <div className="img-carousel-home">
        <Carousel>
          <div>
            <img src={gregMaria} style={{ height: "314px", width: "228px" }} />
          </div>
          <div>
            <img src={greatwall} />
          </div>
          <div>
            <img src={twodancers} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default Homepage;
