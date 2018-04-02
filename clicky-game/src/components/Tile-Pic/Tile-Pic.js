import React, { Component } from "react";
import "./tile-pic.css";

class TilePic extends Component {
  constructor(props) {
    super(props);
    this.state = { picks: 0 };
  }
  render() {
    const { id, url } = this.props.tiles;
    return (
      <div className="tile-card col-md-3" key={this.props.index} id={id}>
        <div className="card">
          <img
            onClick={this.props.onClickPick}
            className="card-img-top"
            id={id}
            src={url}
            alt="Card image cap"
          />
        </div>
      </div>
    );
  }
}

export default TilePic;
