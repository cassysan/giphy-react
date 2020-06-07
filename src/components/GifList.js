import React, { Component } from 'react';
import Gif from './Gif';

class GifList extends Component {

  render () {
    const changeGif = this.props.changeGif;
    return (
      <div className="gif-list">
        {
          this.props.gifs.map(gif => {
          return <Gif id={gif.id} key={gif.id} changeGif={changeGif} />
        })}
      </div>
    )
  }
}

export default GifList

