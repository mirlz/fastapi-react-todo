export const getTodos = async () => {
  try {
    const response = await fetch("http://localhost:8000/todo");

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.log("getTodos(): Error: ", err);
  }
};

export const addTodo = async (newTodo) => {
  try {
    const response = await fetch("http://localhost:8000/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo)
    });
    const result = await response.json();
    console.log("addTodo(): Success:", result);
  } catch (err) {
    console.log("addTodo(): Error: ", err);
  }
};

export const deleteTodo = async ({ id }) => {
  try {
    await fetch(`http://localhost:8000/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: { "id": id }
    });
    console.log("deleteTodo(): Success");
  } catch (err) {
    console.log("deleteTodo(): Error: ", err);
  }
};

export const editTodo = async ({ id, task }) => {
  try {
    const response = await fetch(`http://localhost:8000/todo/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: task })
    });
    const result = await response.json();
    console.log("editTodo(): Success:", result);
  } catch (err) {
    console.log("editTodo(): Error: ", err);
  }
};