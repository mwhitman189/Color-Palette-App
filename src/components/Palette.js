import React, { Component } from 'react'
import ColorBox from './ColorBox'


class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      is_loading: true,
    }
  }

  render() {
    return (
      <div className="Pallette">
        {/* Navbar goes here */}
        <div className="Palette-colors">
          {/* Collection of color boxes goes here */}
        </div>
        {/* Footer goes here */}
      </div>
    )
  }
}
export default Palette