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

    renderRedux() {
        return this.props.piece.map((dataObj, i) => {
            return (<h1 style={{paddingLeft: '20%'}}>{`#`}{i + 1}{`: `}{dataObj.text}</h1>)
        }
    )
                
    }

    render() {
        return(
            <li
            /* on click, dispatch the ADD_TODO action
            *
            * IMPORTANT!!!!!!!!!!!!!!!! -------------
            *
            * move click function to real add todo button
            * AND
            * pass in input event data into the object that is going into the addTodo() action creator
            *
            */
            onClick={() => this.props.addTodo({name: "a new challenger appeared"})}
            >
            
            



            {this.props.pass[0].name} {/* shown to users */}

            {this.renderRedux()}
        </li>
        )
    }
}



/**
 * 
    NOTES
 */

// binds/maps state to props
function mapStateToProps(state) {
    // whatever is returned will show up as props in Todo
    return {
      piece: state.addEm
    }
}


//binds action creator to props
function mapDispatchToProps(dispatch) {
    // ?? 
    // could possibly just throw the action creator inside
    return bindActionCreators({ addTodo }, dispatch)
}


// can also assign connect function to an object and then export that instead
  // literally connects react to redux
  export default connect(mapStateToProps, mapDispatchToProps)(Todo)




// export default Todo