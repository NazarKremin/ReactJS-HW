import React, {useState, useEffect} from 'react';

function App() {

    const [type, setType] = useState('users' )
    const [data, setData] = useState()

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json) )
    },[type])

    return (
        <div>
            <h1>{type}</h1>
            <button onClick={() => setType('users')}>Users</button>
            <button onClick={() => setType('posts')}>Posts</button>
            <button onClick={() => setType('todos')}>Todos</button>
            <div>{JSON.stringify(data,null,2)}</div>
        </div>
    );
}

export default App;