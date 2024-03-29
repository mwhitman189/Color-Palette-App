import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button } from "@material-ui/core";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "../styles/PaletteFormNavStyles";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: "",
      formShowing: false
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  showForm() {
    this.setState({ formShowing: true });
  }

  hideForm() {
    this.setState({ formShowing: false });
  }

  goBack() {
    this.props.history.goBack();
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
              <Typography className={classes.title} variant="h6" noWrap>
                Create New Palette
              </Typography>
            </div>
            <div className={classes.menuButtons}>
              <Button
                variant="contained"
                color="default"
                className={classes.menuButton}
                onClick={this.goBack}
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
export default withRouter(
  withStyles(styles, { withTheme: true })(PaletteFormNav)
);
