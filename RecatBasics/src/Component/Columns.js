import React from 'react'

function Columns() {
    const items = []
    // <>.....</> we can replace this syntax instead of <React.Fragment> but.. we can able to pass the key
  return (
    <React.Fragment>
        {/* We can pass the Key in Fragment..... but keys are only allowed */}
        {/* {
            items.map(item =>(
                <React.Fragment key={items.id}>
                    <h1>Title</h1>
                    <p>{items.title}</p>
                </React.Fragment>
            ))
        } */}
        <td>Balaji</td>
        <td>Ravi</td>
    </React.Fragment>
  )
}

export default Columns