import React, { Component } from "react";
import img_Gen_1 from "../images/IMG_0298.JPG";

class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <section id="two" className="wrapper style1 special">
          <div className="inner">
            <h2>General Information</h2>
          </div>
        </section>
        <section id="main" className="wrapper">
          <div className="inner">
            <div className="flex-item image left round">
              <img
                className="width_hight_2 "
                src={img_Gen_1}
                height="300px"
                alt=""
              />
            </div>
            <br />
            <br />
            <br />
            <br />
            <ul>
              <li>I am 26 years old</li>
              <li>I am the oldest brother in my family</li>
              <li>I live in Al-Muzahimya with my familiy</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default GeneralInfo;
