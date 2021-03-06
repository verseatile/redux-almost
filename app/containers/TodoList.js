import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/action_index' // action index
import { bindActionCreators } from 'redux'
import Todo from '../components/Todo.jsx'

class TodoList extends Component {
    constructor(props) {
        super(props)

        //local component state if needed
    }

    renderList() { // since this is iterating, the todo is a single item from the overall array
        return this.props.todos.map((todo, i) => {
          return (
            <Todo key={i} value={todo}/>
          )
        })
      }

    render() {
        return(
            <div>
            <h3 onClick={() => this.props.addTodo({name: "a new challenger appeared"})}>
            ADD ME
            </h3>
            {/* <input onChange={ (event) => this.setState({ input: event.target.value }) } type="text" />
        {console.log(this.state.input)} */}
                <ul>
                    {/*this.renderList()*/}
                    <Todo  />
                </ul>
            </div>
        )
    }
}


/**
 * 
 *               REDUX LAND
 * 
 */


// map state to a react prop | or anything to be honest
function mapStateToProps(state) {
    // whatever is returned will show up as props in TodoList
    return {
      todos: state.todos
    }
  }
  
  // binds/maps state to props
  function mapDispatchToProps(dispatch) {
    // ?? 
    // binds 
    return bindActionCreators({ addTodo }, dispatch)
  }
  
  
  // can also assign connect function to an object and then export that instead
  // literally connects react to redux
  export default connect(mapStateToProps, mapDispatchToProps)(TodoList)