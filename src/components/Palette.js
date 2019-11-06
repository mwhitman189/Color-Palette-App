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
      lightness: "500",
      is_loading: true,
    }
    this.changeLuminosity = this.changeLuminosity.bind(this)
  }

  changeLuminosity(level) {
    this.setState({ lightness: level })
  }

  render() {
    const { lightness, valueType } = this.state
    const { colors } = this.props.palette
    const colorBoxes = colors[ lightness ].map(color =>
      <ColorBox key={uuid()} background={color} valueType={valueType} />
    )

    return (
      <div className="Palette">
        <Navbar changeLuminosity={this.changeLuminosity} lightness={lightness} />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        <Footer />
      </div>
    )
  }
}
export default Palette