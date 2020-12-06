import React, { forwardRef } from 'react';

const Button = forwardRef((props,ref) => {
return <button ref={ref} >{props.text}</button>

})

export default Button;