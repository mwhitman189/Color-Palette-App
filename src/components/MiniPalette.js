import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/MiniPaletteStyles'


function MiniPalette(props) {
  const { classes, colors, paletteName, emoji } = props

  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>
        {colors.map(color =>
          <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
          ></div>
        )}
      </div>
      <h3 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h3>
    </div>
  )
}
export default withStyles(styles)(MiniPalette)