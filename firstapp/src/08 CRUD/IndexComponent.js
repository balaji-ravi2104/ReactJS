import React, { Component } from 'react'
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateComponent from './CreateComponent';
import ReadComponent from './ReadComponent';
import UpdateComponent from './UpdateComponent';
import DeleteComponent from './DeleteComponent';
export class IndexComponent extends Component {
  render() {
    return (
      <div>
        <div className="nav nav-pills">
          <Router>
            <div className="nav-item">
              <NavLink to="/create" className='nav-link'>Create</NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/read" className='nav-link'>Read</NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/update" className='nav-link'>Update</NavLink>
            </div>
            <div className="nav-item">
              <NavLink to="/delete" className='nav-link'>Delete</NavLink>
            </div>
            <br></br>
            <Routes>
              <Route path='/create' element={<CreateComponent />}></Route>
              <Route path='/read' element={<ReadComponent />}></Route>
              <Route path='/update' element={<UpdateComponent />}></Route>
              <Route path='/delete' element={<DeleteComponent />}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    )
  }
}

export default IndexComponent
