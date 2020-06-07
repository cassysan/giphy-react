import React, { Component } from 'react';

class Gif extends Component {

  handleUpdate = (e) => {
    console.log(e.target.value)
  }
  render () {
    return (
      <div>
        <img src="https://media2.giphy.com/media/H1N2Zryv3gxa6lQG87/giphy.gif?cid=ecf05e47e2bc31e51e72f4979741d48cf729313a677176db&rid=giphy.gif" className="gif"/>
      </div>
    )
  }
}

export default Gif

