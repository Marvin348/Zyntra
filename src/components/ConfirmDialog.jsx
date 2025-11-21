import { IoIosWarning } from "react-icons/io";

const ConfirmDialog = ({ onClose, onConfirm }) => {
  return (
    <div className="custom-modal px-8">
      <div className="bg-base-200 p-4 rounded-md text-center">
        <h3 className="text-lg font-semibold">Delete all projects?</h3>
        <p className="mb-4 mt-1 text-error text-xs">
          This action cannot be undone. All tasks will be removed as well.
        </p>
        <IoIosWarning className="inline-block size-16" />
        <div className="flex items-center justify-between mt-4">
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfirmDialog;
