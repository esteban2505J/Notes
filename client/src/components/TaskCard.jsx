import React from "react";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import { BiTrash, BiPencil } from "react-icons/bi";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  return (
    <div className="mb-2 bg-slate-600 max-w-md w-full p-10 rounded-md">
      <h2 className=" text-2xl mb-2">{task.title} </h2>
      <p>{task.description}</p>
      <p>{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>

      <div className="flex justify-end gap-x-2 ">
        <button
          className="bg-slate-500 hover:bg-red-500 transition-all rounded-md p-1 text-xl"
          onClick={() => {
            deleteTask(task._id);
          }}
        >
          <BiTrash />
        </button>
        <Link
          className="bg-slate-500 hover:bg-indigo-500 transition-all rounded-md p-1 text-xl"
          to={`/tasks/${task._id}`}
        >
          <BiPencil />
        </Link>
      </div>
    </div>
  );
}

export default TaskCard;
