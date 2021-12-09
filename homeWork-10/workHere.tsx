import React, {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";
import { fetchProjects, fetchTotos } from "./mocks/mockFetcher";
import { IProject, ITodo } from "./types";

// Реализуйте хук для получения проектов, используя
// асинхронную функцию fetchProjects. Дайте пользователю
// знать, что происходит загрузка

type loadedData<T> = {
  isLoading: boolean;
  content: T;
};

const useProjects = (): loadedData<IProject[]> => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchProjects().then((project) => {
      setProjects(project);
      setLoading(false);
    });
  }, []);

  return {
    isLoading: loading,
    content: projects
  };
};

// Реализуйте хук для получения todo проектов, используя
// асинхронную функцию fetchTotos. Дайте пользователю
// знать, что происходит загрузка. Реализуйте функцию
// удаления записи todo. Избегайте повторной загрузки
// данных — это сбросит удалённые элементы списка

type deletableLoadedTata<T> = loadedData<T> & {
  remove: (todoId: number) => void;
};

const useTodos = (projectId: number | null): deletableLoadedTata<ITodo[]> => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (projectId != null) {
      setLoading(true);
      fetchTotos(projectId).then((data) => {
        setLoading(false);
        setTodos(data);
      });
    }
  }, [projectId]);

  const removeTodo = useCallback(
    (todoId) => {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    },
    [projectId, todos]
  );

  return {
    isLoading: loading,
    content: todos,
    remove: removeTodo
  };
};

// Допишите компонент фильтра. При нажатии на кнопку "поиск"
// необходимо вызвать onFilter из свойств компонента.
// Дополнительной задачей является минимизация количества
// обновлений компонента (вывод "FilterComponent render" в
// консоль должен быть минимальным)

type FilterProps = {
  onFilter: (search: string) => void;
};

const FilterComponent: FC<FilterProps> = ({ onFilter }) => {
  console.log("FilterComponent render");
 
  const inputRef = useRef<HTMLInputElement>(null);

  const searchHandler = () => {
    onFilter((inputRef.current?.value.length) ? inputRef.current.value : '');
  }

  return (
    <div>
      Фильтр:&nbsp;
      <input ref={inputRef}/>
      <button onClick={searchHandler}>поиск</button>
    </div>
  );
};
export { useProjects, useTodos, FilterComponent };
