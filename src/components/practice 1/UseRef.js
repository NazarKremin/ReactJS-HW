import React, {useState,useRef,useEffect} from 'react';

function UseRef() {
    const [value, setValue]  = useState('Press F')
    const count = useRef('')
    const prevCount = useRef('')

    useEffect(()=>{
        count.current++;
    })

    useEffect(()=>{
        prevCount.current = value
    },[value])

    return (
        <div>
            <h2>Count Value {count.current}<br/></h2>
            <input type='text' onChange={event => setValue(event.target.value)}/>
            <h2>Input Value {value}</h2>
            <h3>Prev Value {prevCount.current}</h3>
        </div>
    );
}

export default UseRef;