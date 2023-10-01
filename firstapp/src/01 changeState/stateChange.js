import React, { Component } from 'react'

export default class stateChange extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }

    }
  render() {
    return (
      <div>
        <h1>Welcome to state change component</h1>
        <button onClick={this.dec}>-</button>
        <button>{this.state.count}</button>
        <button onClick={this.inc}>+</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }

  dec = () =>{
    this.setState({
        count : this.state.count
    })
    this.setState(prevState =>{
        prevState.count -=1
    })
  }

  inc = () =>{
    this.setState({
        count : this.state.count
    })
    this.setState(prevState =>{
        prevState.count +=1
    })
  }

// or
// inc = () => {
//     this.setState({
//         count : this.state.count + 1
//     })
// }

  reset = () =>{
    this.setState({
        count : 0
    })
  }
} 
