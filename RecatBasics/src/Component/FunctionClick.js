import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button Clicked");
    }
  return (
    <div>
        <button onClick = {clickHandler}>click me</button>
    </div>
  )
}

export default FunctionClick