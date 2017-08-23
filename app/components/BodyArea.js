import React, { Component } from 'react'
import Button from './Button'
import Wizzop from './Wizzop'

const styles = {
  marginLeft: 280,
  width: '66%',
  textAlign: 'left'
}

export default class BodyArea extends Component {
  render() {
    return (
      <div className="body-content" style={styles}>

        {/* add headline here */}
        <Wizzop />
        {/* <div className="rando-text">
          <h1 className='item-head'>Buttons</h1>
          <Button title="words"/>
          <img className="badge-icon" src="./assets/wip.svg" alt="wip"></img>
          <p className='rando'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida volutpat nunc quis lacinia. Morbi luctus, elit id aliquam euismod, dui diam hendrerit eros, at auctor eros eros ut mi.
            Aliquam accumsan fringilla turpis et aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id volutpat est. Mauris porttitor tristique sem,
            eget consectetur nisi posuere eu. Vivamus feugiat dui lectus, eget finibus nisi consequat ac. Praesent odio enim, tristique sed augue nec, scelerisque dictum dolor. Duis tellus metus, eleifend
            eu ultrices quis, cursus eu augue. Phasellus varius ipsum in arcu ornare, id bibendum dolor consequat. Fusce volutpat semper justo, eu euismod nisl eleifend nec. Vestibulum vel volutpat orci.
            Nam suscipit eget eros at bibendum. Aenean ac odio sed tellus pharetra aliquam sit amet ac urna.
          </p>
          <p className='rando'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida volutpat nunc quis lacinia. Morbi luctus, elit id aliquam euismod, dui diam hendrerit eros, at auctor eros eros ut mi.
            Aliquam accumsan fringilla turpis et aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id volutpat est. Mauris porttitor tristique sem,
            eget consectetur nisi posuere eu. Vivamus feugiat dui lectus, eget finibus nisi consequat ac. Praesent odio enim, tristique sed augue nec, scelerisque dictum dolor. Duis tellus metus, eleifend
            eu ultrices quis, cursus eu augue. Phasellus varius ipsum in arcu ornare, id bibendum dolor consequat. Fusce volutpat semper justo, eu euismod nisl eleifend nec. Vestibulum vel volutpat orci.
            Nam suscipit eget eros at bibendum. Aenean ac odio sed tellus pharetra aliquam sit amet ac urna.
          </p>
          <h1 id='cards' className='item-head'>Cards</h1>
          <img className="badge-icon" src="./assets/wip.svg" alt="wip" />
          <p className='rando'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida volutpat nunc quis lacinia. Morbi luctus, elit id aliquam euismod, dui diam hendrerit eros, at auctor eros eros ut mi.
            Aliquam accumsan fringilla turpis et aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id volutpat est. Mauris porttitor tristique sem,
            eget consectetur nisi posuere eu. Vivamus feugiat dui lectus, eget finibus nisi consequat ac. Praesent odio enim, tristique sed augue nec, scelerisque dictum dolor. Duis tellus metus, eleifend
            eu ultrices quis, cursus eu augue. Phasellus varius ipsum in arcu ornare, id bibendum dolor consequat. Fusce volutpat semper justo, eu euismod nisl eleifend nec. Vestibulum vel volutpat orci.
            Nam suscipit eget eros at bibendum. Aenean ac odio sed tellus pharetra aliquam sit amet ac urna.
          </p>
          <p className='rando'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida volutpat nunc quis lacinia. Morbi luctus, elit id aliquam euismod, dui diam hendrerit eros, at auctor eros eros ut mi.
            Aliquam accumsan fringilla turpis et aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id volutpat est. Mauris porttitor tristique sem,
            eget consectetur nisi posuere eu. Vivamus feugiat dui lectus, eget finibus nisi consequat ac. Praesent odio enim, tristique sed augue nec, scelerisque dictum dolor. Duis tellus metus, eleifend
            eu ultrices quis, cursus eu augue. Phasellus varius ipsum in arcu ornare, id bibendum dolor consequat. Fusce volutpat semper justo, eu euismod nisl eleifend nec. Vestibulum vel volutpat orci.
            Nam suscipit eget eros at bibendum. Aenean ac odio sed tellus pharetra aliquam sit amet ac urna.
          </p>
          <h1 id='tabs' className='item-head'>Tabs</h1>
          <img className="badge-icon" src="./assets/wip.svg" alt="wip" />
          <p className='rando'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida volutpat nunc quis lacinia. Morbi luctus, elit id aliquam euismod, dui diam hendrerit eros, at auctor eros eros ut mi.
            Aliquam accumsan fringilla turpis et aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id volutpat est. Mauris porttitor tristique sem,
            eget consectetur nisi posuere eu. Vivamus feugiat dui lectus, eget finibus nisi consequat ac. Praesent odio enim, tristique sed augue nec, scelerisque dictum dolor. Duis tellus metus, eleifend
            eu ultrices quis, cursus eu augue. Phasellus varius ipsum in arcu ornare, id bibendum dolor consequat. Fusce volutpat semper justo, eu euismod nisl eleifend nec. Vestibulum vel volutpat orci.
            Nam suscipit eget eros at bibendum. Aenean ac odio sed tellus pharetra aliquam sit amet ac urna.
          </p>
          <p className='rando'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida volutpat nunc quis lacinia. Morbi luctus, elit id aliquam euismod, dui diam hendrerit eros, at auctor eros eros ut mi.
            Aliquam accumsan fringilla turpis et aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id volutpat est. Mauris porttitor tristique sem,
            eget consectetur nisi posuere eu. Vivamus feugiat dui lectus, eget finibus nisi consequat ac. Praesent odio enim, tristique sed augue nec, scelerisque dictum dolor. Duis tellus metus, eleifend
            eu ultrices quis, cursus eu augue. Phasellus varius ipsum in arcu ornare, id bibendum dolor consequat. Fusce volutpat semper justo, eu euismod nisl eleifend nec. Vestibulum vel volutpat orci.
            Nam suscipit eget eros at bibendum. Aenean ac odio sed tellus pharetra aliquam sit amet ac urna.
          </p>
          <h1 id='hero' className='item-head'>Hero</h1>
          <img className="badge-icon" src="./assets/wip.svg" alt="wip" />
          <p className='rando'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida volutpat nunc quis lacinia. Morbi luctus, elit id aliquam euismod, dui diam hendrerit eros, at auctor eros eros ut mi.
            Aliquam accumsan fringilla turpis et aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id volutpat est. Mauris porttitor tristique sem,
            eget consectetur nisi posuere eu. Vivamus feugiat dui lectus, eget finibus nisi consequat ac. Praesent odio enim, tristique sed augue nec, scelerisque dictum dolor. Duis tellus metus, eleifend
            eu ultrices quis, cursus eu augue. Phasellus varius ipsum in arcu ornare, id bibendum dolor consequat. Fusce volutpat semper justo, eu euismod nisl eleifend nec. Vestibulum vel volutpat orci.
            Nam suscipit eget eros at bibendum. Aenean ac odio sed tellus pharetra aliquam sit amet ac urna.
          </p>
          <p className='rando'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida volutpat nunc quis lacinia. Morbi luctus, elit id aliquam euismod, dui diam hendrerit eros, at auctor eros eros ut mi.
            Aliquam accumsan fringilla turpis et aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id volutpat est. Mauris porttitor tristique sem,
            eget consectetur nisi posuere eu. Vivamus feugiat dui lectus, eget finibus nisi consequat ac. Praesent odio enim, tristique sed augue nec, scelerisque dictum dolor. Duis tellus metus, eleifend
            eu ultrices quis, cursus eu augue. Phasellus varius ipsum in arcu ornare, id bibendum dolor consequat. Fusce volutpat semper justo, eu euismod nisl eleifend nec. Vestibulum vel volutpat orci.
            Nam suscipit eget eros at bibendum. Aenean ac odio sed tellus pharetra aliquam sit amet ac urna.
          </p>
          <h1 id='promo' className='item-head'>Promo Spot</h1>
          <img className="badge-icon" src="./assets/wip.svg" alt="wip" />
          <p className='rando'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida volutpat nunc quis lacinia. Morbi luctus, elit id aliquam euismod, dui diam hendrerit eros, at auctor eros eros ut mi.
            Aliquam accumsan fringilla turpis et aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id volutpat est. Mauris porttitor tristique sem,
            eget consectetur nisi posuere eu. Vivamus feugiat dui lectus, eget finibus nisi consequat ac. Praesent odio enim, tristique sed augue nec, scelerisque dictum dolor. Duis tellus metus, eleifend
            eu ultrices quis, cursus eu augue. Phasellus varius ipsum in arcu ornare, id bibendum dolor consequat. Fusce volutpat semper justo, eu euismod nisl eleifend nec. Vestibulum vel volutpat orci.
            Nam suscipit eget eros at bibendum. Aenean ac odio sed tellus pharetra aliquam sit amet ac urna.
          </p>
        </div> */}

      </div>
    );
  }
}
