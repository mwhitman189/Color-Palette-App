import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './components/Palette'
import seedColors from './seedColors.js'
import './App.css'
import { generatePalette } from './colorHelpers'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>palettes</h1>} />
        <Route exact path="/palette/:id" render={() => <h1>certain palette</h1>} />
      </Switch>
      // <div className="App">
      //   <Palette palette={generatePalette(seedColors[ 5 ])} />
      // </div>
    )
  }
}

export default App
