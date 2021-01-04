import React, { ChangeEvent, useState, MouseEvent } from "react";
import { TaskType, todoListType } from "./TodoListApp";
import { TodolistItem } from "./TodolistItem";
import s from "./Todolist.module.scss";

type TodoListType = {
  todoListInfo: todoListType;
  todoListTasks: Array<TaskType>;
};

export const TodoList: React.FC<TodoListType> = (props) => {
  const { todoListInfo, todoListTasks } = props;

  const [inputValue, setInputValue] = useState<string>("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  };
  const addTask = (e: MouseEvent<HTMLButtonElement>): void => {

  };

  return (
    <div className={s.todoList}>
      <h3>{todoListInfo.title}</h3>
      <input onChange={onChangeHandler} type="text" value={inputValue} />
      <button onClick={addTask}>Add task</button>
      <ul>
        {todoListTasks.map((todoListTask) => (
          <TodolistItem
            key={todoListTask.taskId}
            taskName={todoListTask.taskName}
            taskStatus={todoListTask.status}
          />
        ))}
      </ul>
    </div>
  );
};
