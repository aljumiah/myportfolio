import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <h2>Get In Touch</h2>
          <ul className="actions">
            <li>
              <span className="icon fa-phone" /> <p>(053) 309-8660</p>
            </li>
            <li>
              <span className="icon fa-envelope" /> <p>Aljumiah@uoutlook.com</p>
            </li>
          </ul>
        </div>
        <div className="copyright">
          &copy; Untitled. Design <a href="https://templated.co">TEMPLATED</a>.
          Images <a href="https://unsplash.com">Unsplash</a>.
        </div>
      </footer>
    );
  }
}

export default Footer;
