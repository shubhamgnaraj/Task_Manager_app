import React, { useContext, useState } from "react";
import { taskContext } from "./Context/taskContext";

function TaskItem({ task }) {
  const [toggle, setToggle] = useState(false);
  const { removeTask, updateTask } = useContext(taskContext);
  const [editTask, setEditTask] = useState(false);
  const [inputEdit, setInputEdit] = useState(task.task);

  const toggleOnChange = (event) => {
    setToggle(event.target.checked);
  };

  const handleEditTask = () => {
    if (editTask) {
      updateTask(task.id, inputEdit);
    }
    setEditTask(!editTask);
  };

  const handleEditInput = (e) => {
    setInputEdit(e.target.value);
  };

  return (
    <div className="flex items-center w-full p-2">
      <div
        className={`relative p-2 w-[80%] input-box border-none outline-none font-bold bg-gray-700 flex items-center gap-x-2 ${
          toggle ? "opacity-[0.6]" : ""
        }`}
      >
        <input type="checkbox" onChange={toggleOnChange} checked={toggle} />
        <div
          className={`capitalize ${
            toggle ? "line-through decoration-black" : ""
          }`}
        >
          {editTask ? <input
              type="text"
              value={inputEdit}
              className="absolute left-6 bottom-[-1vh] p-2 bg-transparent border-none outline-none text-white "
              onChange={handleEditInput}
              onBlur={handleEditTask}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleEditTask();
                }
              }}
            /> : task.task }
        </div>

        <button
          className={`rotate-90 absolute right-2 rounded-full p-2 ${
            editTask ? "rotate-45" : ""
          }`}
          onClick={handleEditTask}
        >
          ✏️
        </button>
      </div>
      <button
        className="bg-red-500 p-2 add-btn min-width-btn"
        onClick={() => removeTask(task.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default TaskItem;
