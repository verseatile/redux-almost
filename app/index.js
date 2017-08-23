/**
 * THE MAIN OF MAIN
 */

import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './styles/main.css'
import todoApp from './reducers/reducer_index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

console.log('its webpack bruh')

//this function basically just creates an object...that is your state...the arg is that object
let store = createStore(todoApp) // creates the store, places reducer index inside

store.subscribe(() => console.log(store.getState())) // for every update, return the state to the console

console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('render-target'))

  /**
   * 
   * so... REDUCERS ARE LOGIC PIECES/FUNCTIONS THAT HANDLE 
   * THE LOGIC FOR A BLOCK/OBJECT INSIDE THE OVERALL STATE OBJECT
   * 
   */