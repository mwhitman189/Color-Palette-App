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
      format: "hex",
      level: 500,
      is_loading: true,
    }
    this.changeFormat = this.changeFormat.bind(this)
    this.changeLevel = this.changeLevel.bind(this)
  }

  changeLevel(level) {
    this.setState({ level })
  }

  changeFormat(val) {
    this.setState({ format: val })
  }

  render() {
    const { colors, id } = this.props.palette
    const { format, level } = this.state
    console.log(id)

    const colorBoxes = colors[ level ].map(color =>
      <ColorBox
        key={uuid()}
        background={color[ format ]}
        name={color.name}
        id={color.id}
        paletteId={id}
      />
    )

    return (
      <div className="Palette">
        <Navbar
          changeLevel={this.changeLevel}
          level={level}
          changeFormat={this.changeFormat}
        />
        <div className="Palette-colors">
          {colorBoxes}
        </div>
        <Footer />
      </div>
    )
  }
}
export default Palette