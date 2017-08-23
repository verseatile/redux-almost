import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'
import { bindActionCreators } from 'redux'

/*** REDUX AWARE ***/

class TodoList extends Component {

  renderList() { // since this is iterating, the todo is a single item from the overall array
    return this.props.todos.map((todo) => {
      return (
        <li
          /* on click, dispatch the ADD_TODO action */
          onClick={() => this.props.addTodo(todo)}
        >
          {todo.name}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="">
        {this.renderList()}
      </ul>
    )
  }
}

// map state to a react prop | or anything to be honest
function mapStateToProps(state) {
  // whatever is returned will show up as props in TodoList
  return {
    todos: state.todos
  }
}

//map action dispatch to a property??
function mapDispatchToProps(dispatch) {
  // ?? 
  // could possibly just throw the action creator inside
  return bindActionCreators({ addTodo }, dispatch)
}


// can also assign connect function to an object and then export that instead
// literally connects react to redux
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
