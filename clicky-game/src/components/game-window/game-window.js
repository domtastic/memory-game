import React, { Component } from "react";
import "./game-window.css";
import TilePic from "../Tile-Pic/Tile-Pic";
class GameWindow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="game-window justify-content-center">
        <div className="row">
          {this.props.tiles.map((tiles, index) => {
            return (
              <TilePic
                onClickPick={this.props.onClickPick}
                key={tiles.id}
                tiles={tiles}
                id={tiles.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default GameWindow;
