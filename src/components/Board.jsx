import { useState } from "react";
import useProjectsStore from "../storage/useProjectsStore";
import AddTaskModal from "./AddTaskModal";
import BoardControls from "./BoardControls";
import BoardColumn from "./BoardColumn";
useState;
const Board = () => {
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  const activeProjectId = useProjectsStore((state) => state.activeProjectId);

  const activeProject = useProjectsStore((state) =>
    state.projects.find((p) => p.id === activeProjectId)
  );

  const COLUMNS = ["TO DO", "IN PROGRESS", "COMPLETED"];

  console.log(activeProjectId);
  console.log(activeProject);

  return (
    <section>
      <div className="flex items-center justify-between mt-12 mb-4">
        <h2 className="font-semibold text-3xl">Projects</h2>
        <BoardControls onAddTask={() => setTaskModalOpen(true)} />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        {COLUMNS.map((item) => (
          <div
            key={item}
            className="bg-base-300 min-h-140 min-w-80 p-6 rounded-lg"
          >
            <BoardColumn label={item} />
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
