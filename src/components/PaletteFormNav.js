import React, { Component } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import appVariables from "../appVariables.js";
import PaletteMetaForm from "./PaletteMetaForm";

const drawerWidth = appVariables.drawerWidth;

const styles = theme => ({
  Toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
});

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: ""
    };
  }

  render() {
    const { classes, open, handleSavePalette, handleDrawerOpen } = this.props;
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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Create New Palette
            </Typography>
            <PaletteMetaForm
              savePalette={handleSavePalette}
              paletteName={newPaletteName}
              paletteList={this.props.paletteList}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);
