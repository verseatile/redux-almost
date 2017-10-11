import React, { Component } from 'react'
import Button from './minimal/Button'

class ChatInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msgBar: ""
        }
    }



    render() {
        


        return(
            <div style={{ bottom: 0, position: 'fixed' }}>
                <input placeholder="placeholder" style={{ border: this.props.border, height: parseInt(this.props.height), width: parseInt(this.props.width)}}  />
              

              {/*<div style={{ display: 'inline-block', float: 'right', width: '100%' }}>
                <Button margin='0px 0px 0px 0px' padding="18px 16px" text="SEND" bgColor="#333333" textColor="#FFF" weight="500" border="6px solid black" />
        </div>*/}
            </div>
        )
    }
}


export default ChatInput