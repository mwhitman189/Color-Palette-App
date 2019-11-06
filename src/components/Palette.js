import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import Footer from './Footer'
import uuid from 'uuid/v4'
import './Palette.css'


class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueType: "hex",
      luminosity: "400",
      is_loading: true,
    }
    this.changeLuminosity = this.changeLuminosity.bind(this)
  }

  changeLuminosity(level) {
    this.setState({ luminosity: level })
  }

  render() {
    const colorBoxes = this.props.palette.colors[ this.state.luminosity ].map(color =>
      <ColorBox key={uuid()} background={color} valueType={this.state.valueType} />
    )

    return (
      <div className="Palette">
        <Navbar changeLuminosity={this.changeLuminosity} luminosity={this.state.luminosity} />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        <Footer />
      </div>
    )
  }
}
export default Palette