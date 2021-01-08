import {incCounter, dexCounter, resetCounter , fetchTodos} from "./components/action-creators";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react"

function App() {

    const { todos, counter } = useSelector(
        ({ counter: { counter }, todos: { todos } }) => ({
            todos,
            counter
        })
    );
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const inc = () => dispatch(incCounter())
    const dex = () => dispatch(dexCounter())
    const reset = () => dispatch(resetCounter())

    return (
        <div>
            <>
            <h1>Counter {counter}</h1>
            <button onClick={inc}>Inc</button>
            <button onClick={dex}>Dec</button>
            <button onClick={reset}>Rest</button>

                {todos.map((todo) => (
                    <h2>
                        {todo.id} - {todo.title}
                    </h2>
                ))}
            </>
        </div>
    );
}

export default App;
