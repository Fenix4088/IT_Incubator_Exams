import React, {ChangeEvent} from "react";
import s from "./Todolist.module.scss"

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
    const checkboxStatus = e.currentTarget.checked;
    props.changeStatus(todoListID, id, checkboxStatus);
  }

  return (
    <li className={s.listItem}>
      {/*      <label>
        <input onChange={changeStatus} type="checkbox" checked={taskStatus}/>
        {taskName}
      </label>*/}
      <div className={s.checkboxWrap}>
        <input
          onChange={changeStatus}
          type="checkbox"
          id={props.id}
          checked={taskStatus}
          className={s.checkbox}
        />
        <label htmlFor={props.id} className={s.label}></label>
        <span>{taskName}</span>
        <button onClick={removeTask} className={`${s.deleteBtn} ${s.deleteBtnSmall}`}>
          X
        </button>
      </div>
    </li>
  );
};
