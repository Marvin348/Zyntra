import { SlOptions } from "react-icons/sl";
import TaskDropdown from "./TaskDropdown";
import { useState } from "react";
import { TYPE_OPTIONS, PRIORITY_OPTIONS } from "../constants/taskOptions";
const Task = ({ id, title, description, priority, type }) => {
  const [open, setOpen] = useState(false);

  const typeInfo = TYPE_OPTIONS.find((o) => o.value === type);
  const priorityInfo = PRIORITY_OPTIONS.find((o) => o.value === priority);

  const TypeIcon = typeInfo.icon;
  const PriorityIcon = priorityInfo.icon;

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <span
            className={`${typeInfo.textClass} ${typeInfo.bgClass} flex items-center gap-1 text-xs rounded-md p-1 font-medium`}
          >
            <TypeIcon />
            {typeInfo.label}
          </span>
          <span
            className={`${priorityInfo.textClass} ${priorityInfo.bgClass} flex items-center gap-1 text-xs rounded-md p-1 font-medium`}
          >
            <PriorityIcon />
            {priorityInfo.label}
          </span>
        </div>
        <button
          className="p-2 rounded-md cursor-pointer text-xs hover:bg-base-content/5"
          onClick={() => setOpen((prev) => !prev)}
        >
          <SlOptions />
        </button>
      </div>
      {open && <TaskDropdown />}
      <h2 className="mt-2 font-bold">{title}</h2>
      <p className="text-base-content/50 text-sm">{description}</p>
    </div>
  );
};
export default Task;
