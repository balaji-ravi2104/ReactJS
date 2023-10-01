import React from 'react'
import ReactDOM from 'react-dom'

function DemoPortal() {
    // By using the createPortal we can add the child elements into our own div tag
  return ReactDOM.createPortal(
    <h1>DemoPortal</h1>,
    // By using this document.getElementById we can add our elememts based on the id
    document.getElementById('potral-id')
  )
}

export default DemoPortal