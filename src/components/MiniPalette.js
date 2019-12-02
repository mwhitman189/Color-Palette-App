import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

function MiniPalette(props) {
  const { classes, colors, paletteName, emoji, deletePalette, id } = props;

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.delete} onClick={e => deletePalette(e, id)}>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
      <div className={classes.colors}>
        {colors.map(color => (
          <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
          ></div>
        ))}
      </div>
      <h3 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h3>
    </div>
  );
}
export default withStyles(styles)(MiniPalette);
