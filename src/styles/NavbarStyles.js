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
    }
  },
  logo: {
    borderRadius: "15px",
    backgroundColor: "#dcdde1",
    margin: ".2rem .5rem .2rem .2rem",
    width: "150px",
    padding: "0.3rem 0 .3rem 1rem",
    textDecoration: "none"
  },
  title: {
    color: "#353b48",
    fontSize: "1.2rem",
    fontWeight: 400
  },
  subTitle: {
    color: "#353b48",
    fontSize: "1.5rem",
    fontWeight: 700,
    position: "relative",
    margin: "10px"
  },
  slider: {
    width: "100%",
    maxWidth: "350px",
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
