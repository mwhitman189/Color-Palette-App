import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Slider from "rc-slider";

import styles from "../styles/NavbarStyles";
import "rc-slider/assets/index.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false
    };
    this.handleFormat = this.handleFormat.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormat(evt) {
    this.props.changeFormat(evt.target.value);
    this.setState({ format: evt.target.value, open: true });
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { classes, level, changeLevel } = this.props;
    const { format } = this.state;

    return (
      <header className={classes.Navbar}>
        <div className={classes.left}>
          <Link to="/" className={classes.logo}>
            <span className={classes.title}>Palette Maker</span>
            <span className={classes.subTitle}>3000</span>
          </Link>
          {changeLevel && (
            <div className={classes.lightnessContainer}>
              <label htmlFor="lumi-slider">Level: {level}</label>
              <div className={classes.slider}>
                <Slider
                  onChange={changeLevel}
                  value={level}
                  min={100}
                  max={900}
                  step={100}
                  defaultValue={level}
                />
              </div>
            </div>
          )}
        </div>
        <div className={classes.right}>
          <div className={classes.selectContainer}>
            <Select value={format} onChange={this.handleFormat}>
              <MenuItem value="hex">hex - #000</MenuItem>
              <MenuItem value="rgb">rgb - (0,0,0)</MenuItem>
              <MenuItem value="rgba">rgba - (0,0,0, 0.5)</MenuItem>
            </Select>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id={classes.messageId}>
              Format Changed To <span className={classes.bold}>{format}</span>
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}
export default withStyles(styles)(Navbar);
