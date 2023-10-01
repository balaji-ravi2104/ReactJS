import React, { useState } from 'react'

function Eg02() {
    const [name, setName] = useState({ firstName: 'first', lastName: 'last' });
    return (
        <div>
            <form>
                <input type='text' value={name.firstName} onChange={(e) => setName({ ...name, firstName: e.target.value })} />
                <input type='text' value={name.lastName} onChange={(e) => setName({ ...name, lastName: e.target.value })} />
                <h3>First Name:- {name.firstName}</h3>
                <h3>Last Name:- {name.lastName}</h3>
            </form>
        </div>
    )
}

export default Eg02