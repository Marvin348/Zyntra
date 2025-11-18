import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
const TaskDropdown = ({ deleteTask }) => {
  return (
    <div className="absolute top-6 right-0 bg-base-100 p-1 rounded-md z-10 font-[450]">
      <button className="flex items-center w-full gap-2 p-2 rounded-md cursor-pointer text-sm hover:bg-base-content/10">
        <FiEdit /> Edit Task
      </button>
      <button
        className="flex items-center w-full gap-2 p-2 rounded-md cursor-pointer text-sm hover:bg-base-content/10 text-prio-high hover:text-base-content"
        onClick={deleteTask}
      >
        <MdDeleteOutline /> Delete Task
      </button>
    </div>
  );
};
export default TaskDropdown;
