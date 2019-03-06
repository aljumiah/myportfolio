import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <nav className="left">
            <a href="#menu">
              <span>Menu</span>
            </a>
          </nav>
          <a href="index.html" className="logo">
            Aljumiah's Portfolio{" "}
          </a>
          <nav className="right">
            {/* <!-- <a href="#" className="button alt">Log in</a> --> */}
          </nav>
        </header>
        <nav id="menu">
          <ul className="links">
            <li>
              <a href="index.html">Home</a>
            </li>
          </ul>
          <ul className="actions vertical">
            <li>
              <button className="button fit">Login</button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
