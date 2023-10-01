import React, { Component } from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message : 'Welcome All'
        }
    }
    changeMessage(){
        this.setState({
            message : 'Thanks You For Subscribing'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;