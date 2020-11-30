import React from 'react'
import './styles/Badge.css'
function Badge({children, color, ...props}) {
    return (
        <span className={`badge ${color}`} {...props}>
            {children}
        </span>
    ) 
}

export default Badge
