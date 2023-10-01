import React from 'react'

function FragmentDemo() {
  return (
    // React.Fragment will prevent the extra nodes added from the DOM
    // Fragments let you group a list of children without adding extra nodes to the DOM.
    <React.Fragment>
        <h1>Balaji</h1>
        <p>Computer and Communication Engineering</p>
        <p>Love Coding</p>
    </React.Fragment>
  )
}

export default FragmentDemo