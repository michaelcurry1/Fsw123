// import {useState} from 'react';
import './App.css';
import TodoList from './TodoList'
// import {listOfTodos} from './TodoStore';
import TodoForm from './TodoForm';
import UserProvider from "./context"
function App() {

  return (
    <UserProvider>
      <h1>Todo App 6</h1>
      <TodoForm />
      <TodoList />

    </UserProvider>
  )
}
export default App;
