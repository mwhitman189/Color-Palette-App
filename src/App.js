import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import seedColors from "./seedColors.js";
import { generatePalette } from "./colorHelpers";
import SingleHuePalette from "./components/SingleHuePalette";
import NewPaletteForm from "./components/NewPaletteForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Page from "./components/Page";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors
    };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  }

  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }

  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }

  deletePalette(id) {
    this.setState(
      {
        palettes: [...this.state.palettes.filter(palette => palette.id !== id)]
      },
      this.syncLocalStorage
    );
  }

  render() {
    const { palettes } = this.state;

    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={routeProps => (
                    <Page>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        paletteList={palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={routeProps => (
                    <Page>
                      <SingleHuePalette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                        colorId={routeProps.match.params.colorId}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <Page>
                      <PaletteList
                        palettes={palettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={routeProps => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  render={routeProps => (
                    <Page>
                      <PaletteList
                        palettes={palettes}
                        deletePalette={this.deletePalette}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
