import { ITodo } from "../types";

interface TodoCardProps {
  todo: ITodo;
  deleteCallback: (id: number) => void;
  id: number;
}

//TODO: сделать компонент TodoCard
export const TodoCard: React.FC<TodoCardProps> = ({todo, deleteCallback, id}) => {
  const handleDelete = () => {
    deleteCallback(id);
  };
  return (
    <li className="todoCard">
      <p>{todo.text}</p>
      <button className="delete_todo" onClick={handleDelete}>
        X
      </button>
    </li>
  );
};
