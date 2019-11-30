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
    stage: "name",
    paletteName: ""
  });

  useEffect(() => {
    // Check whether the current value is already in the palettes list
    ValidatorForm.addValidationRule("isUniquePaletteName", value => {
      return props.paletteList.every(
        ({ paletteName }) => value.toLowerCase() !== paletteName.toLowerCase()
      );
    });
  });

  const showEmojiStage = () => {
    if (state.paletteName !== "") {
      setState({
        ...state,
        stage: "emoji"
      });
    }
  };

  const savePalette = emoji => {
    let newPalette = {
      paletteName: state.paletteName,
      emoji: emoji.native
    };
    props.handleSubmit(newPalette);
  };

  const handleChange = evt => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <div>
      <Dialog open={state.stage === "emoji"} onClose={props.hideForm}>
        <DialogTitle id="emoji-dialog-title">
          Select A Palette Emoji
        </DialogTitle>
        <Picker title="Select an emoji" onSelect={savePalette} />
      </Dialog>
      <Dialog
        open={state.stage === "name"}
        onClose={props.hideForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
        <DialogContent>
          <DialogContentText>
            What would you like to name your palette?
          </DialogContentText>
          <ValidatorForm onSubmit={showEmojiStage}>
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
              <Button onClick={props.hideForm} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary" onClick={showEmojiStage}>
                Add Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}
