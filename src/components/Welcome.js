import React, { Component } from "react";
import img_welc_1 from "../images/IMG_4505.JPG";
import img_welc_2 from "../images/IMG_5326.JPG";

class Welcome extends Component {
  render() {
    return (
      <div>
        <section id="banner">
          <div className="image round">
            <img src={img_welc_1} height="300px" alt="" />
          </div>
          <div className="content">
            <h1>Mohammed Aljumiah</h1>
            <p>
              Welcome to my Portfolio <br />
              Hope you Ejoy!.
            </p>
            <ul className="actions">
              <li>
                <a href="#one" className="button scrolly">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="one" className="wrapper">
          <div className="inner flex flex-3">
            <div className="flex-item left">
              <div>
                <h3>General Information</h3>
                <p>more about my family and myself</p>
              </div>
              <div>
                <h3>Education and Experience</h3>
                <p>more about what I have learnd and what I have done</p>
              </div>
            </div>
            <div className=" flex-item image fit round">
              <img
                src={img_welc_2}
                alt=""
                style={{ width: 300, height: 300 }}
                className="width_hight"
              />
            </div>
            <div className="flex-item right">
              <div>
                <h3>Hobbies</h3>
                <p>More about What I like to do in my free time</p>
              </div>
              <div>
                <h3>What I Like </h3>
                <p>more about things that I love and that grab my attention</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Welcome;
