//example using useRef
//ref doesn't trigger refresh or rerender
import React, { useState, useRef, useEffect  } from 'react';
import Button from '../ReusableComponent/Button';

const EmailSignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  let focusRef = useRef(null);

  useEffect(() => {
    if(name.length >= 10)
      focusRef.current.focus();
  }, [name]); //dependency array


  return (
    <section>
      <h2>Email Signup</h2>
      <input type="text" value={name} placeholder="Name" onChange={(e) => {
        setName(e.target.value);
      }}/>
      <input type="text" value={email} placeholder="Email" onChange={(e) => {
        setEmail(e.target.value);
      }} />
       <Button ref={focusRef} text={'Submit'}/>
    </section>
  )
}

export default EmailSignUp
