import React, { Component } from 'react'
import './Navbar.css'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    this.props.changeLuminosity(evt.target.value)
  }

  render() {
    return (
      <div className="Navbar">
        <label htmlFor="lumi-slider">Luminosity</label>
        <input id="lumi-slider"
          type="range"
          min="100"
          max="900"
          step="100"
          name="luminosity"
          value={this.props.luminosity}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
export default Navbar