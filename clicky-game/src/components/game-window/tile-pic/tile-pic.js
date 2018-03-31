import React, { Component } from "react";
import "./tile-pic.css";

class TilePic extends Component {
  constructor(props) {
    super(props);
    this.onClickPick = this.onClickPick.bind(this);
    this.state = { picks: 0 };
  }
  onClickPick() {
    const clicked = this.state.picks + 1;
    this.setState({ picks: clicked });
    alert("Picks: " + this.state.picks);
  }
  render() {
    const { id, url } = this.props.tiles;
    return (
      <div className="tile-card col-md-3" key={this.props.index} id={id}>
        <div className="card">
          <img
            onClick={this.onClickPick}
            className="card-img-top"
            src={url}
            alt="Card image cap"
          />
        </div>
      </div>
    );
  }
}

export default TilePic;
