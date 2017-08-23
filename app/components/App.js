import React, { Component } from 'react'
import Sidebar from './Sidebar'
import BodyArea from './BodyArea'
import TodoList from '../containers/TodoList'
import AddTodo from '../containers/AddTodo'

export default class App extends Component {
  render() {
    return (
      <div className="app-main" style={{textAlign: 'center', fontFamily: "Avenir", fontSize: 36}}>
        <Sidebar />
        <div style={{ backgroundColor: '#999999', height: 250, marginTop: -8, marginRight: -8 }} className="hero">

        </div>
         {/*<TodoList />
         <BodyArea />*/}
         <AddTodo />
         <TodoList />
      </div>
    );
  }
}
