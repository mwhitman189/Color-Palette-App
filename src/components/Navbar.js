import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Navbar.css'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: this.props.lightness,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(level) {
    this.props.changeLightness(level)
  }

  render() {
    const { lightness } = this.props
    const { level } = this.state

    return (
      <header className="Navbar">
        <div className="logo">
          {/* eslint-disable-next-line */}
          <a href="#">
            <span className="title">Palette Maker</span>
            <span className="sub-title">3000</span>
          </a>
        </div>
        <div className="lightness-container">
          <label htmlFor="lumi-slider">Lightness: {lightness}</label>
          <div className="slider">
            <Slider
              onChange={this.handleChange}
              value={lightness}
              min={100}
              max={900}
              step={100}
              defaultValue={level}
            />
          </div>
        </div>
      </header>
    )
  }
}
export default Navbar