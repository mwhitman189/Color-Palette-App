import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import './PaletteList.css'


class PaletteList extends Component {
  render() {
    const { palettes } = this.props
    return (
      <div className="PaletteList">
        {palettes.map(palette =>
          <div className="palette-container">
            <MiniPalette palette={palette} />
          </div>
        )}
      </div>
    )
  }
}
export default PaletteList