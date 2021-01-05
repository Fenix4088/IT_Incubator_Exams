import React, {ChangeEvent} from "react";

type TodolistItem = {
  id: string;
  todoListID: string;
  taskName: string;
  taskStatus: boolean;
  removeTask: (todoListID: string, taskId: string) => void;
  changeStatus: (
    todoListID: string,
    taskId: string,
    statusValue: boolean
  ) => void;
};

export const TodolistItem: React.FC<TodolistItem> = (props) => {
  const { taskName, taskStatus, todoListID, id } = props;

  const removeTask = (): void => {
    props.removeTask(todoListID, id);
  };

  const changeStatus = (e: ChangeEvent<HTMLInputElement>):void => {
    // debugger;
    const checkboxStatus = e.currentTarget.checked;
    props.changeStatus(todoListID, id, checkboxStatus);
  }

  return (
    <li>
      <label>
        <input onChange={changeStatus} type="checkbox" checked={taskStatus}/>
        {taskName}
      </label>
      <button onClick={removeTask}>X</button>
    </li>
  );
};
