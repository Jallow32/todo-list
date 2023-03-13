import React, { FC, useState } from "react";
import { TodoForm } from "../components/TodoOne";
import { TodoItem } from "../components/TodoTwo";

interface Activity {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: FC = () => {
  const [todos, setTodos] = useState<Activity[]>([]);

  const handleAdd = (text: string) => {
    const newTodo: Activity = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>Att göra lista</h1>
      <TodoForm onAdd={handleAdd} />
      <br />
      <br />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => handleToggle(todo.id)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};
