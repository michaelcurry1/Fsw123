import React from "react"
import Todos from "./todo2Store.js"
import './App.css'
import TodoList from './Todo2List'

function Todo2App() {
  return (
    <div className="TodoApp2">
      <h1 className = "centerTodo">List Of Todos</h1>
      {console.log(Todos[0].text)}
    <TodoList todoItems={Todos}/>
    </div>
  );
}

export default Todo2App;
