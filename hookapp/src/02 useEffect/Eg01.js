import React, { useEffect, useState } from 'react'

function Eg01() {
    const[count,setCount] = useState(0)

    useEffect(()=>{
        document.title = `Clicked ${count} times`
    })
 
  return (
    <div>
        <button onClick={()=> setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default Eg01


/*
import React, { Component } from 'react'

export class Eg01 extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate() {
        document.title = `Clicked ${this.state.count} times`
    }

    render() {
        return (
            <div>
                <button onClick={
                    () => this.setState({ count: this.state.count + 1 })
                }>
                    Click Me
                </button>
                <br />
                Clicked {this.state.count} times
            </div>

        )
    }
}

export default Eg01
*/