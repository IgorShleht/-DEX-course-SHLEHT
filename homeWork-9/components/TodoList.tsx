import React from "react";
import { ITodo } from "../types";
import { TodoCard } from "./TodoCard";

interface ITodoListProps {
  todos: ITodo[];
  deleteCallback: (id: number) => void;
}

//TODO: сделать TodoList компонент
export const TodoList: React.FC<ITodoListProps> = ({todos, deleteCallback}) => {
  return (
    <ul>
      <p>{todos.length ? "Список" : "Пусто"}</p>
      {todos.map((todo) => (
        <TodoCard
          id={todo.id}
          key={todo.id}
          todo={todo}
          deleteCallback={deleteCallback}
        />
      ))}
    </ul>
  );
};
