import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/PaletteListStyles";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  componentDidMount() {
    // Set the background color of the entire page, rather than just the component
    document.body.classList.add(this.props.classes.blueBackground);
  }

  render() {
    const { palettes, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Palette</h1>
            <Link to="/palette/new" className={classes.link}>
              Create Palette
            </Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} classNames="fade" timeout={900}>
                <MiniPalette
                  key={palette.id}
                  {...palette}
                  id={palette.id}
                  handleClick={() => this.goToPalette(palette.id)}
                  deletePalette={deletePalette}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
