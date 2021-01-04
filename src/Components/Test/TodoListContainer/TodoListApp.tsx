import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { v1 } from "uuid";

import s from "./Todolist.module.scss";

export type todoListType = {
  id: string;
  title: string;
};

export type TaskType = {
  taskId: string;
  taskName: string;
  status: "completed" | "active";
};

type TasksType = {
  [key: string]: Array<TaskType>;
};

const todoListOne: string = v1();
const todoListTwo: string = v1();

const todoLists: Array<todoListType> = [
  { id: todoListOne, title: "What to learn?" },
  { id: todoListTwo, title: "What to read?" },
];

const tasks: TasksType = {
  [todoListOne]: [
    { taskId: v1(), taskName: "Html", status: "completed" },
    { taskId: v1(), taskName: "Css", status: "active" },
    { taskId: v1(), taskName: "Js", status: "active" },
    { taskId: v1(), taskName: "React.js", status: "completed" },
  ],
  [todoListTwo]: [
    { taskId: v1(), taskName: "js.info.us", status: "completed" },
    { taskId: v1(), taskName: "react.docs", status: "active" },
  ],
};

export const TodoListApp = () => {

  return (
    <div className={s.todoListWrapper}>
      {todoLists.map((todoList) => (
        <TodoList
          key={todoList.id}
          todoListInfo={todoList}
          todoListTasks={tasks[todoList.id]}
        />
      ))}
    </div>
  );
};
