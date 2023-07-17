import { useContext, createContext, useState } from "react";
import { createTasksRequest, getTasksRequest } from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useContext must be used within an AuthProvider");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const res = await getTasksRequest();
    setTasks(res.data);
  };

  const createTasks = async (task) => {
    const res = await createTasksRequest(task);
    console.log(res);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTasks,
        getTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
