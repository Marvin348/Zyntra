import useProjectsStore from "../storage/useProjectsStore";
import useScrollLock from "../hooks/useScrollLock";
import { useEffect, useRef, useState } from "react";

const AddProjectModal = ({ onClose }) => {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");

  useScrollLock(true);

  const addProject = useProjectsStore((state) => state.addProject);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
    <div className="custom-modal" onClick={onClose}>
      <div
        className="w-80 md:w-100 rounded-lg bg-base-200 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={onSubmit}>
          <h2 className="font-semibold text-xl mb-1">New Project</h2>
          <p className="text-base-content/40 text-sm">Fill the input below to create a project</p>
          <input
            type="text"
            placeholder="Type here"
            value={projectName}
            ref={inputRef}
            onChange={(e) => setProjectName(e.target.value)}
            className="input w-full mt-4"
          />
          {error && <p className="text-error text-xs mt-2">{error}</p>}
          <div className="flex items-center justify-between mt-4">
            <button className="btn " type="button" onClick={onClose}>
              Close
            </button>
            <button className="btn" type="submit">
              Add new project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddProjectModal;
