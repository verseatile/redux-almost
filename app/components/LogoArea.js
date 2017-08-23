import React, { Component } from 'react'

export default class LogoArea extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <img className="logo" src="./assets/logo.svg"></img>
        <p className="logo-text">BEATBOX</p>
      </div>);
  }
}
