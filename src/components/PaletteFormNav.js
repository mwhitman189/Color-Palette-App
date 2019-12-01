import React, { Component } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import { Button } from "@material-ui/core";
import styles from "../styles/PaletteFormNavStyles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: "",
      formShowing: false
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({ formShowing: true });
  }

  hideForm() {
    this.setState({ formShowing: false });
  }

  render() {
    const {
      classes,
      open,
      handleSubmit,
      handleDrawerOpen,
      paletteList
    } = this.props;
    const { newPaletteName } = this.state;

    return (
      <div>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar className={classes.Toolbar}>
            <div className={classes.menuButtons}>
              {!open && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={clsx(classes.menuButton, open && classes.hide)}
                >
                  <ChevronRightIcon />
                </IconButton>
              )}
              <Typography variant="h6" noWrap>
                Create New Palette
              </Typography>
            </div>
            <div className={classes.menuButtons}>
              <Button
                variant="contained"
                color="default"
                className={classes.menuButton}
              >
                Go Back
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.showForm}
              >
                Save Palette
              </Button>
              {this.state.formShowing && (
                <PaletteMetaForm
                  handleSubmit={handleSubmit}
                  paletteName={newPaletteName}
                  paletteList={paletteList}
                  hideForm={this.hideForm}
                />
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);
