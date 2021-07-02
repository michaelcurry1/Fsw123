import React from 'react';
import Header from './components/container/Header';
import Body from './components/container/Body';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Body/>
      </BrowserRouter>
    </div>
  );
}

export default App;
