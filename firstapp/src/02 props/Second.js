import React, { Component } from 'react'

export class Second extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.data1}</h1>
        <p>{this.props.data2}</p>
        <p>{JSON.stringify(this.props.data3)}</p>
        <p>{JSON.stringify(this.props.data4)}</p>
        <p>{JSON.stringify(this.props.data5)}</p>
      </div>
    )
  }
}

export default Second
