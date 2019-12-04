import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import clsx from "clsx";
import styles from "../styles/ColorBoxStyles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_showing: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ is_showing: true }, () => {
      setTimeout(() => this.setState({ is_showing: false }), 1400);
    });
  }

  render() {
    const {
      classes,
      background,
      name,
      paletteId,
      id,
      showLink,
      is_backBtn
    } = this.props;
    const { is_showing } = this.state;

    let linkBtn;
    if (is_backBtn) {
      linkBtn = (
        <Link to={`/palette/${id}`} className={classes.backBtn}>
          Go Back
        </Link>
      );
    } else {
      linkBtn = <button className={`${classes.copyBtn}`}>Copy</button>;
    }

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div
          className={`${classes.ColorBox}`}
          style={{ backgroundColor: background }}
        >
          {!is_backBtn && (
            <>
              <div
                className={clsx(classes.copyOverlay, is_showing && "show")}
                style={{ backgroundColor: background }}
              />
              <div className={clsx(classes.copyMsg, is_showing && "show")}>
                <h2>Copied!</h2>
                <p>{background}</p>
              </div>
            </>
          )}
          <div>
            <div className={classes.boxContent}>
              <span>{name}</span>
            </div>
            {linkBtn}
            {showLink && (
              <Link
                to={`/palette/${paletteId}/${id}`}
                onClick={e => e.stopPropagation}
              >
                <span className={`${classes.seeMore}`}>MORE</span>
              </Link>
            )}
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}
export default withStyles(styles)(ColorBox);
