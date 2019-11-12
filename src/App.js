import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './components/Palette'
import PaletteList from './components/PaletteList'
import seedColors from './seedColors.js'
import './App.css'
import { generatePalette } from './colorHelpers'
import SingleHuePalette from './components/SingleHuePalette'


class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id
    })
  }

  render() {
    return (
      <Switch className="App">
        <Route
          exact
          path="/"
          render={routeProps =>
            <PaletteList palettes={seedColors} {...routeProps} />
          }
        />
        <Route exact path="/palette/:id"
          render={routeProps => (
            <Palette palette={generatePalette(
              this.findPalette(routeProps.match.params.id)
            )}
            />
          )}
        />
        <Route
          exact
          to="/palette/:paletteId/:colorId"
          render={() => <SingleHuePalette />}
        />
      </Switch>
    )
  }
}

export default App
