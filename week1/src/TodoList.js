import React from 'react';
import Todos from './TodoCard.js';
import './TodoList.css'


function TodoList() {
    return (
    <div>
        <div className='Todo1span'></div>
        <Todos />
    </div>
    );
  }
  
  export default TodoList;