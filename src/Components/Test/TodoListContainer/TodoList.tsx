import React, { ChangeEvent, useState, MouseEvent } from "react";
import { FilterType, TaskType, todoListType } from "./TodoListApp";
import { TodolistItem } from "./TodolistItem";
import s from "./Todolist.module.scss";

type TodoListType = {
  id: string;
  error: string;
  todoListInfo: todoListType;
  todoListTasks: Array<TaskType>;
  addTask: (taskValue: string, todoListID: string) => void;
  removeTask: (todoListID: string, taskId: string) => void;
  changeStatus: (
    todoListID: string,
    taskId: string,
    statusValue: boolean
  ) => void;
  changeFilterStatus: (todoListID: string, filterValue: FilterType) => void;
  removeTodoList: (todoListID: string) => void;
  dismissError: () => void;
};

export const TodoList: React.FC<TodoListType> = (props) => {
  const { todoListInfo, todoListTasks } = props;

  const [inputValue, setInputValue] = useState<string>("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
    props.dismissError();
  };
  const addTask = (e: MouseEvent<HTMLButtonElement>): void => {
    props.addTask(inputValue, props.id);
    setInputValue("");
  };
  const changeFilterAll = (): void => props.changeFilterStatus(props.id, "all");
  const changeFilterActive = (): void =>
    props.changeFilterStatus(props.id, "active");
  const changeFilterCompleted = (): void =>
    props.changeFilterStatus(props.id, "completed");
  const removeTodoList = (): void => {
    props.removeTodoList(props.id);
  };

  return (
    <div className={s.todoList}>
      <h3 className={s.title}>
        {todoListInfo.title}
        <button onClick={removeTodoList}>X</button>
      </h3>
      {props.error && <div className={s.error}>{props.error}</div>}
      <input
        onChange={onChangeHandler}
        type="text"
        value={inputValue}
        className={`${s.mainInput} ${
          props.error ? s.notValidMainInput : s.validMainInput
        }`}
      />
      <button onClick={addTask} className={s.addBtn}>
        Add task
      </button>
      <div className={s.btnsWrap}>
        <button onClick={changeFilterAll} className={s.allFilterBtn}>
          all
        </button>
        <button onClick={changeFilterActive} className={s.activeFilterBtn}>
          active
        </button>
        <button
          onClick={changeFilterCompleted}
          className={s.completedFilterBtn}
        >
          completed
        </button>
      </div>
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
