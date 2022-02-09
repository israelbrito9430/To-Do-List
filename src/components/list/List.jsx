const List = ({listTodos,oninputTodo}) => {
    const inputTodo = todo => {
        oninputTodo(todo)
    }
    return (
        <div>
            {listTodos.map(todo => (
                <div onClick={() => inputTodo(todo)}>
                    {todo}
                </div>
            ))}
        </div>
    )
}

export default List;