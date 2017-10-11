import React, { Component } from 'react'

export default class Topnav extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div style={{
        position: 'fixed',
        opacity: 1,
        height: 65,
        backgroundColor: 'white',
        marginLeft: -8,
        marginRight: -8,
        fontFamily: 'Roboto',
        width: '100%'
      }} className='nav'>
        <div style={{
          'float': 'left',
          'height': '50px',
          'paddingTop': '5px',
          'paddingLeft': '20px'
        }} className='logo'>
          <img style={{
            height: 50
          }} src="https://picsum.photos/50"></img>
        </div>
        <div style={{
          //'float': 'right',
          //position: 'absolute',
          'paddingTop': '10px',
          'paddingRight': '20px',
          'color': 'white'
        }} className='links-contain'>
          <ul style={{ fontWeight: 200 }}>
            <li style={{
              'display': 'inline',
              'paddingLeft': '10px',
              'paddingRight': '10px',
              'color': 'black',
              'fontWeight': '300'
            }}>Work</li>
            <li style={{
              'display': 'inline',
              'paddingLeft': '10px',
              'paddingRight': '10px',
              'color': 'black',
              'fontWeight': '300'
            }}>Tools</li>
            <li style={{
              'display': 'inline',
              'paddingLeft': '10px',
              'paddingRight': '10px',
              'color': 'black',
              'fontWeight': '300'
            }}>Three Cat</li>
          </ul>
        </div>
      </div>
    )
  }



}
