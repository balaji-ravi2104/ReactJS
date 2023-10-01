import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class Mern extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <h1 style={{ color: 'blue' }}>Welcome to MERN Component </h1>
                <NavLink to='reactjs'>ReactJS</NavLink>
            </div>
        )
    }
}

export default Mern
