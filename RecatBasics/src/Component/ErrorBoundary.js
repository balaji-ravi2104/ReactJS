import React from 'react'

function ErrorBoundary({errorName}) {
    if(errorName === 'joker'){
        throw new Error ('Not a error')
    }
    return (
        <div>
            {errorName}
        </div>
    )
}

export default ErrorBoundary