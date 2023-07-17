import React, { useEffect } from "react";
import { useTasks } from "../context/TasksContext";

export default function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <div>No tasks</div>;
  return (
    <>
      <h1 className="mb-3">Tasks Page</h1>
      <div>
        {tasks.map((task) => {
          return (
            <div key={task._id} className="mb-2">
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </div>
          );
        })}
      </div>
      <div></div>
      <div></div>
    </>
  );
}
