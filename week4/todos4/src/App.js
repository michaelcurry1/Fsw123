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
  return(
    <>
    <h1>Todo App</h1>
    <TodoForm addTodo = {addTodo}/>
    <TodoList todos = {todos} completeTodo = {completeTodo} deleteTodo = {deleteTodo}/>
    </>
  )
}
export default App;


// class Todo4App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       aryTodos: todos.map((item, index) =>
//         ({
//           key: index,
//           id: item.id,
//           text: item.text,
//           isCompleted: item.isCompleted
//         })
//       )
//   }
// }

//  completeTodo = (e) =>{
//   if (e) {
//     let aryUpdatedTodos = [...this.state.aryTodos]
//     let index = aryUpdatedTodos.findIndex (item => item.id ===e);
//     let updatedTodo = {...aryUpdatedTodos[index]}
//     if(updatedTodo.isCompleted) {
//       updatedTodo.isCompleted = false
//     } else{
//       updatedTodo.isCompleted = true
//     }
//     aryUpdatedTodos[index] = updatedTodo
//     this.setState({
//       aryTodos: aryUpdatedTodos
//     })
//   }
// }
// deleteTodo = (e) => {
//   if (e) {
//     let aryDeletedTodos = [...this.state.aryTodos]
//     let index = aryDeletedTodos.findIndex( item => item.id === e);
//     aryDeletedTodos.splice(index, 1)
//     this.setState({
//       aryTodos: aryDeletedTodos
//     })
//   }  
// }

// render() {
//   const todoLists = this.state.aryTodos.map((item, index) => {
//     return (
//       <Todo4List
//       key = {item.key}
//       id = {item.id}
//       text = {item.text}
//       isCompleted = {item.isCompleted}
//       completeTodo = {this.completeTodo}
//       deleteTodo = {this.deleteTodo}
//       />
//     )
//   })
//   return (
//     <div className= 'Todo3Span'>
//       <div className= "Todo3Span">My Todo List Number 3</div>
//       {todoLists}
//     </div>
//     )
//   }
// }

// export default App;

