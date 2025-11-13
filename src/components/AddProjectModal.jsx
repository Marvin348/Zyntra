import useProjectStore from "../storage/useProjectStore";
import { useState } from "react";

const AddProjectModal = ({ onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");

  const addProject = useProjectStore((state) => state.addProject);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!projectName) {
      setError("Enter a project name");
      return;
    }

    addProject(projectName);
    setProjectName("");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-10"
      onClick={onClose}
    >
      <div
        className="w-80 md:w-100 rounded-lg bg-base-200 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={onSubmit}>
          <h2 className="font-semibold text-xl mb-1">New Project</h2>
          <p>Fill the input below to create a project</p>
          <label>
            <input
              type="text"
              placeholder="Type here"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="input w-full rounded-lg outline-none mt-4"
            />
            {error && <p className="text-error text-xs mt-2">{error}</p>}
            <div className="flex items-center justify-between mt-4">
              <button
                className="btn rounded-lg font-medium"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
              <button className="btn rounded-lg font-medium" type="submit">
                Add new project
              </button>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};
export default AddProjectModal;
