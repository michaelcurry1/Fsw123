import React from 'react';
import './App.css';


function Todo2App() {
  return (
    <div className="TodoApp2">
      <h1 className = "centerTodo">List Of Todos</h1>
      {console.log(Todos[0].text)}
    <TodoList todoItems={Todos}/>
    </div>
  );
}
const completeTodo = (id) =>{

}
const deleteTodo = (id) =>{
  
}


export default Todo2App;

