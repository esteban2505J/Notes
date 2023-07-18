import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTasks, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTaks() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log();
        setValue("title", task.data.title);
        setValue("description", task.data.description);
      }
    }
    loadTaks();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTasks(data);
    }
    navigate("/tasks");
  });

  return (
    <>
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md ">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Title"
            autoFocus
            {...register("title")}
            className="w-full bg-zinc-700 text-whites px-4 py-2 rounded-md my-2"
          />
          <textarea
            rows="3"
            placeholder="Description"
            {...register("description")}
            className="w-full bg-zinc-700 text-whites px-4 py-2 rounded-md my-2"
          ></textarea>
          <div className="flex items-center justify-center mt-2">
            <button className="bg-red-400 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-all">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
