import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
      <form>
        <input type="text" placeholder="What needs to be done" />
      </form>
    </div>
  );
};

export default TodoApp;
