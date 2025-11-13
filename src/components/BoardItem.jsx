import { FaClipboardList } from "react-icons/fa";

const BoardItem = ({ label }) => {
  return (
    <div className="bg-base-300 min-h-140 min-w-80 p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">{label}</h3>
        <div className="flex items-center justify-center bg-custom size-6 rounded-full">3</div>
      </div>
    </div>
  );
};
export default BoardItem;
