import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import chroma from 'chroma-js'


const styles = {
  ColorBox: {
    color: props =>
      chroma(props.background).luminance() > 0.3 ? '#353b48' : '#eeeeee',
    width: '20%',
    height: props =>
      props.is_singleHue ? '50%' : '25%',
    margin: '0 auto',
    padding: 0,
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginBottom: '-5px',
    '&:hover $copyBtn': {
      opacity: 1,
    }
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() > 0.4 ? '#353b48' : '#eeeeee',
    position: 'absolute',
    backgroundColor: props =>
      chroma(props.background).luminance() > 0.5 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255,255,255, 0.3)',
    border: 'none',
    borderRadius: '8px 0',
    right: 0,
    bottom: 0,
    width: '60px',
    height: '30px',
    fontSize: '0.8rem',
    lineHeight: '30px',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: props =>
        chroma(props.background).luminance()
          > 0.4 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
    }
  },
  copyBtn: {
    opacity: 0,
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
  copyOverlay: {
    opacity: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
    transform: 'scale(0.1)',
    transition: 'transform 1s ease-in-out',
    '&.show': {
      opacity: '1',
      transform: 'scale(50)',
      zIndex: 10,
      position: 'absolute',
      transition: 'transform 1s ease-in-out',
    }
  },
  copyMsg: {
    color: props =>
      chroma(props.background).luminance() > 0.3 ? '#353b48' : '#eeeeee',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    transform: 'scale(0.1)',
    opacity: 0,
    textShadow: '1px 2px 3px rgba(0, 0, 0, 0.6)',
    transition: 'all 0.4s ease-in-out',
    '&.show': {
      opacity: 1,
      transform: 'scale(1)',
      zIndex: 25,
      transition: 'all 0.4s 0.3s ease-in-out',
    },
    '& h2': {
      background: 'rgba(255,255,255, 0.3)',
      textAlign: 'center',
      margin: 0,
      width: '100%',
    },
    '& p': {
      color: 'rgba(255,255,255, 0.7)',
      fontSize: '1.5rem',
      margin: 0,
    }
  },
  boxContent: {
    position: 'absolute',
    padding: '10px',
    left: 0,
    bottom: 0,
    fontSize: '0.7rem',
    letterSpacing: '1px',
  },
  backBtn: {
    color: props =>
      chroma(props.background).luminance() > 0.3 ? '#353b48' : '#eeeeee',
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
    backgroundColor: 'rgba(255,255,255, 0.2)',
    border: 'none',
    fontSize: '1rem',
    lineHeight: '30px',
    cursor: 'pointer',
    transition: '0.4s opacity',
    opacity: 1,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255, 0.3)'
    }
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
      is_backBtn
    } = this.props
    const { is_showing } = this.state

    let linkBtn
    if (is_backBtn) {
      linkBtn = <Link to={`/palette/${id}`} className={classes.backBtn}>Go Back</Link>
    } else {
      linkBtn = <button className={`${classes.copyBtn}`}>Copy</button>
    }

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={`${classes.ColorBox}`} style={{ backgroundColor: background }}>
          {!is_backBtn && (
            <>
              <div
                className={`${classes.copyOverlay} ${is_showing && 'show'}`}
                style={{ backgroundColor: background }}
              />
              <div className={`${classes.copyMsg} ${is_showing && 'show'}`}>
                <h2>Copied!</h2>
                <p>{background}</p>
              </div>
            </>
          )}
          <div>
            <div className={classes.boxContent}>
              <span>{name}</span>
            </div>
            {linkBtn}
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