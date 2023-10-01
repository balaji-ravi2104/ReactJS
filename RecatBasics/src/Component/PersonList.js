import React from 'react'

function PersonList({person}) {
  return (
    <div>
        <h2>
            I am {person.id}. I am {person.name}. I Know {person.skill}
        </h2>
    </div>
  )
}

export default PersonList