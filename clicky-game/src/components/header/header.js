import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-dark bg-dark">
          <h1 className="header-title"> Butterfly Clicky Game </h1>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="">Score: {this.props.currentScore}</a>
            </li>
            <li>
              <a href="">Top Score: {this.props.highScore}</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
