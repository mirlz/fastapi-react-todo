import { createContext, useState, useEffect } from 'react';

export const TodosContext = createContext({});

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState();

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:8000/todo");
    const todos = await response.json();
    setTodos(todos);
  }

  const value = { todos, fetchTodos };

  useEffect(() => {
    fetchTodos();
  }, []);

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
};