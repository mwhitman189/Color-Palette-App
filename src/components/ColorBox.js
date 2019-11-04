import React, { Component } from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';


class ColorBox extends Component {

  render() {
    const { name, color } = this.props.background
    return (
      <CopyToClipboard text={color}>
        <div className="ColorBox" style={{ backgroundColor: color }}>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-btn">Copy</button>
            <span className="see-more">MORE</span>
          </div>
        </div>
      </CopyToClipboard>
    )
  }
}
export default ColorBox