import React, { Component } from 'react'
import './ColorBox.css'


class ColorBox extends Component {
  render() {
    const { name, color } = this.props.background
    return (
      <div className="ColorBox" style={{ backgroundColor: color }}>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-btn">Copy</button>
          <span className="see-more">MORE</span>
        </div>
      </div>
    )
  }
}
export default ColorBox