import React, { memo } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "../styles/MiniPaletteStyles";

export const MiniPalette = memo(props => {
  const {
    classes,
    colors,
    paletteName,
    emoji,
    openDialog,
    goToPalette,
    id
  } = props;

  const handleGoToPalette = () => {
    goToPalette(id);
  };

  return (
    <div className={classes.root} onClick={handleGoToPalette}>
      <div className={classes.delete} onClick={evt => openDialog(evt, id)}>
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
});

export default withStyles(styles)(MiniPalette);
