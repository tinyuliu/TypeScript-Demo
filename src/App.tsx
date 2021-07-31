import { useState } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

import './App.css';

function App() {
  const [ todos , setTodos ] = useState<Todo[]>([]);

  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TypeScript')
  // ];

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
