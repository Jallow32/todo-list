
import React, { FC, useState } from "react";

import { FaTrash } from "react-icons/fa";

interface activity {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoList: FC = () => {
  const [todos, setTodos] = useState<activity[]>([
  ]); 

  const [input, setInput] = useState<string>("");

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

  const handleClick = () => {
    const newTodo: activity = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleDelete = (id: number, e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>Att göra lista</h1>
      <input
        type="text"
        placeholder="Aktivitet"
        onChange={(e) => setInput(e.currentTarget.value)}
        value={input}
      />
      <br />
      <br />
      <button onClick={handleClick}>Lägg till aktivitet</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <span onClick={(e) => handleDelete(todo.id, e)}>
              <FaTrash />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
