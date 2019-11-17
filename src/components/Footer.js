import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/FooterStyles'


function Footer(props) {
  const { paletteName } = props
  const { classes } = props

  return (
    <div className={classes.root}>
      <p className={`${classes.text} ${classes.colorName}`}>{paletteName}</p>
      <p className={classes.text}>Miles Whitman <FontAwesomeIcon icon={faCopyright} /> 2019</p>
    </div>
  )
}
export default withStyles(styles)(Footer)