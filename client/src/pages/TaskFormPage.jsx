import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

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
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };
    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTasks(dataValid);
    }
    navigate("/tasks");
  });

  return (
    <>
      <div className="flex h-[calc(100vh-100px)] w-full items-center justify-center ">
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md  ">
          <form onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              autoFocus
              {...register("title")}
              className="w-full bg-zinc-700 text-whites px-4 py-2 rounded-md my-2"
            />
            <label htmlFor="description">Description</label>
            <textarea
              rows="3"
              placeholder="Description"
              {...register("description")}
              className="w-full bg-zinc-700 text-whites px-4 py-2 rounded-md my-2"
            ></textarea>
            <label htmlFor="date">Date</label>
            <input
              className="w-full bg-zinc-700 text-whites px-4 py-2 rounded-md my-2"
              type="date"
              {...register("date")}
            />
            <div className="flex items-center justify-center mt-2">
              <button className="bg-red-400 px-4 py-2 rounded-lg text-white hover:bg-red-600 transition-all">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
