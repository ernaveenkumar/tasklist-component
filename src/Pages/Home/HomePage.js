import { useState } from 'react';

export const HomePage = () => {
  const [tasks, setTask] = useState([
    { id: 5271, name: 'Learn React', completed: false },
    { id: 5272, name: 'Learn Javascript', completed: true },
    {
      id: 5273,
      name: 'Submit Ethics application to supervisor',
      completed: true,
    },
  ]);

  function handleClick(id) {
    setTask(
      tasks.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  }

  function handleDelete(id) {
    setTask(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <table class="table-fixed">
        <thead>
          <tr>
            <th>Task Id</th>
            <th>Task Name</th>
            <th>Status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <>
              <tr id={task.id}>
                <td className="list-group-item text-2xl w-44 text-center">
                  {task.id}
                </td>
                <td className="list-group-item text-2xl text-left w-2/3">
                  {task.name}
                </td>
                <td className="list-group-item text-2xl">
                  <button
                    className={
                      task.completed
                        ? 'btn-success px-1 py-1 mx-1 my-1 rounded'
                        : 'btn-primary px-1 py-1 mx-1 my-1 rounded'
                    }
                    onClick={() => handleClick(task.id)}
                  >
                    {task.completed ? 'completed' : 'Pending'}
                  </button>
                </td>
                <td className="list-group-item text-2xl">
                  <button
                    className="btn-danger px-1 py-1 mx-1 my-1 rounded"
                    onClick={() => handleDelete(Number(task.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <ul className="list-group flex flex-col"></ul>
    </div>
  );
};
