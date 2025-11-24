import { SlOptions } from "react-icons/sl";
import TaskDropdown from "./TaskDropdown";
import { useState } from "react";
import { TYPE_OPTIONS, PRIORITY_OPTIONS } from "../../constants/taskOptions";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Task = ({ task, deleteTask, onEditTask }) => {
  const { id, title, description, type, priority } = task;

  const [open, setOpen] = useState(false);

  const typeInfo = TYPE_OPTIONS.find((o) => o.value === type);
  const priorityInfo = PRIORITY_OPTIONS.find((o) => o.value === priority);

  const TypeIcon = typeInfo.icon;
  const PriorityIcon = priorityInfo.icon;

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useDraggable({
    id: id,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return <div ref={setNodeRef}></div>;
  }

  return (
    <div
      className="mt-6 p-4 border rounded-md border-base-content/40 bg-base-300"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
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
            onClick={(e) => {
              e.stopPropagation();
              setOpen((prev) => !prev);
            }}
          >
            <SlOptions />
          </button>
        </div>
        {open && (
          <TaskDropdown
            deleteTask={deleteTask}
            onEditTask={() => {
              setOpen(false);
              onEditTask();
            }}
          />
        )}
        <div>
          <h2 className="mt-2 font-bold">{title}</h2>
          <p className="text-base-content/50 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Task;
