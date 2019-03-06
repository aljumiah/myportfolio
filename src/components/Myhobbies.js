import React, { Component } from "react";
import img_hob_1 from "../images/IMG_0480.jpg";
import img_hob_2 from "../images/FullSizeRender3.jpg";
import img_hob_3 from "../images/phothoshop.png";

class Myhobbies extends Component {
  render() {
    return (
      <div>
        <section id="two" className="wrapper style1 special">
          <div className="inner">
            <h2>Hobbies</h2>
          </div>
        </section>
        <section id="one" className="wrapper">
          <div className="inner flex flex-3">
            <div className="flex-item image left ">
              <img src={img_hob_1} height="300px" alt="" />
            </div>
            <div className="flex-item image fit round">
              <h1>Sketching</h1>
            </div>

            <div className="flex-item image left " />
          </div>
        </section>
        <section id="one" className="wrapper">
          <div className="inner flex flex-3">
            <div className="flex-item image left ">
              <img src={img_hob_2} height="300px" alt="" />
            </div>
            <div className="flex-item image fit round">
              <h1>Photography</h1>
            </div>

            <div className="flex-item image left " />
          </div>
        </section>
        <section id="one" className="wrapper">
          <div className="inner flex flex-3">
            <div className="flex-item image left ">
              <img src={img_hob_3} height="300px" alt="" />
            </div>
            <div className="flex-item image fit round">
              <h1>Designing in Adobe Photoshop</h1>
            </div>

            <div className="flex-item image left " />
          </div>
        </section>
      </div>
    );
  }
}

export default Myhobbies;
