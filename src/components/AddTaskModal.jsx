import { useEffect, useState } from "react";
import TypeSelect from "./TypeSelect";
import PrioritySelect from "./PrioritySelect";
import useProjectsStore from "../storage/useProjectsStore";
import useScrollLock from "../hooks/useScrollLock";
import { toastTaskAdded, toastTaskUpdated } from "../utils/toastService";

const AddTaskModal = ({ onClose, projectId, editTaskId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [priority, setPriority] = useState("");
  const [errors, setErrors] = useState({});

  const project = useProjectsStore((state) =>
    state.projects.find((p) => p.id === projectId)
  );
  const taskToEdit = project?.tasks.find((t) => t.id === editTaskId);

  const updateTask = useProjectsStore((state) => state.updateTask);
  const addTask = useProjectsStore((state) => state.addTask);

  useScrollLock(true);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setType(taskToEdit.type);
      setPriority(taskToEdit.priority);
    }
  }, [taskToEdit, projectId]);

  const onSubmit = (e) => {
    e.preventDefault();

    const newError = {};

    if (!title.trim()) newError.title = "Title is required";
    if (!description.trim()) newError.description = "Description is required";
    if (!type) newError.type = "Pick a type";
    if (!priority) newError.priority = "Pick a priority";

    setErrors(newError);
    if (Object.keys(newError).length > 0) return;

    if (editTaskId) {
      updateTask(projectId, editTaskId, { title, description, type, priority });
      toastTaskUpdated();
    } else {
      addTask(projectId, { title, description, type, priority });
      toastTaskAdded();
    }

    onClose();
  };

  return (
    <div className="custom-modal px-6">
      <div className="w-90 md:w-150 h-auto rounded-lg bg-base-200 p-4">
        <form onSubmit={onSubmit}>
          <h2 className="font-semibold text-xl mb-1">Add Task</h2>
          <p className="text-base-content/40 text-sm">
            Fill the inputs below to create a new task
          </p>
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row border-y border-base-content/10 mt-4 py-10">
            <div className="w-full sm:w-2/3 flex flex-col gap-8">
              <div>
                <label className="block mb-1 text-xs text-base-content/70 font-medium">
                  Task Title
                </label>
                <input
                  type="text"
                  placeholder="Title..."
                  className="input w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && (
                  <p className="text-error text-xs mt-2">{errors.title}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-xs text-base-content/70 font-medium">
                  Task Description
                </label>
                <textarea
                  className="textarea outline-none resize-none w-full"
                  placeholder="Description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                {errors.description && (
                  <p className="text-error text-xs mt-2">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full sm:w-1/3 flex flex-col gap-8">
              <TypeSelect
                type={type}
                setType={setType}
                typeError={errors.type}
              />
              <PrioritySelect
                priority={priority}
                setPriority={setPriority}
                priorityError={errors.priority}
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-8 mt-4">
            <button className="btn font-medium" type="button" onClick={onClose}>
              Close
            </button>
            <button className="btn w-30 font-medium text-neutral-content bg-custom" type="submit">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddTaskModal;
