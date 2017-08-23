import React, { Component } from 'react'
import PropTypes from 'prop-types'

// argument to function is props
// props is an object - can either use the entire object or deconstruct
// deconstruct = {title} instead of props.title

const Button = (props) => {
  // space to do shit

  return (
    <div style={{ textAlign: 'center', height: 35, paddingLeft: 4, paddingRight: 4, backgroundColor: '#333333', color: 'white', width: 110 }}>
      <p style={{ paddingTop: 5 }}>{props.title}</p>
    </div>
  )

}

Button.propTypes = {
  title: PropTypes.string
}

export default Button
