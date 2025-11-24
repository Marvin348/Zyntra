import { MdDeleteOutline } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import ConfirmDialog from "../tasks/ConfirmDialog";
import useScrollLock from "../../hooks/useScrollLock";
import { useState } from "react";
import {
  toastProjectDeleteAll,
  toastProjectDelete,
} from "../../utils/toastService";

const ProjectSwitcher = ({
  projects,
  activeProjectId,
  onDeleteProject,
  onDeleteAll,
  setActiveProject,
  onClose,
}) => {
  const [showConfirm, setShowConfirm] = useState(false);
  useScrollLock(true);

  const onSelect = (id) => {
    setActiveProject(id);
    onClose();
  };

  const handleConfirm = () => {
    onDeleteAll();
    onClose();
    toastProjectDeleteAll();
  };

  return (
    <div className="custom-modal px-8">
      <div
        className="w-120 h-auto rounded-lg bg-base-200 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">All Projects</h3>
          <button className="cursor-pointer" onClick={onClose}>
            <IoIosClose className="size-8" />
          </button>
        </div>
        <p className="mb-4 text-base-content/40 text-sm">
          List of all avaliable projects
        </p>
        <div className="flex flex-col gap-2 border-t border-base-content/10 p-4">
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between p-2 border border-base-content/30 hover:border-base-content/60 rounded-md cursor-pointer"
              onClick={() => onSelect(p.id)}
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{p.name}</h4>
                  {p.id === activeProjectId && (
                    <span className="p-1 bg-prio-low rounded-full"></span>
                  )}
                </div>
                <p className="text-base-content/40 text-xs">
                  {p.tasks.length} tasks
                </p>
              </div>

              <button
                className="rounded-md p-1 bg-prio-high/20 text-prio-high cursor-pointer hover:text-base-content"
                onClick={(e) => {
                  e.stopPropagation();
                  toastProjectDelete();
                  onDeleteProject(p.id);
                }}
              >
                <MdDeleteOutline />
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 text-sm">
          <p className="text-base-content/40">
            {projects.length > 1
              ? `${projects.length} Projects`
              : `${projects.length} Project`}
          </p>
          <button
            className="btn hover:underline"
            onClick={() => setShowConfirm(true)}
          >
            Delete All
          </button>
        </div>
        {showConfirm && (
          <ConfirmDialog
            onClose={() => setShowConfirm(false)}
            onConfirm={() => handleConfirm()}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectSwitcher;
