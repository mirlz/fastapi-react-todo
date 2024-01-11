from fastapi import FastAPI, status, HTTPException
from database import Base, engine, ToDo
from pydantic import BaseModel
from sqlalchemy.orm import Session

# Create ToDoRequest Base Model
class ToDoRequest(BaseModel):
    task: str

# Create the database
Base.metadata.create_all(engine)

# Initialize app
app = FastAPI()

@app.get("/")
def root():
    return "todo"

@app.post("/todo", status_code=status.HTTP_201_CREATED)
def create_todo(todo: ToDoRequest):
    # create a new database session
    session = Session(bind=engine, expire_on_commit=False)

    # create an instance of the ToDo database model
    tododb = ToDo(task = todo.task)

    # add it to the session and commit it
    session.add(tododb)
    session.commit()

    # grab the id given to the object from the database
    id = tododb.id

    # close the session
    session.close()

    # return the id
    return f"created todo item with id {id}"

@app.get("/todo/{id}")
def read_todo(id: int):

    # create a new database session
    session = Session(bind=engine, expire_on_commit=False)

    # get the todo item with the given id
    todo = session.query(ToDo).get(id)

    # close the session
    session.close()

    # check if todo item with given id exists. If not, raise exception and return 404 not found response
    if not todo:
        raise HTTPException(status_code=404, detail=f"todo item with id {id} not found")

    return f"todo item with id: {todo.id} and task: {todo.task}"

@app.put("/todo/{id}")
def update_todo(id: int, task: str):
    session = Session(bind=engine, expire_on_commit=False)

    todo = session.query(ToDo).get(id)

    if todo:
        todo.task = task
        session.commit()

    session.close()

    if not todo: 
        raise HTTPException(status_code=404, detail=f"todo item with id {id} not found")
    
    return todo

@app.delete("/todo/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_todo(id: int):
    session = Session(bind=engine, expire_on_commit=False)

    todo = session.query(ToDo).get(id)

    if todo: 
        session.delete(todo)
        session.commit()
        session.close()
    else: 
        raise HTTPException(status_code=404, detail=f"todo item with id {id} not found")
    
    return None

@app.get("/todo")
def read_todo_list():
    session = Session(bind=engine, expire_on_commit=False)

    todo_list = session.query(ToDo).all()

    session.close()

    return todo_list