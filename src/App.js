import React from 'react';
import './Style.css';
import { useState } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
/*function App() {*/
 // const [username, setUsername] = useState(
    /*initialState is equal to  "Med Fridhi"*/
  //);
  //const [isLogged, setIsLogged] = useState(/*initialState is equal to */ true);
  /*return (
    <div className="App">
      <h1>welcome {username}</h1>
      {isLogged ? <span>You Are logged In</span> : ""}
      <br/>
      <button>Click here disconnect</button>
    </div>
  );*/
 /* return (
    <div className="App">
  <Counter />
  </div>
  )
}
*/
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Apprendre Reactjs",
      isCompleted: false
    },
    {
      text: "Apprendre React Props",
      isCompleted: false
    },
    {
      text: "Apprendre React State",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <div className="card">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
</div>
</div>
  );
}

export default App;


