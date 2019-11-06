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
      lightness: "400",
      is_loading: true,
    }
    this.changeLightness = this.changeLightness.bind(this)
  }

  changeLightness(level) {
    this.setState({ lightness: level })
  }

  render() {
    const { colors } = this.props.palette
    const { valueType, lightness } = this.state

    const colorBoxes = colors[ this.state.lightness ].map(color =>
      <ColorBox key={uuid()} background={color} valueType={valueType} />
    )

    return (
      <div className="Palette">
        <Navbar changeLightness={this.changeLightness} lightness={lightness} />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        <Footer />
      </div>
    )
  }
}
export default Palette