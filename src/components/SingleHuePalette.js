import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'


class SingleHuePalette extends Component {
  constructor(props) {
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    this.state = {
      format: "hex",
    }
    this.changeFormat = this.changeFormat.bind(this)
  }

  changeFormat(val) {
    this.setState({ format: val })
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = []
    let allColors = palette.colors
    for (let key in allColors) {
      shades = shades.concat(
        allColors[ key ].filter(color => color.id === colorToFilterBy)
      )
    }
    return shades.slice(1)
  }

  render() {
    const { format } = this.state
    const { id } = this.props.palette
    const shadeBoxes = this._shades.map(shade =>
      <ColorBox
        key={shade.name}
        name={shade.name}
        background={shade[ format ]}
        showLink={false}
      />
    )

    return (
      <div className="SingleColorPalette Palette">
        <Navbar
          changeLevel={false}
          changeFormat={this.changeFormat}
        />
        <div className="Palette-colors">
          {shadeBoxes}
          <div className="ColorBox go-back">
            <Link to={`/palette/${id}`} className="back-btn">
              Go Back
            </Link>
          </div>
        </div>
        <Footer paletteName={this.props.colorId} />
      </div>
    )
  }
}
export default SingleHuePalette