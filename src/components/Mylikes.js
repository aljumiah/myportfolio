import React, { Component } from "react";
import img_1 from "../images/IMG_4993.PNG";
import img_2 from "../images/bars.png";
import img_3 from "../images/mohammedabdu.jpeg";
import img_4 from "../images/gameofthrons.jpg";
import img_5 from "../images/turckish.jpg";

class Mylikes extends Component {
  render() {
    return (
      <div>
        <section id="two" className="wrapper style1 special">
          <div className="inner">
            <h2>What I like</h2>
          </div>
        </section>

        <section id="one" className="wrapper">
          <div className="inner flex flex-3">
            <div className="flex-item image left round">
              <img src={img_1} height="300px" alt="" />
            </div>
            <div className="flex-item image fit round" />
            <div className="flex-item image left round">
              <img src={img_2} height="300px" alt="" />
            </div>
          </div>
        </section>
        <section id="one" className="wrapper">
          <div className="inner flex flex-3">
            <div className="flex-item image left round">
              <img src={img_3} height="300px" alt="" />
            </div>
            <div className="flex-item image fit round" />
            <div className="flex-item image left round">
              <img src={img_5} height="300px" alt="" />
            </div>
          </div>
        </section>
        <section id="one" className="wrapper">
          <div className="inner flex flex-3">
            <div className="flex-item image left round" />
            <div className="flex-item image fit round">
              <img src={img_4} height="300px" alt="" />
            </div>
            <div className="flex-item image left round" />
          </div>
        </section>
      </div>
    );
  }
}

export default Mylikes;
