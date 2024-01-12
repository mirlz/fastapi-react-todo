import { createContext, useState, useEffect } from 'react';
import { getTodos } from "../api/todoApi";

export const TodosContext = createContext({});

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasErr, setHasErr] = useState(false);

  const fetchAndUpdateTodos = async () => {
    await getTodos().then((todos) => {
      setIsLoading(false);
      setTodos(todos);
    }).catch(err => {
      setIsLoading(false);
      setHasErr(true);
      console.log('fetchAndUpdateTodos err: ', err);
    });
  }

  const value = { todos, fetchAndUpdateTodos, isLoading, hasErr };

  useEffect(() => {
    fetchAndUpdateTodos();
  }, []);

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
};