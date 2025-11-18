import { FaClipboardList } from "react-icons/fa";

const EmptyTask = () => {
  return (
    <div>
      <button className="bg-base-content p-2 rounded-full mb-2">
        <FaClipboardList className="text-base-300 text-lg" />
      </button>
      <p className="text-base-content/50 text-sm">
        No Tasks currently. Board is empty!
      </p>
    </div>
  );
};
export default EmptyTask;
