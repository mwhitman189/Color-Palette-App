import React, { Component } from 'react'
import './Navbar.css'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: this.props.luminosity,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(level) {
    this.props.changeLuminosity(level)
  }

  render() {
    return (
      <div className="Navbar">
        <div className="luminosity-container">
          <label htmlFor="lumi-slider">Luminosity</label>
          <Slider
            onChange={this.handleChange}
            // onAfterChange={this.handleChange}
            value={this.props.luminosity}
            min={100}
            max={900}
            step={100}
            defaultValue={this.state.level}
          />
        </div>
      </div>
    )
  }
}
export default Navbar