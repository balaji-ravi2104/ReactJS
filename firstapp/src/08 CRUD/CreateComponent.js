import React, { Component } from 'react'
import axios from 'axios'
import url from './url'
export class CreateComponent extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }
  render() {
    return (
      <div className='container mt-2'>
        <div className='text-info h1'>I am from Create Component</div>
        <div className='w-50 '>
          <form onSubmit={this.insert}>
            <input type='number'
              placeholder='p_id'
              name='p_id'
              className='form-control my-2'></input>
            <input type='text'
              placeholder='p_name'
              name='p_name'
              className='form-control my-2'></input>
            <input type='number'
              placeholder='p_cost'
              name='p_cost'
              className='form-control my-2'></input>
            <input type='submit' value='Create' className='btn btn-outline-success'></input>
          </form>
          <h1 className='text-primary'>{this.state.status} </h1>
        </div>
      </div>
    )
  }

  insert = (e) => {
    e.preventDefault()
    this.setState({
      status: "Loading"
    })

    let obj = {
      "p_id": parseInt(e.target.p_id.value),
      "p_name": e.target.p_name.value,
      "p_cost": parseInt(e.target.p_cost.value)
    }
    axios.post(url + '/insert', obj).then((posRes) => {
      console.log(posRes)
      this.setState({
          status:  posRes.data.insert
      })
  }, (errRes) => {
      console.log(errRes)
  })

  }
}

export default CreateComponent
