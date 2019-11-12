import React, { Component } from 'react'
import MiniColorBox from './MiniColorBox'
import { Link } from 'react-router-dom'
import './MiniPalette.css'


class MiniPalette extends Component {
  render() {
    const { palette } = this.props
    return (
      <Link className="MiniPalette" to={`/palette/${palette.id}`}>
        {palette.colors.map(color => <MiniColorBox color={color.color} />)}
        <p className="name">{palette.paletteName}</p>
      </Link>
    )
  }
}
export default MiniPalette