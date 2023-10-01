import React, { Component } from 'react'

class ClickCounter2 extends Component {   
     
  render() {
    const {count,incerementCount} = this.props
    return (
      <button onClick={incerementCount}>Clicked {count} times</button>
    )
  }
}

export default ClickCounter2
