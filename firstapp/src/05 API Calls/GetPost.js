import React, { Component } from 'react'
import axios from 'axios'
export class GetPost extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            status: ""
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.insert} className='w-50 m-auto'>
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
                    <input type='submit' value='Insert' className='btn btn-outline-success'></input>
                </form>
                <button onClick={this.getData}>getData</button>
                <table className='table
                        table-info
                        table-striped
                        table-hover
                        table-bordered
                        w-50 m-auto'>
                    <thead>
                        <th>Sr No</th>
                        <th>P_id</th>
                        <th>P_name</th>
                        <th>P_cost</th>
                    </thead>
                    <tbody>
                        {this.state.products.map((e, i) => (
                            <tr>
                                <td>{i + 1} </td>
                                <td>{e.p_id}</td>
                                <td>{e.p_name}</td>
                                <td>{e.p_cost} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>{this.state.status}</p>
            </div>
        )
    }

    getData = () => {
        this.setState({
            status: "Loading"
        })
        axios.get('https://bewildered-puce-wear.cyclic.app/fetch')
            .then((proRes) => {
                this.setState({
                    products: proRes.data,
                    status: ""
                })
            }).catch(error => {
                console.log(error);
            })
    }

    insert = (e) =>{
        e.preventDefault()
        let obj = {
            "p_id": parseInt(e.target.p_id.value),
            "p_name": e.target.p_name.value,
            "p_cost": parseInt(e.target.p_cost.value)
        }
        axios.post("https://bewildered-puce-wear.cyclic.app/insert", obj)
            .then((posRes) => {
                console.log(posRes)
                this.setState({
                    status: posRes.data.insert
                })
            }, (errRes) => {
                console.log(errRes)
            })
    } 
}

export default GetPost
