import React, { Component, Suspense,lazy } from 'react'
import {NavLink,BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Mean from './Mean';
import Mern from './Mern';
import Mevn from './Mevn';
import Angular from './Angular';
import ReactJS from './ReactJS';
import VueJS from './Vue';

 
const LazyComponent = lazy(()=>import('./LazyComponent'))

export class MainComponent extends Component {
  render() {
    return (
      <div>
        <Router>
            <NavLink to="/mean" style={{marginRight :'30px'}}>MEAN</NavLink>
            <NavLink to="/mern" style={{marginRight :'30px'}}>MERN</NavLink>
            <NavLink to="/mevn" style={{marginRight :'30px'}}>MEVN</NavLink>
            <NavLink to="/myLazy">Lazy</NavLink>
            <Routes>
                <Route path="/mean" element={<Mean />}></Route>
                <Route path="/mern" element={<Mern />}></Route>
                <Route path="/mevn" element={<Mevn />}></Route>
                <Route path="/myLazy" element={<Suspense fallback='loading'><LazyComponent /></Suspense>}></Route>
                <Route path="/mean/angular" element={<Angular />}></Route>
                <Route path="/mern/reactjs" element={<ReactJS />}></Route>
                <Route path="/mevn/vue" element={<VueJS />}></Route>
            </Routes>
        </Router>
      </div>
    )
  }
}

export default MainComponent
