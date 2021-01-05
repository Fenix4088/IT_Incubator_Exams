import React, { ChangeEvent, useState, MouseEvent } from "react";
import { TaskType, todoListType } from "./TodoListApp";
import { TodolistItem } from "./TodolistItem";
import s from "./Todolist.module.scss";

type TodoListType = {
  id: string;
  todoListInfo: todoListType;
  todoListTasks: Array<TaskType>;
  addTask: (taskValue: string, todoListID: string) => void;
  removeTask: (todoListID: string, taskId: string) => void;
  changeStatus: (
    todoListID: string,
    taskId: string,
    statusValue: boolean
  ) => void;
};

export const TodoList: React.FC<TodoListType> = (props) => {
  const { todoListInfo, todoListTasks } = props;

  const [inputValue, setInputValue] = useState<string>("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  };
  const addTask = (e: MouseEvent<HTMLButtonElement>): void => {
    props.addTask(inputValue, props.id);
    setInputValue("");
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
            id={todoListTask.taskId}
            todoListID={props.id}
            removeTask={props.removeTask}
            taskName={todoListTask.taskName}
            taskStatus={todoListTask.isDone}
            changeStatus={props.changeStatus}
          />
        ))}
      </ul>
    </div>
  );
};
