import React, { Component } from 'react'
import axios from 'axios';
import url from './url'
export class ReadComponent extends Component {
  constructor() {
    super()
    this.state = {
      products: [],

    }
  }
  componentDidMount() {
    this.setState({
      status: "Loading"
    })
    axios.get(url + '/fetch').then((resData) => {
      this.setState({
        products: resData.data,
        status: ''
      })
    }).catch(error => {
      console.log(error);
    })
  }
  render() {
    return (
      <div className='container mt-2'>
        <div className='text-warning h1'>I am from Read Component</div>
        <p>{this.state.status}</p>
        {/* <p>{JSON.stringify(this.state.products)}</p> */}
        <table className='table table-borderd table-dark table-striped table-hover w-50 mx-auto'>
          <thead>
            <tr>
              <th>Sr No </th>
              <th>P_id</th>
              <th>P_name</th>
              <th>P_cost</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((element, index) => (
              <tr>
                <td>{index + 1} </td>
                <td>{element.p_id}</td>
                <td>{element.p_name}</td>
                <td>{element.p_cost}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    )
  }
}

export default ReadComponent
