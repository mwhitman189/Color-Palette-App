import React, { Component } from 'react'
import './ColorBox.css'


class ColorBox extends Component {
  render() {
    const color = this.props.background
    return (
      <div className="ColorBox" style={{ backgroundColor: color.color }}>
        <span>{color.name} </span>
        <span>MORE</span>
      </div>
    )
  }
}
export default ColorBox