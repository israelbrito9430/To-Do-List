import { useState } from 'react';
import './Search.scss';
export const Search =({onAddTodo,initialvalue})=> {
    const [todo,setTodo] = useState('');
    const addTodo = todo => {
        onAddTodo(todo)
        setTodo('')
    }
    return(
        <div>
            <input type="search" placeholder='Buscar' value={initialvalue} onChange={(e) => setTodo(e.target.value)}/>
            <button onClick={() => addTodo(todo)}>Add ToDo</button>
        </div>
    )
}