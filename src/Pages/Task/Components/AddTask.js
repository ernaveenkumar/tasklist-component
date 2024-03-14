import { useState } from "react";

function AddTask({ taskList, setTask }) {

  const [taskName, setTaskName] = useState("");
  const [taskProgress, setTaskProgress] = useState(Boolean(false));

  function handle_taskNameOnchange(e) {
    console.log(e.target.value);
    setTaskName(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTaskName(event.target.task_name.value);
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      name: taskName,
      completed: taskProgress
    }
    setTask([...taskList, newTask]);
    handleReset();
  }

  function handleReset() {
    setTaskName("");
    setTaskProgress(Boolean(false));
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-full bg-lime-400 text-2xl ">
        <div className="flex flex-row justify-between items-center">
          <div className="w-6/12 basis-1/2">
            <label htmlfor="tast_name" >Task name :</label>
            <input className="form-input w-8/12 px-1.5 py-1.5" type="text" name="task_name" id="task_name" placeholder="Task.." rautoComplete="off" maxLength="20" onChange={(event) => handle_taskNameOnchange(event)} value={taskName} />
          </div>
          <div className="form-select basis-1/4">
            <select className="form-select px-1.5 py-1.5 w-full" aria-label="Default select example" name="task_progress" onChange={(event) => { console.log(event.target.value); setTaskProgress(Boolean(event.target.value)) }} value={taskProgress}>
              <option value="true">completed</option>
              <option value="false">Pending</option>
            </select>
          </div>
          <div className="flex flex-col self-end">
            <span className="grp-form-field basis-1/4">
              <input className="btn btn-success px-1 py-1 mx-1 my-1 rounded form-submit" type="submit" value="Add Task" />
              <span> | </span>
              <button className="btn btn-danger px-1 py-1 mx-1 my-1 rounded form-reset " type="button" onClick={handleReset}>Reset </button>
            </span>
          </div>
        </div>
      </form>

    </>
  )
}

export default AddTask
