import { useState } from "react";
import { FaList } from "react-icons/fa6";
import useProjectsStore from "../storage/useProjectsStore";
import AddTaskModal from "./AddTaskModal";
import BoardControls from "./BoardControls";
import BoardColumn from "./BoardColumn";
import EmptyState from "./EmptyState";
import { COLUMNS } from "../constants/columns";
import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core";
import Task from "./Task";
import ProjectSwitcher from "./ProjectSwitcher";
import { useBoardDnd } from "../hooks/useBoardDnd";

const Board = () => {
  const [activeTask, setActiveTask] = useState(null);
  const [taskModalOpen, setTaskModalOpen] = useState(false);
  const [openAllProjects, setOpenAllProjects] = useState(false);

  const projects = useProjectsStore((state) => state.projects);
  const activeProjectId = useProjectsStore((state) => state.activeProjectId);
  const setActiveProject = useProjectsStore((state) => state.setActiveProject);

  const activeProject = useProjectsStore((state) =>
    state.projects.find((p) => p.id === activeProjectId)
  );
  const updateTaskStatus = useProjectsStore((state) => state.updateTaskStatus);
  const deleteProject = useProjectsStore((state) => state.deleteProject);
  const deleteAllProjects = useProjectsStore(
    (state) => state.deleteAllProjects
  );

  const editTaskId = useProjectsStore((state) => state.editTaskId);
  const clearEditTask = useProjectsStore((state) => state.clearEditTask);

  const activeTaskData = activeProject?.tasks.find((t) => t.id === activeTask);

  const { sensors, handleDragEnd } = useBoardDnd({
    updateTaskStatus,
    activeProject,
    setActiveTask,
    COLUMNS,
  });

  if (projects.length === 0 || !activeProject) {
    return (
      <div className="text-center mt-12">
        <EmptyState />
      </div>
    );
  }

  console.log(activeProject);

  return (
    <main>
      <div className="flex items-center justify-between mt-20 mb-4">
        <div className="flex items-center">
          <h2 className="font-semibold text-3xl">Projects</h2>
          <button
            className="px-4 cursor-pointer"
            onClick={() => setOpenAllProjects(true)}
          >
            <FaList />
          </button>
        </div>
        <BoardControls onAddTask={() => setTaskModalOpen(true)} />
      </div>
      {openAllProjects && (
        <ProjectSwitcher
          projects={projects}
          onClose={() => setOpenAllProjects(false)}
          activeProjectId={activeProjectId}
          onDeleteProject={deleteProject}
          onDeleteAll={deleteAllProjects}
          setActiveProject={setActiveProject}
        />
      )}

      <div className="flex flex-col sm:flex-row justify-between gap-6">
        <DndContext
          onDragStart={(e) => setActiveTask(e.active.id)}
          onDragEnd={handleDragEnd}
          onDragCancel={() => setActiveTask(null)}
          collisionDetection={closestCenter}
          sensors={sensors}
        >
          {COLUMNS.map(({ label, status }) => (
            <BoardColumn
              key={status}
              label={label}
              status={status}
              setTaskModalOpen={setTaskModalOpen}
            />
          ))}
          <DragOverlay>
            {activeTask ? <Task task={activeTaskData} /> : null}
          </DragOverlay>
        </DndContext>
      </div>
      {taskModalOpen && (
        <AddTaskModal
          projectId={activeProject.id}
          editTaskId={editTaskId}
          onClose={() => {
            clearEditTask();
            setTaskModalOpen(false);
          }}
        />
      )}
    </main>
  );
};
export default Board;
