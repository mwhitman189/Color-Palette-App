import React, { Component } from "react";
import uuid from "uuid/v4";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/PaletteStyles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      level: 500,
      is_loading: true
    };
    this.changeFormat = this.changeFormat.bind(this);
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors, id } = this.props.palette;
    const { classes } = this.props;
    const { format, level } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox
        key={uuid()}
        background={color[format]}
        name={color.name}
        id={color.id}
        paletteId={id}
        showLink={true}
        isMainPalette={true}
      />
    ));

    return (
      <div className={classes.Palette}>
        <Navbar
          changeLevel={this.changeLevel}
          level={level}
          changeFormat={this.changeFormat}
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <Footer />
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
