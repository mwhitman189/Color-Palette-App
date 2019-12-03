import React, { useState } from "react";
import PaletteFormNav from "./PaletteFormNav";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import ColorPickerForm from "./ColorPickerForm";
import useStyles from "../styles/NewPaletteFormStyles";

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

  const checkIfColorAbsent = newColor => {
    return state.colors.every(
      ({ color }) => color.toLowerCase() !== newColor.color.toLowerCase()
    );
  };

  const addColor = newColor => {
    if (checkIfColorAbsent(newColor)) {
      setState({
        ...state,
        colors: [...state.colors, newColor]
      });
    } else {
      alert("Already in palette!");
    }
  };

  const handleSubmit = newPalette => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = state.colors;

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
        open={state.open}
        paletteList={props.paletteList}
        handleSubmit={handleSubmit}
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
          <ColorPickerForm addColor={addColor} colors={state.colors} />
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
          distance={5}
        />
      </main>
    </div>
  );
}
