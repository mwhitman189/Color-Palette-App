import React, { Component } from 'react'
import Palette from './components/Palette'
import seedColors from './seedColors.js'
import './App.css'
import { generatePalette } from './colorHelpers'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[ 5 ])} />
      </div>
    )
  }
}

export default App
