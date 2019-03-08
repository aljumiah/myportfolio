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
              <img src={img_Gen_1} style={{ width: 300, height: 300 }} alt="" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <ul>
              <p>I am 26 years old</p>
              <p>I am the oldest brother in my family</p>
              <p>I live in Al-Muzahimya with my familiy</p>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default GeneralInfo;
