import React, { useEffect, useState } from 'react'


function Egg03() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    
    const logMouse = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect Called');
        window.addEventListener('mousemove', logMouse)
    }, [])

    return (
        <div>
            X - {x}  Y - {y}
        </div>
    )
}

export default Egg03


/*
import React, { Component } from 'react'

export class Egg03 extends Component {
    constructor() {
        super()
        this.state = {
            x: 0,
            y: 0
        }
    }
    logMouse = e => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    componentDidMount() {
        window.addEventListener('mousemove', this.logMouse)
        console.log(this.state)
    }

  render() {
    return (
      <div>
        X - {this.state.x}  Y - {this.state.y}
      </div>
    )
  }
}

export default Egg03
*/