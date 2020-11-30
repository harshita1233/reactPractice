import React, { useState } from 'react';
import './styles/Characterinput.css'
const CharacterCounterInput = ({ text, defaults }) => {

  const [count, setCount] = useState('');
  const maxLength = 20;
  
  const getCharacters = (e) => {
      setCount(e.target.value)
  };
  return <div className={`counterInput ${count.length > maxLength ? "tooLong": ''}`}>
    <div>
      {defaults.map((b) => {
        return <button onClick={() => setCount(b)} key={b}>{b}</button>
      })}
    </div>
    <textarea
      placeholder={text}
      value={count}
      onChange={(e) => getCharacters(e)}
      className='tooLong'
    />
    <div>{count.length}/{maxLength}</div>
  </div>
}

export default CharacterCounterInput