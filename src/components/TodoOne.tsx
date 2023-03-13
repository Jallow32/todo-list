import React, { FC, useState } from "react";

interface Props {
  onAdd: (text: string) => void;
}

export const TodoForm: FC<Props> = ({ onAdd }) => {
  const [input, setInput] = useState<string>("");

  const handleClick = () => {
    if (input.trim() !== "") {
      onAdd(input.trim());
      setInput("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Aktivitet"
        onChange={(e) => setInput(e.currentTarget.value)}
        value={input}
      />
      <button onClick={handleClick}>Lägg till aktivitet</button>
    </>
  );
};
