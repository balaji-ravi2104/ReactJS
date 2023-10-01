import React, { Component } from 'react'

export class FormInput extends Component {
    constructor() {
        super()
        this.state = {
            status: 'Please Login'
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input type='text' placeholder='Enter username' name='uname'></input>
                    <br></br>
                    <input type='password' placeholder='Enter password' name='upwd'></input>
                    <br></br>
                    <input type='submit' value='login'></input>
                </form>
                <h1 style={{ color: 'blue' }}>{this.state.status} </h1>
            </div>
        )
    }

    login = (e) => {
        e.preventDefault()
        let uname = e.target.uname.value
        let upwd = e.target.upwd.value
        if (uname === 'admin' && upwd === 'admin')
            this.setState({ status: 'Login Success' })
        else
            this.setState({ status: 'Login Failed' })
    }
}

export default FormInput
