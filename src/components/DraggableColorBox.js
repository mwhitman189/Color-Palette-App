import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

const styles = {
  root: {
    width: "20%",
    height: props => (props.is_singleHue ? "50%" : "25%"),
    margin: "0 auto",
    padding: 0,
    display: "inline-block",
    position: "relative",
    textTransform: "uppercase",
    marginBottom: "-5px",
    "&:hover svg": {
      color: "#fff",
      transform: "scale(1.2)"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    padding: "10px",
    left: 0,
    bottom: 0,
    fontSize: ".7rem",
    letterSpacing: ".1em",
    display: "flex",
    justifyContent: "space-between",
    wordBreak: "break-all"
  },
  deleteIcon: {
    color: "#353b48",
    transition: "all .2s ease-in-out",
    cursor: "pointer"
  }
};

const DraggableColorBox = SortableElement(props => {
  const { classes, handleClick, name, color } = props;

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name ? name : color}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
});
export default withStyles(styles)(DraggableColorBox);
