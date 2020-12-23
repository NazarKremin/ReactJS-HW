import React, {useState} from 'react';

function UseState() {


    const [counter, setCounter] = useState(0)
    const [state, setState] = useState({
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    })

    function add() {
        setCounter(counter +1)
    }

    function delet() {
        setCounter(counter -1)
    }

    function user() {
        setState(prev =>{
            return{
                ...prev,
                name:'Burak'
            }
        })
    }

    return (
        <div>
            <h1>Намбер {counter}</h1>
            <button onClick={add}>Добавити</button>
            <button onClick={delet}>Видалити</button>
            <button onClick={user}>User</button>
            <div>{JSON.stringify(state,null,2)}</div>
        </div>
    );
}

export default UseState;