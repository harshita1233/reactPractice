import React, {useState} from 'react';
import '../ReusableComponent/styles/Form.css';
function ControlForm() {
    const [count, setCount] = useState(0);
    const [color, setColor]= useState(10); 

    const subtract = () => {
        if(count > 0)
            setCount(prevCount => prevCount - 1);
            setColor(prevColor => prevColor - 5);
    }

    const add = () => {
        setCount(prevCount => prevCount+1);
        setColor(prevColor => prevColor + 5);
    }
    
    return (
        <section>
            <h2>Controlled Form</h2>
            <div className='counter'>
                <button onClick={subtract}>-</button>
                <input
                    type="number"
                    aria-label="count"
                    value={count}
                    onChange={(e)=>setCount(parseInt(e.target.value))}
                    style={{color:`hsl(${color}, 100%, 50%`}}
                />
                <button onClick={add}>+</button>
            </div>
            
        </section>
    )
}

export default ControlForm
