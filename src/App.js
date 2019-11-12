import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './components/Palette'
import seedColors from './seedColors.js'
import './App.css'
import { generatePalette } from './colorHelpers'


class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>palettes</h1>} />
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
