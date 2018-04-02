import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import GameWindow from "./components/Game-Window/Game-Window";
import Footer from "./components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScore: 0,
      highScore: 0,
      tiles: [
        {
          id: 1,
          url:
            "http://otagomuseum.nz/assets/imagegallery/372/images/cblue-morpho.jpg",
          clicked: false
        },
        {
          id: 2,
          url:
            "http://www.megapixeltravel.com/wp-content/uploads/2012/08/EMG8249-Black-Swallowtail-.jpg",
          clicked: false
        },
        {
          id: 3,
          url:
            "http://www.obsessionwithbutterflies.com/img/butterfly-houses/red-helicon.jpg",
          clicked: false
        },
        {
          id: 4,
          url:
            "https://puxccbo05z-flywheel.netdna-ssl.com/wp-content/uploads/2015/02/butterfly8-1.jpg",
          clicked: false
        },
        {
          id: 5,
          url:
            "http://phenomena.nationalgeographic.com/files/2016/03/zebra-longwing-587787_1920.jpg",
          clicked: false
        },
        {
          id: 6,
          url:
            "https://butterfliesofcapecod.files.wordpress.com/2016/03/question-mark-adult.jpg?w=660",
          clicked: false
        },
        {
          id: 7,
          url:
            "http://images2.fanpop.com/image/photos/9200000/Rainbow-Butterfly-butterflies-9284251-500-500.jpg",
          clicked: false
        },
        {
          id: 8,
          url:
            "https://hypescience.com/wp-content/uploads/2015/07/borboleta-imperador-roxo-1.jpg",
          clicked: false
        },
        {
          id: 9,
          url:
            "https://www.denverpost.com/wp-content/uploads/2017/05/denver-botanic-butterflies-05252017-ac_ac20948x.jpg?w=620",
          clicked: false
        },
        {
          id: 10,
          url:
            "http://www.thetatrend.com/wp-content/uploads/2014/07/Butterfly.jpg",
          clicked: false
        },
        {
          id: 11,
          url: "https://i.ytimg.com/vi/xT6UsQwZyy0/maxresdefault.jpg",
          clicked: false
        },
        {
          id: 12,
          url:
            "https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA3OC80NTYvb3JpZ2luYWwvbW9uYXJjaC1idXR0ZXJmbHkuanBlZw==",
          clicked: false
        }
      ]
    };
  }

  onClickPick = event => {
    //user clickes on an img
    //get the image and all its data
    console.log(event.target.id);
    var imgId = event.target.id;

    //we need to update clicked to true

    var notClickedYet = false;

    var newData = this.state.tiles.map(tile => {
      if (tile.id == imgId) {
        console.log(tile);
        if (!tile.clicked) {
          tile.clicked = true;
          notClickedYet = true;
        } else {
          console.log("reset clicked value...");
          this.state.tiles.map(tile => {
            tile.clicked = false;
          });
        }
      }
      return tile;
    });
    console.log(newData);
    console.log(notClickedYet);
    notClickedYet ? this.handleTrue(newData) : this.handleFalse(newData);

    //the array shuffles

    // const clicked = this.state.picks + 1;
    // this.setState({ picks: clicked });
    // alert("Picks: " + this.state.picks);
  };

  handleTrue = newData => {
    const { highScore, currentScore } = this.state;
    const newScore = currentScore + 1;
    const newHighScore = newScore > highScore ? newScore : highScore;
    this.setState({
      tiles: this.shuffleArray(newData),
      currentScore: newScore,
      highScore: newHighScore
    });
  };
  handleFalse = newData => {
    const { highScore, currentScore } = this.state;
    const newScore = 0;
    this.setState({
      tiles: this.shuffleArray(newData),
      currentScore: newScore
    });
  };

  shuffleArray = array => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let randomIndex = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[randomIndex];
      array[randomIndex] = temp;
    }

    return array;
  };
  //add the score
  //add to highscore

  render() {
    return (
      <div className="App">
        <p>this is the App</p>
        <Header
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <GameWindow onClickPick={this.onClickPick} tiles={this.state.tiles} />
        <Footer />
      </div>
    );
  }
}

export default App;
