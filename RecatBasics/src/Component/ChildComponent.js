import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Click Me</button> */}
        {/* Or we can pass parameters */}
        <button onClick={() => props.greetHandler('Child')}>Click Me</button>
    </div>
  )
}

export default ChildComponent