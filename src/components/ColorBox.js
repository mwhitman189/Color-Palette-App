import React, { Component } from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import chroma from 'chroma-js'


const styles = {
  root: {

  },
  seeMore: {
    color: props => chroma(props.background).luminance() > 0.4 ? '#353b48' : '#eeeeee',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255, 0.3)',
    border: 'none',
    borderRadius: '8px 0',
    right: 0,
    bottom: 0,
    width: '60px',
    height: '30px',
    fontSize: '0.8rem',
    lineHeight: '30px',
    textAlign: 'center',
  },
  copyBtn: {
    color: props => chroma(props.background).luminance() > 0.3 ? '#353b48' : '#eeeeee',
    opacity: '0',
    display: 'inline-block',
    borderRadius: '2px',
    width: '100px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    backgroundColor: 'rgba(255,255,255, 0.3)',
    border: 'none',
    fontSize: '1rem',
    lineHeight: '30px',
    cursor: 'pointer',
    transition: '0.4s opacity',
    '&:hover': {
      opacity: '1',
    }
  },
  colorName: {
    color: props => chroma(props.background).luminance() > 0.3 ? '#353b48' : '#eeeeee',
  },
  backBtn: {
    color: props => chroma(props.background).luminance() > 0.3 ? '#353b48' : '#eeeeee',
    display: 'inline-block',
    borderRadius: '2px',
    width: '100px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    backgroundColor: 'rgba(255,255,255, 0.3)',
    border: 'none',
    fontSize: '1rem',
    lineHeight: '30px',
    cursor: 'pointer',
    transition: '0.4s opacity',
  },
}

class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      is_showing: false,
    }
    this.changeCopyState = this.changeCopyState.bind(this)
  }

  changeCopyState() {
    this.setState({ is_showing: true }, () => {
      setTimeout(() => this.setState({ is_showing: false }), 1400)
    })
  }

  render() {
    const {
      classes,
      background,
      name,
      paletteId,
      id,
      showLink,
    } = this.props
    const { is_showing } = this.state
    const luminance = chroma(background).luminance()

    let textColor
    if (luminance > 0.3) {
      textColor = classes.darkText
    } else {
      textColor = classes.lightText
    }

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ backgroundColor: background }}>
          <div
            className={`copy-overlay ${is_showing && "show"}`}
            style={{ backgroundColor: background }}
          />
          <div className={`copy-msg ${is_showing && "show"}`}>
            <h2 className={textColor}>Copied!</h2>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={`${classes.copyBtn}`}>Copy</button>
            {showLink && (
              <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation}>
                <span className={`${classes.seeMore}`}>MORE</span>
              </Link>
            )}
          </div>
        </div>
      </CopyToClipboard>
    )
  }
}
export default withStyles(styles)(ColorBox)