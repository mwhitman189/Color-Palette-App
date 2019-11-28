import React, { useState } from "react";
import PaletteFormNav from "./PaletteFormNav";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import chroma from "chroma-js";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import ColorPickerForm from "./ColorPickerForm";
import appVariables from "../appVariables.js";

const drawerWidth = appVariables.drawerWidth;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center"
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
  },
  backBtn: {
    backgroundColor: "#353b48",
    margin: ".2rem .5rem"
  },
  saveBtn: {
    margin: ".2rem .5rem"
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem"
  },
  buttons: {
    margin: "0.5rem"
  }
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [state, setState] = useState({
    open: false,
    colors: [
      { color: "#FBEA02", name: "Yellow" },
      { color: "#447AEF", name: "Blue" },
      { color: "#EF2C60", name: "Red" }
    ]
  });

  const handleDrawerOpen = () => {
    setState({ ...state, open: true });
  };

  const handleDrawerClose = () => {
    setState({ ...state, open: false });
  };

  const checkForColor = newColor => {
    console.log(state.colors[0].color);
    return state.colors.every(
      ({ color }) => color.toLowerCase() !== newColor.color.toLowerCase()
    );
  };

  const addColor = newColor => {
    if (checkForColor(newColor)) {
      setState({
        ...state,
        colors: [...state.colors, newColor]
      });
    } else {
      alert("Already in palette!");
    }
  };

  const handleSavePalette = newPaletteName => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: state.colors
    };
    props.savePalette(newPalette);
    props.history.push("/");
  };

  // Resort colors array in state for use with react-sortable-hoc
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setState(({ colors }) => ({
      ...state,
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };

  const removeColor = colorName => {
    setState({
      ...state,
      colors: state.colors.filter(color => color.name !== colorName)
    });
  };

  const clearPalette = () => {
    setState({
      ...state,
      colors: []
    });
  };

  const getRandomColor = () => {
    let paletteList = props.paletteList.map(p => p.colors).flat();
    let randIdx = Math.floor(Math.random() * paletteList.length);
    let randColor = paletteList[randIdx];

    setState({
      ...state,
      colors: [...state.colors, randColor]
    });
  };

  return (
    <div className={classes.root}>
      <PaletteFormNav
        classes={classes}
        open={state.open}
        paletteList={props.paletteList}
        handleSavePalette={handleSavePalette}
        handleDrawerOpen={handleDrawerOpen}
      />
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
        <div className={classes.container}>
          <Typography variant="h4">Design a palette</Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearPalette}
            >
              Clear Palette
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={getRandomColor}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            addColor={addColor}
            classes={classes}
            colors={state.colors}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: state.open
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          colors={state.colors}
          removeColor={removeColor}
          axis={"xy"}
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}
