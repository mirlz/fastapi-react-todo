import { createContext, useState, useEffect } from 'react';
import { getTodos } from "../api/todoApi";

export const TodosContext = createContext({});

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState();

  const fetchAndUpdateTodos = async () => {
    const todos = await getTodos();
    setTodos(todos);
  }

  const value = { todos, fetchAndUpdateTodos };

  useEffect(() => {
    fetchAndUpdateTodos();
  }, []);

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
};