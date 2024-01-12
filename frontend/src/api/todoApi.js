export const getTodos = async () => {
  try {
    const response = await fetch("http://localhost:8000/todo");

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const addTodo = async (newTodo) => {
  try {
    const response = await fetch("http://localhost:8000/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo)
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const deleteTodo = async ({ id }) => {
  try {
    const response = await fetch(`http://localhost:8000/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: { "id": id }
    });
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return response;
  } catch (err) {
    throw err;
  }
};

export const editTodo = async ({ id, task, completed }) => {
  try {
    const response = await fetch(`http://localhost:8000/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task, completed })
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  } catch (err) {
    throw err;
  }
};