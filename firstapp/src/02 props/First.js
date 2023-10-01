import React, { Component } from 'react'
import Second from './Second'

export class First extends Component {
    constructor(){
        super()
        this.state = {
            tech : `Javascript`,
            data: 'Data from db Soon...!',
            version: 18.2,
            flag: true,
            subs: ['ML', 'Maths', 'AI', 'IP', 'FSD'],
            obj: {
                fe: 'ReactJS',
                be: 'NodeJS',
                db: 'MongoDB'
            },
            products: [
                { "p_id": 111, "p_name": "P_one", "p_cost": 10000 },
                { "p_id": 222, "p_name": "P_two", "p_cost": 20000 },
                { "p_id": 333, "p_name": "P_three", "p_cost": 30000 },
                { "p_id": 444, "p_name": "P_four", "p_cost": 40000 },
                { "p_id": 555, "p_name": "P_five", "p_cost": 50000 }
            ]
        }
    }
  render() {
    return (
      <div>
        <h1>Welcome to props example</h1>
        <p>{this.state.tech}</p>
        <button onClick={this.changeState}>Change data</button>
        <Second data1 = {this.state.tech}></Second>
        <Second data2 = {this.state.data}></Second>
        <Second data3 = {this.state.flag}></Second>
        <Second data4 = {this.state.obj}></Second>
        <Second data5 = {this.state.products}></Second>
      </div>
    )
  }

  changeState = () =>{
    this.setState({
        tech : `ReactJS`
    })
  }
}

export default First
