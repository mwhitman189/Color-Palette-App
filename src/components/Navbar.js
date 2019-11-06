import React, { Component } from 'react'
import './Navbar.css'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'


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
      <div className="Navbar">
        <div className="lightness-container">
          <label htmlFor="lumi-slider">Lightness</label>
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
    )
  }
}
export default Navbar