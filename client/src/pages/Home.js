import React, { Component } from "react";
import Plans from "../components/Home/plans";
import Carousel from "../components/Carousel/Carousel";

class Home extends Component {
  render() {
    return (
      <div className="Home" style={{ paddingTop: "9%" }}>
        <div className="carousel-container">
          <Carousel />
        </div>
        <Plans />
      </div>
    );
  }
}

export default Home;
