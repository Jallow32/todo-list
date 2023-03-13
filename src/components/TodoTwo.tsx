import React, { FC } from "react";
import { FaTrash } from "react-icons/fa";

interface Props {
  id: number;
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export const TodoItem: FC<Props> = ({ id, text, completed, onToggle, onDelete }) => {
  const handleDelete = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <li
      onClick={onToggle}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
      <span onClick={handleDelete}>
        <FaTrash />
      </span>
    </li>
  );
};
