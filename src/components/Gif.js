import React, { Component } from 'react';

class Gif extends Component {

  handleUpdate = (e) => {
    console.log(e.target.value)
  }
  render () {
    return (
      <div>
        <img src="https://giphy.com/gifs/dojacat-doja-cat-Rh5k1GXp0vp224lWQ9" alt="" className="gif"/>
      </div>
    )
  }
}

export default Gif

