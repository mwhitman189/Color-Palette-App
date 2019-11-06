import React, { Component } from 'react'
import './ColorBox.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';


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
    const { background, valueType } = this.props
    const { is_showing } = this.state

    return (
      <CopyToClipboard text={background[ valueType ]} onCopy={this.changeCopyState}>
        <div className="ColorBox" style={{ backgroundColor: background[ valueType ] }}>
          <div className={`copy-overlay ${is_showing && "show"}`} style={{ backgroundColor: background[ valueType ] }} />
          <div className={`copy-msg ${is_showing && "show"}`}>
            <h2>Copied!</h2>
            <p>{background[ valueType ]}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{background.name}</span>
            </div>
            <button className="copy-btn">Copy</button>
            <span className="see-more">MORE</span>
          </div>
        </div>
      </CopyToClipboard>
    )
  }
}
export default ColorBox