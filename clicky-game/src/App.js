import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header";
import GameWindow from "./components/game-window/game-window";
import Footer from "./components/footer/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [
        {
          id: 1,
          url:
            "http://otagomuseum.nz/assets/imagegallery/372/images/cblue-morpho.jpg"
        },
        {
          id: 2,
          url:
            "http://www.megapixeltravel.com/wp-content/uploads/2012/08/EMG8249-Black-Swallowtail-.jpg"
        },
        {
          id: 3,
          url:
            "http://www.obsessionwithbutterflies.com/img/butterfly-houses/red-helicon.jpg"
        },
        {
          id: 4,
          url:
            "https://puxccbo05z-flywheel.netdna-ssl.com/wp-content/uploads/2015/02/butterfly8-1.jpg"
        },
        {
          id: 5,
          url:
            "http://phenomena.nationalgeographic.com/files/2016/03/zebra-longwing-587787_1920.jpg"
        },
        {
          id: 6,
          url:
            "https://butterfliesofcapecod.files.wordpress.com/2016/03/question-mark-adult.jpg?w=660"
        },
        {
          id: 7,
          url:
            "http://images2.fanpop.com/image/photos/9200000/Rainbow-Butterfly-butterflies-9284251-500-500.jpg"
        },
        {
          id: 8,
          url:
            "https://hypescience.com/wp-content/uploads/2015/07/borboleta-imperador-roxo-1.jpg"
        },
        {
          id: 9,
          url:
            "https://www.denverpost.com/wp-content/uploads/2017/05/denver-botanic-butterflies-05252017-ac_ac20948x.jpg?w=620"
        },
        {
          id: 10,
          url:
            "http://www.thetatrend.com/wp-content/uploads/2014/07/Butterfly.jpg"
        },
        {
          id: 11,
          url: "https://i.ytimg.com/vi/xT6UsQwZyy0/maxresdefault.jpg"
        },
        {
          id: 12,
          url:
            "https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA3OC80NTYvb3JpZ2luYWwvbW9uYXJjaC1idXR0ZXJmbHkuanBlZw=="
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <p>this is the App</p>
        <Header />
        <GameWindow tiles={this.state.tiles} />
        <Footer />
      </div>
    );
  }
}

export default App;
