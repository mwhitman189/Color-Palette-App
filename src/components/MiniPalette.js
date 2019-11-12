import React, { Component } from 'react'
import MiniColorBox from './MiniColorBox'
import './MiniPalette.css'


class MiniPalette extends Component {
  render() {
    const { palette } = this.props
    return (
      <div className="MiniPalette">
        {palette.map(color => <MiniColorBox color={color.color} />)}
      </div>
    )
  }
}
export default MiniPalette