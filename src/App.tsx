import { useEffect, useState } from "react";

export default function App() {
  const [todos, setTodos] = useState<{ id: number; title: string }[]>([]);
  useEffect((): void => {
    // const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
    //   console.log(`Running after 2 seconds`);
    // }, 2000);
    // return () => {
    //   clearTimeout(timer);
    // };
    const getTodos = async (): Promise<void> => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data);
    };
    getTodos();
  }, []);
  return (
    <div>
      <h2>Todo App</h2>
      {todos.map((todo: { id: number; title: string }) => (
        <h2 key={todo.id}>{todo.title}</h2>
      ))}
    </div>
  );
}
