import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/atoms/Button/Button"
import Title from "./components/atoms/Title/Title"
import TodoForm from "./components/molecules/Form"
import TodoList from "./components/organisms/TodoList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          <Button value="hello" />
        </p>
        <Title tag="h1">{"TODO"}</Title>
        <Title tag="h2">{"react"}</Title>
        <TodoForm />
        <TodoList/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
