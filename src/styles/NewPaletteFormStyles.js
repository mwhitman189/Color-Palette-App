import chroma from "chroma-js";

export default {
  NewPaletteForm: {
    backgroundColor: "#dae1e4"
  },
  colorBtn: {
    color: props =>
      chroma(props.currentColor).luminance() > 0.3 ? "#353b48" : "#fff"
  }
};
