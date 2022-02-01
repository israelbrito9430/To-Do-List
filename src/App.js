import './App.scss';
import {Search} from './components/search-to-do/Search'
import {List} from './components/list/List'
import { useState } from 'react';
function App() {
  const [todos,setTodos] = useState(['correr','hacer deporte','leer libro'])
  const [initialtodos,setinitialTodos] = useState([''])

  const addTodo = todo => {
    // todos => 3

    // new Todos es la suma de los viejos "todos" mas el nuevo "todo"
     const newTodos = [...todos,todo]
    // newTodos => 4

    // setTodos remplaza lo que hay en la variable "todos" por lo que le envie 
    setTodos(newTodos)

  }
  const inputTodo = todo => {
    setinitialTodos(todo)
    // const index = todos.indexOf(todo)
    // todos.splice(index,1)
    // const newTodos = [...todos]
    // setTodos(newTodos)
  }
  return (
    <div className="App">
    <Search initialvalue={initialtodos} onAddTodo={todo => addTodo(todo)}/>
    <List listTodos={todos} oninputTodo={todo => inputTodo(todo)}  />
    </div>
  );
}

export default App;
