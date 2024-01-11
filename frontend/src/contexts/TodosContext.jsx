import { createContext, useState, useEffect } from 'react';

export const TodosContext = createContext({});

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState();
  const value = { todos };

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch("http://localhost:8000/todo")
      const todos = await response.json()
      setTodos(todos);
      console.log(todos)
    }
    fetchAPI();
  }, []);

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
};