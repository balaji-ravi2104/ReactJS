import React, { Component } from 'react'

class HoverCounter2 extends Component {

  render() {
    const {count,incerementCount} = this.props
    return (
      <h2 onMouseOver={incerementCount}>Hovered {count} times</h2>
    )
  }
}

export default HoverCounter2
