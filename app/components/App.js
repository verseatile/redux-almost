import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Button from './minimal/Button'
import ChatInput from './ChatInput'
import Topnav from './Topnav'
import MessageList from '../containers/MessageList'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      sidebar: false
    }
  }

  sidebarToggle() {
     this.setState({ sidebar: !this.state.sidebar })
  }

  condRender() {
    if(!this.state.sidebar) {
      return {
        display: 'none'
      }
    }

    else {
      return {
        display: 'block'
      }
    }
  }

  marginRender() {
    if(!this.state.sidebar) {
      return {
        marginLeft: 0
      }
    }

    else {
      return {
        marginLeft: 270
      }
    }
  }



  
  render() {
    return (
      <div style={{ display: 'flex' }} className="app-main">

        <div style={this.condRender()} className="sidebar-toggle">
        <Sidebar /> 
        </div>       
      
        <div className="msg-area" style={{ paddingLeft: 10 , fontFamily: 'Roboto', fontWeight: 200, flex: 4, marginLeft: this.marginRender(), width: '100%' }}>
        
        
        
        {/*<Topnav perClick={() => this.setState({ sidebar: true })} />*/}
        {/* TOPNAV RAW   */}
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
            <img onClick={() => this.setState({ sidebar: !this.state.sidebar })}
            style={{
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
        
        

        <MessageList />
        
        </div>
        
        
      </div>
    );
  }
}
