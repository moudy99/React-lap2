import "./ToDoApp.css";
import ShowTasks from "../ShowTasks/ShowTasks";
import { useState } from "react";
const ToDoApp = () => {
  const [tasks, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  function addTaskToList() {
    const newTask = {
      id: Date.now(),
      task: taskInput,
      isDone: false,
    };
    setTask([...tasks, newTask]);
    setTaskInput("");
  }
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <span
              className="input-group-text"
              style={{ backgroundColor: "#7c7ce0", border: "none" }}
            >
              <img
                src="https://jameslex.com/content/images/2022/02/MS-To-Do-Icon-MacOS-512x512@2x-1.png "
                alt="Todo Logo"
                width="24"
                height="24"
              />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Add a new task"
              aria-label="Add a new task"
              aria-describedby="button-addon2"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              style={{ backgroundColor: "#7c7ce0", borderColor: "#7c7ce0" }}
              onClick={addTaskToList}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <ShowTasks tasks={tasks} />
    </div>
  );
};
export default ToDoApp;
