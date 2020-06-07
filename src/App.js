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
  render () {

    return (
      <div className="App">
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    )
  }
}

export default App;
