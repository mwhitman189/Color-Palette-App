import React from 'react'
import { withStyles } from '@material-ui/styles'


const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "100px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    fontSize: "0.9rem",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0rem",
    position: "relative"
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
    marginBottom: "-5px",
  }
}

function MiniPalette(props) {
  const { classes, colors, paletteName, emoji } = props

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>
        {colors.map(color =>
          <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
          ></div>
        )}
      </div>
      <h3 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h3>
    </div>
  )
}
export default withStyles(styles)(MiniPalette)