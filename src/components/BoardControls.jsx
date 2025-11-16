import { FaChevronDown } from "react-icons/fa";
import AddTaskModal from "./AddTaskModal";
import { useState } from "react";
const BoardControls = ({ onAddTask }) => {
  return (
    <div className="">
      <button className="btn bg-custom" onClick={onAddTask}>
        Add New Task
      </button>
    </div>
  );
};
export default BoardControls;
