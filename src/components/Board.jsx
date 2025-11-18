import { useState } from "react";
import useProjectsStore from "../storage/useProjectsStore";
import AddTaskModal from "./AddTaskModal";
import BoardControls from "./BoardControls";
import BoardColumn from "./BoardColumn";
import EmptyState from "./EmptyState";
useState;
const Board = () => {
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  const projects = useProjectsStore((state) => state.projects);
  const activeProjectId = useProjectsStore((state) => state.activeProjectId);
  const activeProject = useProjectsStore((state) =>
    state.projects.find((p) => p.id === activeProjectId)
  );

  const COLUMNS = [
    { label: "TO DO", status: "todo" },
    { label: "IN PROGRESS", status: "inprogress" },
    { label: "COMPLETED", status: "completed" },
  ];

  if (projects.length === 0) {
    return (
      <div className="text-center mt-12">
        <EmptyState />
      </div>
    );
  }

  if (!activeProjectId) {
    return (
      <div className="text-center mt-12">
        <EmptyState />
      </div>
    );
  }

  // setActiveProject: (id) => set({ activeProjectId: id }),

  console.log(activeProjectId);
  console.log(activeProject);

  return (
    <section>
      <div className="flex items-center justify-between mt-20 mb-4">
        <h2 className="font-semibold text-3xl">Projects</h2>
        <BoardControls onAddTask={() => setTaskModalOpen(true)} />
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-8">
        {COLUMNS.map(({ label, status }) => (
          <div
            key={label}
            className="bg-base-300 min-h-140 min-w-90 p-6 rounded-lg"
          >
            <BoardColumn label={label} status={status} />
          </div>
        ))}
      </div>
      {taskModalOpen && (
        <AddTaskModal
          projectId={activeProject.id}
          onClose={() => setTaskModalOpen(false)}
        />
      )}
    </section>
  );
};
export default Board;
