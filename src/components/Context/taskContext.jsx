import React, { createContext, useEffect, useReducer } from "react";

export const taskContext = createContext({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  updateTask: () => {},
});

const taskReducer = (currState, action) => {
  let newState = currState;
  if (action.type === "ADD_TASK") {
    newState = [...currState, action.payload.task];

  } else if (action.type === "DELETE_TASK") {
    newState = currState.filter((task) => task.id !== action.payload.id);

  } else if (action.type === "UPDATE_TASK") {
    newState = currState.map((task) =>
      task.id === action.payload.id
        ? { ...task , task: action.payload.newTask }
        : task
    );
  }
  return newState 
};

const TaskItemProvider = ({ children }) => {
  const [tasks, dispatchTask] = useReducer(taskReducer, [], () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      task: taskName,
    };

    dispatchTask({ type: "ADD_TASK", payload: { task: newTask } });
  };

  const removeTask = (id) => {
    dispatchTask({ type: "DELETE_TASK", payload: { id } });
  };

  const updateTask = (id, newTask) => {
    dispatchTask({ type: "UPDATE_TASK", payload: { id, newTask } });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <taskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
      {children}
    </taskContext.Provider>
  );
};

export default TaskItemProvider;
