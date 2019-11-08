import React, { Component } from 'react'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import 'rc-slider/assets/index.css'
import './Navbar.css'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: this.props.level,
      format: "hex",
    }
    this.handleFormat = this.handleFormat.bind(this)
  }

  handleFormat(evt) {
    this.setState({ format: evt.target.value })
    this.props.changeFormat(evt.target.value)
  }

  render() {
    const { level, changeLevel } = this.props
    const { format } = this.state

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
          <label htmlFor="lumi-slider">Level: {level}</label>
          <div className="slider">
            <Slider
              onChange={changeLevel}
              value={level}
              min={100}
              max={900}
              step={100}
              defaultValue={level}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleFormat}>
            <MenuItem value="hex">HEX -- #000</MenuItem>
            <MenuItem value="rgb">RGB -- (0,0,0)</MenuItem>
            <MenuItem value="rgba">RGBA -- (0,0,0, 0.5)</MenuItem>
          </Select>
        </div>
      </header>
    )
  }
}
export default Navbar