import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Mean extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <h1 style={{ color: 'red' }}>Welcome to MEAN Component </h1>
                <NavLink to='angular'>Angular</NavLink>
            </div>
        )
    }
}

export default Mean
