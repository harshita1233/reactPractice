import React from 'react'

function Button({text, ...props}) {
     console.log(props)
    return (
        <div>
            <button {...props}>{text}</button>
            {/* <h1>{props}</h1> */}
        </div>
    )
}

export default Button
