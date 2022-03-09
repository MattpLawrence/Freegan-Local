import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import thumb1 from "./assets/images/thumb-19.jpg";
import thumb2 from "./assets/images/thumb-20.jpg";
import thumb3 from "./assets/images/thumb-21.jpg";
import thumb4 from "./assets/images/thumb-22.jpg";
import thumb5 from "./assets/images/thumb-25.jpg";
import thumb6 from "./assets/images/thumb-24.jpg";

class Carousel extends Component {
  componentDidMount() {
    const options = {
      duration: 300,
      onCycleTo: () => {},
    };
    M.Carousel.init(this.Carousel, options);

    //Instance Plugin
    // let instance = M.Carousel.getInstance(this.Carousel);
    // instance.next(2);
  }

  render() {
    return (
      <div
        ref={(Carousel) => {
          this.Carousel = Carousel;
        }}
        className="carousel "
      >
        <div className="carousel-item red white-text" href="#one!">
          <h5>Item</h5>
          <img src={thumb1} />
          <p className="white-text">
            Bacon ipsum dolor amet tempor fugiat hamburger in, alcatra
            adipisicing salami nostrud fatback reprehenderit ground round short
            loin. Venison fugiat picanha minim, turkey pariatur kevin. Corned
            beef prosciutto boudin, ribeye ut t-bone tenderloin burgdoggen
            chicken deserunt.
          </p>
        </div>
        <div className="carousel-item amber white-text" href="#two!">
          <h5>Item</h5>
          <img src={thumb2} />
          <p className="white-text">
            Veniam reprehenderit jerky sunt pork chop tenderloin biltong, in sed
            magna picanha. Capicola occaecat in, ipsum corned beef jerky irure
            kevin. Picanha sint fugiat, beef ribs pig ball tip jerky aliqua.
          </p>
        </div>
        <div className="carousel-item green white-text" href="#three!">
          <h5>Item</h5>
          <img src={thumb3} />
          <p className="white-text">
            Bacon ipsum dolor amet tempor fugiat hamburger in, alcatra
            adipisicing salami nostrud fatback reprehenderit ground round short
            loin. Venison fugiat picanha minim, turkey pariatur kevin. Corned
            beef prosciutto boudin, ribeye ut t-bone tenderloin burgdoggen
            chicken deserunt.
          </p>
        </div>
        <div className="carousel-item blue white-text" href="#four!">
          <h5>Item</h5>
          <img src={thumb4} />
          <p className="white-text">
            Veniam reprehenderit jerky sunt pork chop tenderloin biltong, in sed
            magna picanha. Capicola occaecat in, ipsum corned beef jerky irure
            kevin. Picanha sint fugiat, beef ribs pig ball tip jerky aliqua.
          </p>
        </div>
        <div className="carousel-item red white-text" href="#four!">
          <h5>Item</h5>
          <img src={thumb5} />
          <p className="white-text">
            Bacon ipsum dolor amet tempor fugiat hamburger in, alcatra
            adipisicing salami nostrud fatback reprehenderit ground round short
            loin. Venison fugiat picanha minim, turkey pariatur kevin. Corned
            beef prosciutto boudin, ribeye ut t-bone tenderloin burgdoggen
            chicken deserunt.
          </p>
        </div>
        <div className="carousel-item blue white-text" href="#four!">
          <h5>Item</h5>
          <img src={thumb6} />
          <p className="white-text">
            Veniam reprehenderit jerky sunt pork chop tenderloin biltong, in sed
            magna picanha. Capicola occaecat in, ipsum corned beef jerky irure
            kevin. Picanha sint fugiat, beef ribs pig ball tip jerky aliqua.
          </p>
        </div>
      </div>
    );
  }
}

export default Carousel;
