import chroma from "chroma-js";
import sizes from "./sizes";

export default {
  ColorBox: {
    color: props =>
      chroma(props.background).luminance() > 0.3 ? "#353b48" : "#eeeeee",
    width: "20%",
    height: props => (props.is_singleHue ? "50%" : "25%"),
    margin: "0 auto",
    padding: 0,
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-5px",
    "&:hover $copyBtn": {
      opacity: 1
    },
    [sizes.down("lg")]: {
      width: "33%",
      height: props => (props.is_singleHue ? "25%" : "14%")
    },
    [sizes.down("md")]: {
      width: "50%",
      height: props => (props.is_singleHue ? "20%" : "10%")
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: props => (props.is_singleHue ? "10%" : "5%")
    }
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() > 0.4 ? "#353b48" : "#eeeeee",
    position: "absolute",
    backgroundColor: props =>
      chroma(props.background).luminance() > 0.5
        ? "rgba(0, 0, 0, 0.2)"
        : "rgba(255,255,255, 0.3)",
    border: "none",
    borderRadius: "8px 0",
    right: 0,
    bottom: 0,
    width: "60px",
    height: "30px",
    fontSize: "0.8rem",
    lineHeight: "30px",
    textAlign: "center",
    "&:hover": {
      backgroundColor: props =>
        chroma(props.background).luminance() > 0.4
          ? "rgba(0, 0, 0, 0.2)"
          : "rgba(255, 255, 255, 0.2)"
    }
  },
  copyBtn: {
    opacity: 0,
    display: "inline-block",
    borderRadius: "2px",
    width: "100px",
    height: "30px",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    backgroundColor: "rgba(255,255,255, 0.3)",
    border: "none",
    fontSize: "1rem",
    lineHeight: "30px",
    cursor: "pointer",
    transition: "0.4s opacity"
  },
  copyOverlay: {
    opacity: 0,
    zIndex: 0,
    width: "100%",
    height: "100%",
    transform: "scale(0.1)",
    transition: "transform 1s ease-in-out",
    "&.show": {
      opacity: "1",
      transform: "scale(50)",
      zIndex: 10,
      position: "absolute",
      transition: "transform 1s ease-in-out"
    }
  },
  copyMsg: {
    color: props =>
      chroma(props.background).luminance() > 0.3 ? "#353b48" : "#eeeeee",
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3rem",
    transform: "scale(0.1)",
    opacity: 0,
    textShadow: "1px 2px 3px rgba(0, 0, 0, 0.6)",
    transition: "all 0.4s ease-in-out",
    "&.show": {
      opacity: 1,
      transform: "scale(1)",
      zIndex: 25,
      transition: "all 0.4s 0.3s ease-in-out"
    },
    "& h2": {
      background: "rgba(255,255,255, 0.3)",
      textAlign: "center",
      margin: 0,
      width: "100%"
    },
    "& p": {
      color: "rgba(255,255,255, 0.7)",
      fontSize: "1.5rem",
      margin: 0
    }
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    left: 0,
    bottom: 0,
    fontSize: "0.7rem",
    letterSpacing: "1px"
  },
  backBtn: {
    color: props =>
      chroma(props.background).luminance() > 0.3 ? "#353b48" : "#eeeeee",
    display: "inline-block",
    borderRadius: "2px",
    width: "100px",
    height: "30px",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    backgroundColor: "rgba(255,255,255, 0.2)",
    border: "none",
    fontSize: "1rem",
    lineHeight: "30px",
    cursor: "pointer",
    transition: "0.4s opacity",
    opacity: 1,
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.3)"
    }
  }
};
