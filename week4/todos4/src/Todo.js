function Todo({todo, completeTodo,deleteTodo}){
    return(
        <li>
            <input type = "checkbox" checked = {todo.isCompleted} onChange = {()=> completeTodo(todo.id)}/>
            <span style={{textDecoration:todo.isCompleted ? "line-through": ""}}>{todo.text}</span>
            <button onClick={()=> deleteTodo(todo.id)}>x</button>
        </li>
    )
}
export default Todo