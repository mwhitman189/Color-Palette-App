import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import chroma from "chroma-js";
import DraggableColorBox from "./DraggableColorBox";
import uuid from "uuid/v4";

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
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
  Toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    height: "calc(100vh - 64px)"
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  colorBtn: {
    color: props => (chroma("#fff").luminance() > 0.3 ? "#353b48" : "#fff")
  }
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [state, setState] = useState({
    open: false,
    currentColor: "yellow",
    colors: [],
    newColorName: "",
    newPaletteName: ""
  });

  useEffect(() => {
    // Check whether the current value is already in the colors list.
    ValidatorForm.addValidationRule("isUniqueColorName", value => {
      return state.colors.every(
        ({ name }) => value.toLowerCase() !== name.toLowerCase()
      );
    });

    // Check whether the current value is already in the palettes list
    ValidatorForm.addValidationRule("isUniquePaletteName", value => {
      return props.paletteList.every(
        ({ paletteName }) => value.toLowerCase() !== paletteName.toLowerCase()
      );
    });
  });

  const handleDrawerOpen = () => {
    setState({ ...state, open: true });
  };

  const handleDrawerClose = () => {
    setState({ ...state, open: false });
  };

  const updateCurrentColor = newColor => {
    setState({ ...state, currentColor: newColor.hex });
  };

  const addColor = () => {
    const newColor = { color: state.currentColor, name: state.newColorName };
    setState({
      ...state,
      colors: [...state.colors, newColor],
      newColorName: ""
    });
  };

  const handleChange = evt => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    });
  };

  const handleSavePalette = () => {
    const newPalette = {
      paletteName: state.newPaletteName,
      id: state.newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: state.colors
    };
    props.savePalette(newPalette);
    props.history.push("/");
  };

  const removeColor = colorName => {
    setState({
      ...state,
      colors: state.colors.filter(color => color.name !== colorName)
    });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: state.open
        })}
      >
        <Toolbar className={classes.Toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, state.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create New Palette
          </Typography>
          <ValidatorForm onSubmit={handleSavePalette}>
            <TextValidator
              label="Palette Name"
              value={state.newPaletteName}
              name="newPaletteName"
              onChange={handleChange}
              validators={["required", "isUniquePaletteName"]}
              errorMessages={[
                "Please enter a palette name",
                "That name is already taken"
              ]}
            />
            <Button
              className={classes.saveBtn}
              variant="contained"
              style={{ backgroundColor: "#C880ED" }}
              type="submit"
            >
              Save Palette
            </Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={state.open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design a palette</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={state.currentColor}
          onChangeComplete={updateCurrentColor}
        />
        <ValidatorForm onSubmit={addColor}>
          <TextValidator
            value={state.newColorName}
            name="newColorName"
            onChange={handleChange}
            validators={["isUniqueColorName"]}
            errorMessages={["That name is already taken. Sorry!"]}
          />
          <Button
            className={classes.colorBtn}
            variant="contained"
            style={{ backgroundColor: state.currentColor }}
            type="submit"
          >
            Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: state.open
        })}
      >
        <div className={classes.drawerHeader} />
        {state.colors &&
          state.colors.map(color => (
            <DraggableColorBox
              key={uuid()}
              handleClick={() => removeColor(color.name)}
              color={color.color}
              name={color.name}
            />
          ))}
      </main>
    </div>
  );
}
