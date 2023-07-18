import React from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";

export default function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { tasks, createTasks } = useTasks();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createTasks(data);
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
