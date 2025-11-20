import { useState } from "react";
import useProjectsStore from "../storage/useProjectsStore";
import AddTaskModal from "./AddTaskModal";
import BoardControls from "./BoardControls";
import BoardColumn from "./BoardColumn";
import EmptyState from "./EmptyState";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensors,
  useSensor,
} from "@dnd-kit/core";
import Task from "./Task";

const Board = () => {
  const [activeTask, setActiveTask] = useState(null);
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  const projects = useProjectsStore((state) => state.projects);
  const activeProjectId = useProjectsStore((state) => state.activeProjectId);
  const activeProject = useProjectsStore((state) =>
    state.projects.find((p) => p.id === activeProjectId)
  );
  const updateTaskStatus = useProjectsStore((state) => state.updateTaskStatus);

  const activeTaskData = activeProject?.tasks.find((t) => t.id === activeTask);

  const handleDragEnd = ({ active, over }) => {
    if (!over) {
      setActiveTask(null);
      return;
    }

    const taskId = active.id;
    const newStatus = over.id;

    const validStatuses = COLUMNS.map((c) => c.status);
    const isColumn = validStatuses.includes(newStatus);

    console.log(`ID: ${taskId}, STATUS: ${newStatus}`);

    if (isColumn) {
      updateTaskStatus(taskId, activeProject.id, newStatus);
    }

    setActiveTask(null);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
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

  console.log(activeProject);

  return (
    <section>
      <div className="flex items-center justify-between mt-20 mb-4">
        <h2 className="font-semibold text-3xl">Projects</h2>
        <BoardControls onAddTask={() => setTaskModalOpen(true)} />
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-6">
        <DndContext
          onDragStart={(e) => setActiveTask(e.active.id)}
          onDragEnd={handleDragEnd}
          onDragCancel={() => setActiveTask(null)}
          collisionDetection={closestCenter}
          sensors={sensors}
        >
          {COLUMNS.map(({ label, status }) => (
            <BoardColumn key={status} label={label} status={status} />
          ))}
          <DragOverlay>
            {activeTask ? <Task task={activeTaskData} /> : null}
          </DragOverlay>
        </DndContext>
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
