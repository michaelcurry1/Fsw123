// import './App.css';
// import Greeting from './Greeting';
// import Reply from './Reply';

// function App() {
//   return (
//   <>
//   <Greeting />
//   <Reply/>
//   </>
//   );
// }

// export default App;

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


