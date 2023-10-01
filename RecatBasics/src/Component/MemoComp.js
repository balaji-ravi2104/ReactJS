import React from 'react'

function MemoComp({name}) {
    console.log("Rendering memo");
  return (
    <div>
        {name}
    </div>
  )
}
// React.memo --> is a Higher order Component
export default React.memo(MemoComp)