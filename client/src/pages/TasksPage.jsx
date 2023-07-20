import React, { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

export default function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) return <div>No tasks</div>;
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 ">
        {tasks.map((task) => {
          return <TaskCard task={task} key={task._id} />;
        })}
      </div>
    </>
  );
}
