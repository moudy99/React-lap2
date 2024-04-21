import { useEffect, useState } from "react";

const ShowTasks = (props) => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [isDone, setIsDone] = useState({});

  useEffect(() => {
    const updatedTasks = props.tasks.filter(
      (task) => !deletedTasks.includes(task.id)
    );
    setFilteredTasks(updatedTasks);
  }, [props.tasks, deletedTasks]);

  const deleteTask = (taskId) => {
    setDeletedTasks([...deletedTasks, taskId]);
  };

  const clickOnDone = (taskId) => {
    setIsDone((prevIsDone) => ({
      ...prevIsDone,
      [taskId]: !prevIsDone[taskId],
    }));
  };

  return (
    <div className="show-tasks" style={{ transition: "all 1s easy " }}>
      <h1 className="text-center">Lets Do</h1>
      {filteredTasks.map((task) => (
        <div className="card-body" key={task.id}>
          <div className="d-flex justify-content-between align-items-center gap-4">
            <div className="d-flex align-items-center flex-column justify-content-center">
              <label htmlFor="done" className="text-success fw-bold">
                Done
              </label>
              <input
                type="checkbox"
                name="done"
                id="done"
                className=""
                style={{ width: "20px", height: "20px" }}
                checked={isDone[task.id]}
                onChange={() => clickOnDone(task.id)}
              />
            </div>
            <input
              type="text"
              value={task.task || ""}
              readOnly
              className="form-control my-3 bg-dark text-bg-dark fw-bold fs-2"
            />
            <button
              onClick={() => deleteTask(task.id)}
              className="btn btn-danger btn-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowTasks;
