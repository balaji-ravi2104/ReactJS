import React, { Component } from 'react'
// import url,{flag,score,db_config} from './variable'
import * as obj from './variable'
import fun_one, { auth } from "./function"
export default class myComponents extends Component {
    render() {
        return (
            <div>
                {/*<p style={{color:'rgb(255,0,0)'}}>Url :- {url}</p>
                <p style={{color:'rgb(200,0,0)'}}>Flag :- {flag} </p>
                <p style={{color:'rgb(180,0,0'}}>Score:- {score} </p>
                <p style={{color:'rgb(160,0,0'}}>Database Configuration:- {JSON.stringify(db_config)} </p>*/}
                
                <p style={{ color: 'rgb(0,255,0)' }}>Url :- {obj.default}</p>
                <p style={{ color: 'rgb(0,200,0)' }}>Flag :- {obj.flag} </p>
                <p style={{ color: 'rgb(0,180,0' }}>Score:- {obj.score} </p>
                <p style={{ color: 'rgb(0,160,0' }}>Database Configuration:- {JSON.stringify(obj.db_config)} </p>
                <p style={{ color: 'rgb(0,0,255)' }}>{fun_one()} </p>

                <form onSubmit={this.login}>
                    <input type='text' placeholder='Enter Username' name='uname'></input>
                    <br /><br />
                    <input type='password' placeholder='Enter Password' name='upwd'></input>
                    <br /><br />
                    <input type='submit' value='Login'></input>
                </form>
            </div>
        )
    }
    login = (e) => {
        let uname = e.target.uname.value
        let upwd = e.target.upwd.value
        let login = auth(uname, upwd)
        if (login)
            alert('Login Success')
        else
            alert('Login Failed')
    }
}
