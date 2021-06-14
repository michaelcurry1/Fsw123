import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import TodoList from './TodoList';


ReactDom.render(
    <React.StrictMode>
        <TodoList />
    </React.StrictMode>,
    document.getElementById('root')
);