import { SlOptions } from "react-icons/sl";
import TaskDropdown from "./TaskDropdown";
import { useState } from "react";
import { TYPE_OPTIONS, PRIORITY_OPTIONS } from "../constants/taskOptions";
const Task = ({ id, title, description, priority, type }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <span className="text-xs text-type-feature bg-type-feature/20 rounded-md p-1">
            {type}
          </span>
          <span
            className={`text-xs text-prio-high ${TYPE_OPTIONS.className} bg-prio-high/20 rounded-md p-1`}
          >
            {priority}
          </span>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <SlOptions />
        </button>
      </div>
      {open && <TaskDropdown />}
      <h2 className="mt-2 font-bold">{title}</h2>
      <p className="text-base-content/50">{description}</p>
    </div>
  );
};
export default Task;
