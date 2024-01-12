# Todo App
Backend
- Python (Built with 3.12)
- virtualenv
- FastAPI
- Sqlite

Frontend
- React (Built with v18.2.0)
- Materials UI
- Sass

## Setting Up

Backend

```
cd backend
pip install -r requirements.txt
pip install virtualenv
virtualenv venv
venv/Scripts/Activate
python main.py 
```

Frontend
```
cd frontend
npm i 
npm run start
```

### Simple todo / task management app

<img src="https://github.com/mirlz/fastapi-react-todo/blob/main/img/app.png" alt="Add Task" ></img>

This app allows for user to create / edit / delete tasks, for every created task, user can also mark it as done by clicking the checkbox beside each task item. 

#### Add task

<img src="https://github.com/mirlz/fastapi-react-todo/blob/main/img/addnewitem.png" alt="Add Task" ></img>

On inputting task item in the top input bear, either press Enter or click on the return icon to submit new task item. 

<img src="https://github.com/mirlz/fastapi-react-todo/blob/main/img/itemadded.png" alt="Added New Task" ></img>

Upon successful submission, the list will refresh and reflect the latest added item. 

#### Edit task

<img src="https://github.com/mirlz/fastapi-react-todo/blob/main/img/edit.png" alt="Edit Task" ></img>

Click on Edit icon (beside trash icon) to trigger edit mode, in which case the item would then be editable to user to update the chosen task. 

#### Delete task

<img src="https://github.com/mirlz/fastapi-react-todo/blob/main/img/deleteItem.png" alt="Delete Task" ></img>

Click on Delete icon (trash icon) to delete currently chosen task. The list would refresh on deletion.

#### Mark done for task

<img src="https://github.com/mirlz/fastapi-react-todo/blob/main/img/markdone.png" alt="Mark Done" ></img>

Click on the checkbox beside each task item to mark as complete, the item would then show a line through to show that the task is done, edit would be disabled for marked done items. 

#### Error handling

##### Successful operation

<img src="https://github.com/mirlz/fastapi-react-todo/blob/main/img/successSnackbar.png" alt="Success Snackbar" ></img>

On every successful interaction with task item, a snackbar would appear to show that operation has been successful.

##### Error operation

<img src="https://github.com/mirlz/fastapi-react-todo/blob/main/img/errorSnackbar.png" alt="Error Snackbar" ></img>

On error with any user operation, a similar snackbar would appear to show that the previous operation has failed.

##### General 400 error

<img src="https://github.com/mirlz/fastapi-react-todo/blob/main/img/error.png" alt="Error Page" ></img>

A large component for generic error handling.