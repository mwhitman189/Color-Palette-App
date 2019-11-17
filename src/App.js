import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './components/Palette'
import PaletteList from './components/PaletteList'
import seedColors from './seedColors.js'
import { generatePalette } from './colorHelpers'
import SingleHuePalette from './components/SingleHuePalette'
import NewPaletteForm from './components/NewPaletteForm'
import './App.css'


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
          path="/palette/new"
          render={() => <NewPaletteForm />}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleHuePalette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />
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
      </Switch>
    )
  }
}

export default App
