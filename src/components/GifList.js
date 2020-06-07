import React, { Component } from 'react';
import Gif from './Gif';

class GifList extends Component {

  handleUpdate = (e) => {
    console.log(e.target.value)
  }
  render () {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => {
          return <Gif id={gif.id} />
        })}
      </div>
    )
  }
}

export default GifList

