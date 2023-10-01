import React, { Component } from 'react'
import axios from 'axios'
import url from './url'

export class DeleteComponent extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }
  render() {
    return (
      <div className='container mt-2'>
        <div className='text-warning h1'>I am from Delete Component</div>
        <div className='w-50 '>
          <form onSubmit={this.delete}>
            <input type='number'
              placeholder='p_id'
              name='p_id'
              className='form-control my-2'></input>
            <input type='submit' value='Delete' className='btn btn-outline-success'></input>
          </form>
          <h1 className='text-primary'>{this.state.status} </h1>
        </div>
      </div>
    )
  }
  delete = (e) => {
    e.preventDefault()
    this.setState({
      status: 'Loading'
    })
    let obj = {
      p_id: parseInt(e.target.p_id.value)
    }
    axios.post(url + '/delete', obj)
      .then((posRes) => {
        console.log(posRes)
        this.setState({
          status: posRes.data.delete
        })
      }, (errRes) => {
        console.log(errRes)
        this.setState({
          status: errRes.message
        })
      })
  }

}

export default DeleteComponent
