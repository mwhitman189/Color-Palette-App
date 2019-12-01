import { DRAWER_WIDTH } from "../appVariables.js";
import chroma from "chroma-js";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = DRAWER_WIDTH;

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
export default useStyles;
