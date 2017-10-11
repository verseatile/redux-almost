import React, { Component } from 'react'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)

  }



  render() {

    let list = {
      fontFamily: 'Roboto',
      fontWeight: '500',
      color: '#000',
      fontSize: 16,
      listStyleType: 'none',
      paddingTop: 30
    }

    return (
      <div className="sidebar" style={{ display: '' , zIndex: '1', border: '6px solid black', flex: 1, position: 'fixed', minWidth: 250, height:'100%', backgroundColor: '#FFF', overflowY: 'auto' }}>

        <ul>
          <li style={list} className='a-cat'>Buttons</li>
          <li style={list} className='a-cat'>Cards</li>
          <li style={list} className='a-cat'>Tabs</li>
          <li style={list} className='a-cat'>Hero</li>
          <li style={list} className='a-cat'>Promo Spot</li>
          <li style={list} className='a-cat'>Carousel</li>
          <li style={list} className='a-cat'>Links</li>
          <li style={list} className='a-cat'>Icons</li>
          <li style={list} className='a-cat'>Type</li>
          <li style={list} className='a-cat'>Layout</li>
          <li style={list} className='a-cat'>Breadcrumbs</li>
          <li style={list} className='a-cat'>Forms</li>
          <li style={list} className='a-cat'>Navbar</li>
          <li style={list} className='a-cat'>Animation</li>
          <li style={list} className='a-cat'>Forms</li>
          <li style={list} className='a-cat'>Navbar</li>
          <li style={list} className='a-cat'>Animation</li>
          <li style={list} className='a-cat'>Forms</li>
          <li style={list} className='a-cat'>Navbar</li>
          <li style={list} className='a-cat'>Animation</li>
        </ul>

    </div>
    );
  }
}
