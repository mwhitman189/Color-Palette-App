import React, { Component } from 'react'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import 'rc-slider/assets/index.css'
import './Navbar.css'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      format: "hex",
      open: false,
    }
    this.handleFormat = this.handleFormat.bind(this)
    this.closeSnackbar = this.closeSnackbar.bind(this)
  }

  handleFormat(evt) {
    this.props.changeFormat(evt.target.value)
    this.setState({ format: evt.target.value, open: true })
  }

  closeSnackbar() {
    this.setState({ open: false })
  }

  render() {
    const { level, changeLevel } = this.props
    const { format } = this.state

    return (
      <header className="Navbar">
        <div className="left">
          <Link to="/" className="logo">
            <span className="title">Palette Maker</span>
            <span className="sub-title">3000</span>
          </Link>
          {changeLevel && (<div className="lightness-container">
            <label htmlFor="lumi-slider">Level: {level}</label>
            <div className="slider">
              <Slider
                onChange={changeLevel}
                value={level}
                min={100}
                max={900}
                step={100}
                defaultValue={level}
              />
            </div>
          </div>
          )}
        </div>
        <div className="right">
          <div className="select-container">
            <Select value={format} onChange={this.handleFormat}>
              <MenuItem value="hex">HEX -- #000</MenuItem>
              <MenuItem value="rgb">RGB -- (0,0,0)</MenuItem>
              <MenuItem value="rgba">RGBA -- (0,0,0, 0.5)</MenuItem>
            </Select>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed To <span className="bold">{format}</span></span>}
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    )
  }
}
export default Navbar