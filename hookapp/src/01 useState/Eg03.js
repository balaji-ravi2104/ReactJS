import React, { useState } from 'react'

function Eg03() {
    const [times, setTimes] = useState([])
    let lap = () => {
        let today = new Date()
        setTimes([
            ...times,
            {
                id: times.length,
                value: today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds()
            }
        ])
    }
    return (
        <div className="container mt-5">
            <button className="btn btn-outline-warning" onClick={lap}>
                Lap
            </button>
            <ol className="m-2 p-2">
                {
                    times.map(item => (
                        <li key={item.key}>{item.value}</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Eg03