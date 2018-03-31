import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>this is the Header</p>
        <h1> Clicky Game </h1>
        <p>
          Score: <span>number</span>
        </p>
        <p>
          Top Score: <span>number</span>
        </p>
      </div>
    );
  }
}

export default Header;
