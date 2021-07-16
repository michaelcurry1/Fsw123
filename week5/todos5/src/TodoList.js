import Todo from "./Todo";

function TodoList({todos, completeTodo, deleteTodo, editTodo}){
    const lists = todos.map((todo)=>{
        return <Todo key= {todo.id} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} editTodo = {editTodo}/>
    })
    return(
        <div>
            <ul>{lists}</ul>
        </div>
    )
}
export default TodoList
