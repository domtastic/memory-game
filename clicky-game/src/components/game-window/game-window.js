import React, { Component } from "react";
import "./game-window.css";
import TilePic from "./tile-pic/tile-pic";
class GameWindow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="game-window row">
        {this.props.tiles.map((tiles, index) => {
          return <TilePic tiles={tiles} index={index} />;
        })}
      </div>
    );
  }
}

export default GameWindow;
