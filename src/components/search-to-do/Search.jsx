import { useState,useEffect } from 'react';
import './Search.scss';
function Search ({onAddTodo,initialvalue}) {
    const [todo,setTodo] = useState('');




     useEffect(() => {
         setTodo(initialvalue)
        console.log('cargo el componente') // Operacion muy costo         
    }, [initialvalue]) 

// use effect solo se ejecutaba una sola vez
// Use effect se ejecutacuando carga el componente Y cuando initlaValue cambie

YA ESTOY LISTO 

    const addTodo = todo => {
        onAddTodo(todo)
        setTodo('')
    }
    return(
        <div>
            <input type="search" placeholder='Buscar' value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button onClick={() => addTodo(todo)}>Add ToDo</button>
        </div>
    )
}
export default Search;