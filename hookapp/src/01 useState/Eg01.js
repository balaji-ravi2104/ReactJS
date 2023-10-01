import React, { useState } from 'react'

function Eg01() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <h1 className='text-primary'>{count}</h1>
      <button className="btn btn-outline-info px-5 m-3" onClick={()=> {setCount(count+1)}}>Inc</button>
      <button  className="btn btn-outline-info px-5 m-3" onClick={()=>{setCount(count-1)}}>Dec</button>
    </div>
  )
}

export default Eg01


/*
import React, { Component } from 'react'

export class classCounter extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
  render() {
    return (
      <div>
        <p className='btn btn-success mx-2 btn-lg'>{this.state.count}</p>
        <button onClick={this.increment}>Inc</button>
        <button className='btn btn-outline-primary p-3' className='btn btn-outline-primary p-3' onClick={this.decrement}>Dec</button>
      </div>
    )
  }
  increment = () =>{
    this.setState({
        count : this.state.count+1
    })
  }
  decrement = () =>{
    this.setState({
        count : this.state.count-1
    })
  }
}

export default classCounter
*/