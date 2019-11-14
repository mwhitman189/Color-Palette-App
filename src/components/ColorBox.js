import React, { Component } from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom'


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
    const { background, name, paletteId, id, showLink } = this.props
    const { is_showing } = this.state

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ backgroundColor: background }}>
          <div className={`copy-overlay ${is_showing && "show"}`} style={{ backgroundColor: background }} />
          <div className={`copy-msg ${is_showing && "show"}`}>
            <h2>Copied!</h2>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-btn">Copy</button>
            {showLink && (
              <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation}>
                <span className="see-more">MORE</span>
              </Link>
            )}
          </div>
        </div>
      </CopyToClipboard>
    )
  }
}
export default ColorBox