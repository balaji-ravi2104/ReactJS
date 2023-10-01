import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello Balaji"
      }

      this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler(){
        this.setState({
            message : "Good Bye Balaji"
        })
        // console.log(this);
    }


    // Using Arrow Functions
    // eventHandler = () =>{
    //     this.setState({
    //         message : "Bye Balaji"
    //     })
    // }
    
  render() {
    return (
      <div>
            <div>
                {this.state.message}
            </div>
        {/* <button onClick={()=> this.eventHandler()}>Click</button> */}
        <button onClick={this.eventHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
