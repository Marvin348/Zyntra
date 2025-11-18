import AddTaskModal from "./AddTaskModal";
import { FaFilter, FaChevronDown } from "react-icons/fa";
import { useState } from "react";
const BoardControls = ({ onAddTask }) => {
  return (
    <div className="flex items-center gap-2">
      <button className="btn">
        <FaFilter />
      </button>
      <button className="btn bg-custom" onClick={onAddTask}>
        Add New Task
      </button>
    </div>
  );
};
export default BoardControls;
