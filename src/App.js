import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './components/SearchBar';
import Gif from './components/Gif';
import GifList from './components/GifList';

import './App.scss';
const GIPHY_API = 'UdtFIrI26joerk24Mmh0JJRixuzM3vMv'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'H1N2Zryv3gxa6lQG87'
    }
  }

  //Use searchbar to search for Gif
  search = (query) => {
    giphy(GIPHY_API).search({
    q: query,
    rating: 'g'
}, (err, res) => {
    this.setState({ gifs: res.data})
    // Res contains gif data!
});
  }

  changeGif = (id) => {
    this.setState({
      selectedGifId: id
    })
    }

  render () {

    return (
      <div className="App">
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
          <div className="instructions">
            <h3>Welcome to Gif Selector. </h3>
            <p>Type Something in to Select a deired Gif.</p>
            <p>Click on desired gif to display in Main section.</p>
          </div>
        </div>

        <div className="right-scene">
          <GifList gifs={this.state.gifs} changeGif={this.changeGif.bind(this)}/>
        </div>
      </div>
    )
  }
}


export default App;


