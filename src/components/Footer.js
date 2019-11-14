import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { withStyles } from '@material-ui/styles'


const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4%',
  },
  text: {
    margin: '0 1em',
  },
  colorName: {
    fontWeight: '900',
  }
}

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