import React from "react";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  return (
    <div className="mb-2 bg-slate-600 max-w-md w-full p-10 rounded-md">
      <h2 className=" text-2xl mb-2">{task.title} </h2>
      <p>{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>

      <div className="flex justify-end gap-x-2 ">
        <button
          className="bg-slate-500 hover:bg-red-500 transition-all rounded-md p-1"
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          Delete
        </button>
        <Link
          className="bg-slate-500 hover:bg-indigo-500 transition-all rounded-md p-1"
          to={`/tasks/${task._id}`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default TaskCard;
