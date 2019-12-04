import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import styles from "../styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "yellow",
      newColorName: ""
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddColor = this.handleAddColor.bind(this);
  }

  componentDidMount() {
    // Check whether the current value is already in the colors list.
    ValidatorForm.addValidationRule("isUniqueColorName", value => {
      return this.props.colors.every(
        ({ name }) => value.toLowerCase() !== name.toLowerCase()
      );
    });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleAddColor() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { classes } = this.props;
    const { currentColor, newColorName } = this.state;

    return (
      <div className={classes.container}>
        <ChromePicker
          className={classes.picker}
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleAddColor}>
          <TextValidator
            className={classes.colorNameInput}
            value={newColorName}
            name="newColorName"
            onChange={this.handleChange}
            margin="normal"
            placeholder="Color Name"
            validators={["isUniqueColorName"]}
            errorMessages={["That name is already taken. Sorry!"]}
          />
          <Button
            className={classes.colorBtn}
            variant="contained"
            style={{ backgroundColor: currentColor }}
            type="submit"
          >
            Add Color
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}
export default withStyles(styles)(ColorPickerForm);
