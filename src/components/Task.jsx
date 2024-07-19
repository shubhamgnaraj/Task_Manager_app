import React, { useContext, useRef, useState } from "react";
import { taskContext } from "./Context/taskContext";

function Task() {
  const inputElem = useRef();
  const { addTask } = useContext(taskContext);

  const handleOnTask = () => {
    const inputOf = inputElem.current.value;
    inputElem.current.value = "";

    inputOf ? addTask(inputOf) : alert("Please Enter Some Task Then Add");
  };
  return (
    <div className=" flex items-center p-2 w-full">
      <input
        type="text"
        placeholder="Enter your task "
        className="p-2 w-[80%] input-box border-none outline-none text-black font-bold"
        ref={inputElem}
      />
      <button
        className="bg-green-600 p-2 add-btn cursor-pointer min-width-btn"
        onClick={handleOnTask}
      >
        Add
      </button>
    </div>
  );
}

export default Task;
