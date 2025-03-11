function TaskList({ tasks, deleteTask }) {
    return (
      <ul className="space-y-3">
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet!</p>
        ) : (
          tasks.map((task) => (
            <li
              key={task._id}
              className="flex justify-between items-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition duration-200"
            >
              <span className="text-gray-700">{task.title}</span>
              <button
                onClick={() => deleteTask(task._id)}
                className="text-red-500 hover:text-red-700 transition duration-200"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    );
  }
  
  export default TaskList;