import React from "react";
import "./App.css";


function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
    
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
	placeholder="+Add"/>
    </form>
  );
}
function Todo({ todo, index, doneTodo, deleteTodo }) 
{

 return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => doneTodo(index)}><input type="checkbox"/></button>
        <button onClick={() => deleteTodo(index)}>&emsp;Delete&#x1F5D1;</button>
      </div>
    </div>
  );
}



function App() {
   const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const [todos, setTodos] = React.useState([
    {
      text: "To-do 1",
      isCompleted: false
    },
    {
      text: "To-do 2",
      isCompleted: false
    },
    {
      text: "To-do 3",
      isCompleted: false
    }
  ]);

 
  const doneTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todolist">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            doneTodo={doneTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;