import React, { Component } from 'react';

class Gif extends Component {
  sendGif = () => {
    this.props.changeGif(this.props.id)
  }
  render () {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e47427d454cf3c1c0eefd0588e78a225c96ed99a9a6&rid=giphy.gif`
    return (
      <div >
        <img src={src} className="gif" alt="" onClick={this.sendGif} />
      </div>
    )
  }
}

export default Gif

