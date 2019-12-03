import sizes from "./sizes";

export default {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.4rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1
    },
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "80%",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    fontSize: "0.9rem",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0rem",
    position: "relative",
    [sizes.down("lg")]: {
      fontSize: ".8rem"
    },
    [sizes.down("sm")]: {
      fontSize: ".9rem"
    }
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-5px"
  },
  delete: {},
  deleteIcon: {
    color: "#fff",
    backgroundColor: "#e03b30",
    width: "20px",
    height: "20px",
    position: "absolute",
    borderRadius: "5px",
    right: 0,
    top: 0,
    padding: "0.4rem",
    zIndex: 10,
    opacity: 0,
    transition: "all .3s ease-in-out"
  }
};
