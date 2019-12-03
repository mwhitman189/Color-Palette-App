import sizes from "./sizes";

export default {
  Navbar: {
    display: "flex",
    justifyContent: "space-between",
    height: "10%",
    padding: 0
  },
  left: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  lightnessContainer: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0.5rem",
    margin: 0,
    width: "250px",
    "& label": {
      fontSize: "0.9rem"
    },
    [sizes.down("sm")]: {
      width: "180px"
    }
  },
  logo: {
    borderRadius: "15px",
    backgroundColor: "#dcdde1",
    margin: "0 .5rem 0 .2rem",
    padding: "0.3rem .3rem .3rem .3rem",
    textDecoration: "none"
  },
  title: {
    color: "#353b48",
    fontSize: "1.2rem",
    fontWeight: 400,
    [sizes.down("md")]: {
      fontSize: "1rem"
    }
  },
  subTitle: {
    color: "#353b48",
    fontSize: "1.5rem",
    fontWeight: 700,
    position: "relative",
    marginLeft: "10px",
    [sizes.down("md")]: {
      display: "none",
      fontSize: "1rem"
    }
  },
  slider: {
    width: "100%",
    display: "inline-block",
    "& .rc-slider-rail": {
      backgroundColor: "#dcdde1",
      height: "8px"
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      background: "linear-gradient(90deg, #182848 0%, #4b6cb7 100%)",
      position: "relative",
      width: "20px",
      height: "20px",
      outline: "none",
      border: "none",
      boxShadow: "none"
    },
    "& .rc-slider-handle:active, .rc-slider-handle:hover": {
      background: "linear-gradient(90deg, #182848 0%, #00a2ff 100%)"
    }
  },
  right: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  selectContainer: {
    background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
    borderRadius: "10px",
    margin: "0 10px",
    padding: "0 0.5rem",
    "& div": {
      color: "#fff"
    }
  },
  messageId: {
    textTransform: "uppercase"
  },
  bold: {
    fontSize: "1.2rem",
    padding: ".2rem",
    color: "#00d2ff",
    background: "-webkit-linear-gradient(#eee, #333)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    textFillColor: "transparent",
    fontWeight: 600
  }
};
