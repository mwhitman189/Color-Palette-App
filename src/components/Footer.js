import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>Miles Whitman <FontAwesomeIcon icon={faCopyright} /> 2019</p>
      </div>
    )
  }
}
export default Footer