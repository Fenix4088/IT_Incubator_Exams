import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { v1 } from "uuid";

import s from "./Todolist.module.scss";

export type FilterType = "all" | "completed" | "active";

export type todoListType = {
  id: string;
  title: string;
  filter: FilterType;
};
export type TaskType = {
  taskId: string;
  taskName: string;
  isDone: boolean;
};
type TasksType = {
  [key: string]: Array<TaskType>;
};

export const TodoListApp = () => {
  const todoListOne: string = v1();
  const todoListTwo: string = v1();

  const [todoLists, setTodoLists] = useState<Array<todoListType>>([
    { id: todoListOne, title: "What to learn?", filter: "all" },
    { id: todoListTwo, title: "What to read?", filter: "all" },
  ]);
  const [tasks, setTasks] = useState<TasksType>({
    [todoListOne]: [
      { taskId: v1(), taskName: "Html", isDone: true },
      { taskId: v1(), taskName: "Css", isDone: false },
      { taskId: v1(), taskName: "Js", isDone: false },
      { taskId: v1(), taskName: "React.js", isDone: true },
    ],
    [todoListTwo]: [
      { taskId: v1(), taskName: "js.info.us", isDone: false },
      { taskId: v1(), taskName: "react.docs", isDone: true },
    ],
  });

  const addTask = (taskValue: string, todoListID: string): void => {
    const newTask = {
      taskId: v1(),
      taskName: taskValue,
      isDone: false,
    };

    tasks[todoListID] = [newTask, ...tasks[todoListID]];
    setTasks({ ...tasks });
  };
  const removeTask = (todoListID: string, taskId: string): void => {
    tasks[todoListID] = tasks[todoListID].filter(
      (task) => task.taskId !== taskId
    );
    setTasks({ ...tasks });
  };
  const changeStatus = (
    todoListID: string,
    taskId: string,
    statusValue: boolean
  ): void => {
    const currentElement = tasks[todoListID].find(
      (task) => task.taskId === taskId
    );
    if (currentElement) {
      currentElement.isDone = statusValue;
      setTasks({ ...tasks });
    }
  };

  const changeFilterStatus = (
    todoListID: string,
    filterValue: FilterType
  ): void => {
    const currentTodoList = todoLists.find(
      (todoList) => todoList.id === todoListID
    );
    if (currentTodoList) {
      currentTodoList.filter = filterValue;
      setTodoLists([...todoLists]);
    }
  };

  const filterTodoList = (
    filterValue: FilterType,
    todoListID: string
  ): Array<TaskType> => {
    let todoList = tasks[todoListID];
    if (filterValue === "active") {
      todoList = todoList.filter((item) => item.isDone);
    }

    if (filterValue === "completed") {
      todoList = todoList.filter((item) => !item.isDone);
    }

    return todoList;
  };

  return (
    <div className={s.todoListWrapper}>
      {todoLists.map((todoList) => {
        const filteredTasks = filterTodoList(todoList.filter, todoList.id)

        return (
          <TodoList
            key={todoList.id}
            id={todoList.id}
            todoListInfo={todoList}
            todoListTasks={filteredTasks}
            addTask={addTask}
            removeTask={removeTask}
            changeStatus={changeStatus}
            changeFilterStatus={changeFilterStatus}
          />
        );
      })}
    </div>
  );
};
