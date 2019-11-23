import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    width: "20%",
    height: props => (props.is_singleHue ? "50%" : "25%"),
    margin: "0 auto",
    padding: 0,
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    textTransform: "uppercase",
    marginBottom: "-5px"
  }
};

function DraggableColorBox(props) {
  return (
    <div
      className={props.classes.root}
      style={{ backgroundColor: props.color }}
    >
      {props.name ? props.name : props.color}
    </div>
  );
}
export default withStyles(styles)(DraggableColorBox);
