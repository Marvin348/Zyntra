import toast from "react-hot-toast";

export const toastProjectAdded = () => {
  toast.success(
    <div>
      <p className="text-sm font-semibold">Operation successful</p>
      <p className="text-xs text-neutral-content">Added new Project</p>
    </div>,
    { duration: 7000 }
  );
};

export const toastProjectDelete = () => {
  toast.success(
    <div>
      <p className="text-sm font-semibold">Operation successful</p>
      <p className="text-xs text-neutral-content">
        Project deleted successfully!
      </p>
    </div>,
    { duration: 7000 }
  );
};

export const toastProjectDeleteAll = () => {
  toast.success(
    <div>
      <p className="text-sm font-semibold">Operation successful</p>
      <p className="text-xs text-neutral-content">All Projects are deleted!</p>
    </div>,
    { duration: 7000 }
  );
};

export const toastTaskAdded = () => {
  toast.success(
    <div>
      <p className="text-sm font-semibold">Task created!</p>
      <p className="text-xs text-neutral-content">Successfully added</p>
    </div>,
    { duration: 7000 }
  );
};

export const toastTaskDelete = () => {
  toast.success(
    <div>
      <p className="text-sm font-semibold">Task deleted!</p>
      <p className="text-xs text-neutral-content">Task deleted successfully!</p>
    </div>,
    { duration: 7000 }
  );
};

export const toastTaskUpdated = () => {
  toast.success(
    <div>
      <p className="text-sm font-semibold">Task updated!</p>
      <p className="text-xs text-neutral-content">Changes saved.</p>
    </div>,
    { duration: 7000 }
  );
};
