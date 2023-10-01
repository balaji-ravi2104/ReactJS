import React, { useEffect, useState } from 'react'

function Eg02() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect Called');
        document.title = `Clicked ${count} times`
    }, [count])
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
            <br />
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
        </div>
    )
}

export default Eg02


/*
import React, { Component } from 'react'

export class Eg02 extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            name: ''
        }
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count)
            console.log('Component updated')
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
        <br />
        <input type='text' onChange={e => { this.setState({ name: e.target.value }) }}></input>
    </div>
    )
  }
}

export default Eg02
*/