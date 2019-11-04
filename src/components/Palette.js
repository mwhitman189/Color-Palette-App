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
      is_loading: true,
    }
  }

  render() {
    const colorBoxes = this.props.colors.map(color =>
      <ColorBox key={uuid()} background={color} />
    )

    return (
      <div className="Palette">
        <Navbar />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        <Footer />
      </div>
    )
  }
}
export default Palette