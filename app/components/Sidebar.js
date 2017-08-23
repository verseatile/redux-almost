import React, { Component } from 'react'
import Anime from 'react-anime'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shade: '#999999'
    }


    this.changeFlows = () =>
      this.setState({
        shade: '#333333'
      })


  }



  render() {

    return (
      <div className="sidebar" style={{ backgroundColor: this.state.shade }}>

      <div className="cats" style={{ fontSize: 16, textAlign: 'left' }}>
        <Anime
         targets='.a-cat'
         easing="easeOutElastic"
         duration={3000}
         opacity={0.4}
        //  direction="alternate"
        //  delay={2000}
         loop={false} // no loop
        //  delay={(el, index) => index * 240} // delays each item one by one
        //  translateX='13rem'
        //  scale={[.75, .9]}
       >
        <ul>
          <li onMouseOver={this.changeFlows} className='a-cat'>Buttons</li>
          <li className='a-cat'>Cards</li>
          <li className='a-cat'>Tabs</li>
          <li className='a-cat'>Hero</li>
          <li className='a-cat'>Promo Spot</li>
          <li className='a-cat'>Carousel</li>
          <li className='a-cat'>Links</li>
          <li className='a-cat'>Icons</li>
          <li className='a-cat'>Type</li>
          <li className='a-cat'>Layout</li>
          <li className='a-cat'>Breadcrumbs</li>
          <li className='a-cat'>Forms</li>
          <li className='a-cat'>Navbar</li>
          <li className='a-cat'>Animation</li>
        </ul>
      </Anime>
      </div>

    </div>
    );
  }
}
