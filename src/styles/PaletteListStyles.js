export default {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "60%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1em 0 1em",
    color: "white",
    "& h1": {
      margin: "0"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  },
  link: {
    fontWeight: "800",
    color: "#fff",
    textDecoration: "none",
    textTransform: "uppercase",
    "&:hover": {
      color: "rgba(255, 255, 255, 0.8)"
    }
  }
};
