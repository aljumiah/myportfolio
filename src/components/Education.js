import React, { Component } from "react";
import img_edu_1 from "../images/IMG_6743.JPG";
class Education extends Component {
  render() {
    return (
      <div>
        <section id="two" className="wrapper style1 special">
          <div className="inner">
            <h2>Education and Experience</h2>
          </div>
        </section>
        <section id="main" className="wrapper">
          <div className="inner">
            <br />
            <header className="header_edu align-left">
              <h1> Education</h1>
            </header>
            <div className="flex-item image right round">
              <img src={img_edu_1} height="300px" alt="" />
            </div>

            <h2>Bachelor Degree </h2>
            <h2> Majoring in Information Technology</h2>
            <h2> Rochester Institute of Technology</h2>
          </div>
        </section>
        <section id="main" className="wrapper">
          <div className="inner">
            <br />
            <header className="align-left">
              <h1> Experience</h1>
            </header>
            <div className="flex-item image right round" />

            <h2>Programmer for 1 year and 6 months</h2>
            <h2>Startup Company</h2>
            <h2> Riyadh</h2>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;
