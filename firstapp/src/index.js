import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MEAN from './multicompo/MEAN';
import MERN from './multicompo/MERN'
import MEVN from './multicompo/MEVN'
import Fullstack from './multicompo/fullstack';
import StateComponent from './Stateeg/StateComponent';
import StateChange from './01 changeState/stateChange';
import First from './02 props/First';
import FormInput from './03 FormInputs/FormInput';
import Parent from './04 lifecycle/Parent';
import GetPost from './05 API Calls/GetPost';
import MyComponents from './06 imports & exports/myComponents';
import MainComponent from './07 SPA/MainComponent';
import IndexComponent from './08 CRUD/IndexComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <First /> */}
    {/* <MEAN />
    <MERN />
    <MEVN/> */}
    {/* <Fullstack /> */}
    {/* <StateComponent /> */}
    {/* <StateChange /> */}
    {/* <First /> */}
    {/* <FormInput /> */}
    {/* <Parent /> */}
    {/* <GetPost /> */}
    {/* <MyComponents /> */}
    {/* <MainComponent /> */}
    <IndexComponent />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
