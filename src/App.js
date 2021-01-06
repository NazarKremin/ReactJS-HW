import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    INC_COUNTER,
    DEC_COUNTER,
    RESET,
} from './redux/action-types'

export default function App () {
    const counter = useSelector(({counter}) => counter)
    const dispatch = useDispatch();

const inc = () => dispatch({type:INC_COUNTER});
const dec = () => dispatch({type:DEC_COUNTER});
const res = () => dispatch({type:RESET});

    return (
        <div>
            {counter}
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
            <button onClick={res}>res</button>
        </div>
    );
};

