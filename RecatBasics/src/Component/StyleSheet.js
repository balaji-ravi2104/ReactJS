import React from 'react'
import './myStyle.css';

function StyleSheet(props) {
    let classname = props.primary ? 'primary' : 'secondary';
  return (
    <div>
        <h1 className= {`${classname} font-xl`}>This is Head tag</h1>
        {/* <h1 className='primary'>This is Head Tag</h1> */}
    </div>
  )
}

export default StyleSheet