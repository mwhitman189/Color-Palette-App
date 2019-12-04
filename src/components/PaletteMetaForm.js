import React, { useEffect } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

export default function FormDialog(props) {
  const [state, setState] = React.useState({
    stage: "name",
    paletteName: ""
  });

  const { hideForm, handleSubmit, paletteList } = props;
  const { paletteName, stage } = state;

  useEffect(() => {
    // Check whether the current value is already in the palettes list. If so, display error
    ValidatorForm.addValidationRule("isUniquePaletteName", value => {
      return paletteList.every(
        ({ paletteName }) => value.toLowerCase() !== paletteName.toLowerCase()
      );
    });
  });

  const showEmojiStage = () => {
    if (paletteName !== "") {
      setState({
        ...state,
        stage: "emoji"
      });
    }
  };

  const savePalette = emoji => {
    let newPalette = {
      paletteName: paletteName,
      emoji: emoji.native
    };
    handleSubmit(newPalette);
    // Set form stage to empty string to remove the emoji picker dialog on button click
    setState({
      ...state,
      stage: ""
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
      <Dialog open={stage === "emoji"} onClose={hideForm}>
        <DialogTitle id="emoji-dialog-title">
          Select A Palette Emoji
        </DialogTitle>
        <Picker title="Select an emoji" onSelect={savePalette} />
      </Dialog>
      <Dialog
        open={stage === "name"}
        onClose={hideForm}
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
              value={paletteName}
              name="paletteName"
              onChange={handleChange}
              validators={["required", "isUniquePaletteName"]}
              errorMessages={[
                "Please enter a palette name",
                "That name is already taken"
              ]}
            />
            <DialogActions>
              <Button onClick={hideForm} color="primary">
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
