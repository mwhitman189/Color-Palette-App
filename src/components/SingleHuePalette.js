import React, { Component } from 'react'
import Navbar from './Navbar'
import ColorBox from './ColorBox'
import Footer from './Footer'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteStyles'


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
    const { classes, palette } = this.props
    const shadeBoxes = this._shades.map(shade =>
      <ColorBox
        key={shade.name}
        id={palette.id}
        name={shade.name}
        background={shade[ format ]}
        showLink={false}
        is_singleHue
      />
    )

    return (
      <div className={classes.Palette}>
        <Navbar
          changeLevel={false}
          changeFormat={this.changeFormat}
        />
        <div className={classes.colors}>
          {shadeBoxes}
          <ColorBox
            background="#000"
            id={palette.id}
            is_backBtn
            is_singleHue
          >
          </ColorBox>
        </div>
        <Footer paletteName={this.props.colorId} />
      </div>
    )
  }
}
export default withStyles(styles)(SingleHuePalette)