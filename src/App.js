import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers";
import SingleHuePalette from "./components/SingleHuePalette";
import NewPaletteForm from "./components/NewPaletteForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors
    };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
    console.log(this.state.palettes);
  }

  render() {
    return (
      <Switch className="App">
        <Route
          exact
          path="/palette/new"
          render={routeProps => (
            <NewPaletteForm savePalette={this.savePalette} {...routeProps} />
          )}
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
          render={routeProps => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
