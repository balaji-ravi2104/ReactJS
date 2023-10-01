import React, { Component } from 'react'

export class LazyComponent extends Component {
  render() {
    return (
      <div>
        <h2 style={{color:'red'}}>I am from LazyComponent</h2>
      </div>
    )
  }
}

export default LazyComponent
