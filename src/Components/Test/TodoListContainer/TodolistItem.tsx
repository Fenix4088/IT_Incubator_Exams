import React from "react";

type TodolistItem = {
  taskName: string;
  taskStatus: "completed" | "active";
};

export const TodolistItem: React.FC<TodolistItem> = (props) => {
  const {taskName, taskStatus} = props;

  return (
    <li>
      <label>
        <input type="checkbox" />
          {taskName}
      </label>
      <button>X</button>
    </li>
  );
};
