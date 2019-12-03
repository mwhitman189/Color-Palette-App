import sizes from "./sizes";
import svg from "./background.svg";

export default {
  root: {
    backgroundColor: "#ffffff",
    backgroundImage: `url(${svg})`,
    /* background by SVGBackgrounds.com */
    position: "relative",
    minHeight: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    boxSizing: "border-box",
    overflow: "scroll"
  },
  container: {
    width: "65%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("md")]: {
      width: "75%"
    },
    [sizes.down("sm")]: {
      width: "80%"
    },
    [sizes.down("xsm")]: {
      width: "85%"
    }
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1em 0 1em",
    color: "#2f89ca",
    "& h1": {
      margin: "0"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 32%)",
    gridGap: "1rem",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xsm")]: {
      gridTemplateColumns: "repeat(1, 100%)"
    }
  },
  link: {
    fontWeight: "800",
    color: "#2f89ca",
    textDecoration: "none",
    textTransform: "uppercase",
    "&:hover": {
      color: "rgba(255, 255, 255, 0.8)"
    }
  }
};
