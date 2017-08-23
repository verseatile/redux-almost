import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo } from '../actions/action_index' // action index
import { bindActionCreators } from 'redux'

// ({obj, obj2}) to grab multiple props

class Todo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li
            /* on click, dispatch the ADD_TODO action */
            onClick={() => addTodo({name: 'yo'})}
            >
            {console.log(this.props.pass)}
            {this.props.pass[0].name} {/* shown to users */}
        </li>
        )
    }
}



/**
 * 
 * EXPERIMENTAL!!
 * 
 * DONT USE "this.props"!!!! if its not a class!
 * 
 * use es6 destructuring, by pulling the object,
 * making for example this.props.addTodo(),
 * simply addTodo()
 * 
 */

function mapStateToProps(state) {
    // whatever is returned will show up as props in Todo
    return {
      piece: state.addEm
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
  export default connect(mapStateToProps, mapDispatchToProps)(Todo)




// export default Todo