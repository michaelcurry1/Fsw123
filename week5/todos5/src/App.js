import {useState} from 'react';
import './App.css';
import TodoList from './TodoList'
import {listOfTodos} from './TodoStore';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from 'uuid';

function App(){
  const [todos, setTodo] = useState(listOfTodos)
  const addTodo = text => {
  const newTodo = [
    ...todos, 
    {
      id: uuidv4(),
      text:text,
      isCompleted:false
    }
  ]
  setTodo(newTodo)
  }
  const completeTodo = id =>{
    const tempTodo = [
      ...todos
    ]
    const index = tempTodo.findIndex(todo => todo.id === id)
    tempTodo[index].isCompleted = !tempTodo[index].isCompleted
    setTodo(tempTodo)
  }
  const deleteTodo = id =>{
    const tempTodo = [
      ...todos
    ]
    const newTodo = tempTodo.filter(todo => todo.id !==id)
    setTodo(newTodo)

  }

  const editTodo = (id, text) => {
    const tempTodo = [...todos];
    const index = tempTodo.findIndex(todo => todo.id === id);
    tempTodo[index].text = text;
    setTodo(tempTodo)
  }

  return(
    <>
    <h1>Todo App 5</h1>
    <TodoForm addTodo = {addTodo}/>
    <TodoList todos = {todos} completeTodo = {completeTodo} deleteTodo = {deleteTodo} editTodo = {editTodo}/>
    </>
  )
}
export default App;
