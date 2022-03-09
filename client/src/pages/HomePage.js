import React from "react";

import Carousel from "../components/Carousel";

function HomePage(props) {
  console.log(props.login);
  return (
    <div className="container" id="homePage">
      <h1 className="homePage">Welcome to Freegan</h1>
      <Carousel />
    </div>
  );
}

export default HomePage;
