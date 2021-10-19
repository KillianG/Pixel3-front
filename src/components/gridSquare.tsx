import React from 'react'

// Represents a grid square with a color

export default function GridSquare(props) {
  const classes = `grid-square`
  return <div className={classes} style={{color: props.color }}/>
}
