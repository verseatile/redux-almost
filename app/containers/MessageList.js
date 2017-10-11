import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMsg } from '../actions/action_index' // action index
import { bindActionCreators } from 'redux'
import Button from '../components/minimal/Button'

class MessageList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msgBar: ""
        }


        //console.log(this.state.msg)
    }

    generateButton() {
        

        return (
            <div onClick={() => this.props.addMsg(this.state.msgBar)}
            style={{ display: 'inline' }}>
            <a className="btn" style={{
              display: 'inline-block',
              backgroundColor: '#1F7788',
              // height: 45,
              // width: 160,
              border: '1px solid black',
              //height: parseInt(height),
              //width: parseInt(width),
              color: '#FFF',
              fontFamily: 'Roboto',
              borderRadius: 2,
              marginRight: 30,
              fontWeight: 500,
              padding: '16px 25px'
            }}>
              <span style={{
                verticalAlign: 'middle',
                textAlign: 'center'
              }}>REDUX EVENT</span>
            </a>
          </div>
        )
    }

    populateMsg() {
        //return this.props.msg
        return this.props.msgList.map(function(item) {
            return (
                <div>
                    <a style={{ display: 'block', paddingTop: 20 }} key={item.id}>{item.text}</a>
                    <a style={{display: 'inline'}}> {item.time} </a>
                </div>
            )
        })
        
    }


    componentDidMount() {
        let el = document.querySelector('msg-input')



        //this.setState({ msgBar:  })
    }


    render() {

        return (
            (
                <div style={{ padding: '80px 0px' }} className="message-list">
    
                {this.populateMsg()}
    
                
                
                
                <div style={{ zIndex: 4, marginLeft: -10, bottom: 0, position: 'absolute', width: '100%', backgroundColor: 'black' }}>
                    {/*(() => console.log(this.state.msgBar))()*/}
                    <input onChange={(event) => this.setState({ msgBar: event.target.value })} className="msg-input" placeholder="Say something!" style={{ display: 'inline', fontSize: 14, float: 'left', border: '6px solid', height: 40, width: '55%'}}  />
                    {this.generateButton()}
                </div>

                
              </div>
            )
        )
    }
}

// map state to a react prop | or anything to be honest
function mapStateToProps(state) {
    // whatever is returned will show up as props in TodoList
    return {
      msgList: state.messages
    }
  }
  
  // binds/maps state to props
  function mapDispatchToProps(dispatch) {
    // ?? 
    // binds 
    return bindActionCreators({ addMsg }, dispatch)
  }
  
  
  // can also assign connect function to an object and then export that instead
  // literally connects react to redux
  export default connect(mapStateToProps, mapDispatchToProps)(MessageList)