import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Mevn extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <h1 style={{ color: 'green' }}>Welcome to MEVN Component </h1>
                <NavLink to='vue'>VueJS</NavLink>
            </div>
        )
    }
}

export default Mevn
