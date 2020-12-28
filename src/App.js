import React from 'react';
import {useDispatch, useSelector} from "react-redux";


const App = () => {
    const counter = useSelector(({counter}) => counter);
    const dispatch = useDispatch();
    return (
            <div>
                <h1>{counter}</h1>
                <button onClick={()=> dispatch({type:'INC_COUNTER'})}>+</button>
                <button onClick={()=> dispatch({type:'DEC_COUNTER'})}>-</button>
                <button onClick={()=> dispatch({type:'RESET'})}>reset</button>
            </div>
    );
};

export default App;