import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import MiniPalette from "./MiniPalette";
import styles from "../styles/PaletteListStyles";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_open: false,
      paletteId: ""
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDeletePalette = this.handleDeletePalette.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
  }

  componentDidMount() {
    // Set the background color of the entire page, rather than just the component
    document.body.classList.add(this.props.classes.blueBackground);
  }

  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  // Save the id of the palette for use in the dialog
  openDialog(evt, id) {
    evt.stopPropagation();
    this.setState({
      ...this.state,
      is_open: true,
      paletteId: id
    });
  }

  handleDeletePalette() {
    this.props.deletePalette(this.state.paletteId);
    this.closeDialog();
  }

  closeDialog() {
    this.setState({ is_open: false, paletteId: "" });
  }

  render() {
    const { palettes, classes } = this.props;
    const { is_open, paletteId } = this.state;

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
                  goToPalette={this.goToPalette}
                  openDialog={this.openDialog}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={is_open}
          onClose={this.closeDialog}
          aria-labelledby="delete-dialog-title"
        >
          <DialogTitle id="delete-dialog-title">Delete Palette?</DialogTitle>
          <List>
            <ListItem button onClick={e => this.handleDeletePalette(paletteId)}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Yes" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="No" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
