import AddTask from "./Components/AddTask";
function TaskPage({ taskList, setTask }) {
  return (
    <>
      <AddTask taskList={taskList} setTask={setTask} />
    </>
  )
}
export default TaskPage