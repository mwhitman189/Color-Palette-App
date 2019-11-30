import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

export default function FormDialog(props) {
  const [state, setState] = React.useState({
    open: false,
    paletteName: ""
  });

  const { savePalette } = props;

  useEffect(() => {
    // Check whether the current value is already in the palettes list
    ValidatorForm.addValidationRule("isUniquePaletteName", value => {
      return props.paletteList.every(
        ({ paletteName }) => value.toLowerCase() !== paletteName.toLowerCase()
      );
    });
  });

  const handleClickOpen = () => {
    setState({
      ...state,
      open: true
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false
    });
  };

  const handleChange = evt => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Save Palette
      </Button>
      <Dialog
        open={state.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
        <DialogContent>
          <Picker />
          <DialogContentText>
            What would you like to name your palette?
          </DialogContentText>
          <ValidatorForm onSubmit={() => savePalette(state.paletteName)}>
            <TextValidator
              autoFocus
              fullWidth
              margin="dense"
              label="Palette Name"
              value={state.paletteName}
              name="paletteName"
              onChange={handleChange}
              validators={["required", "isUniquePaletteName"]}
              errorMessages={[
                "Please enter a palette name",
                "That name is already taken"
              ]}
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Add Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}
