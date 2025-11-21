import { useSensor, useSensors, PointerSensor } from "@dnd-kit/core";
export const useBoardDnd = ({
  updateTaskStatus,
  COLUMNS,
  activeProject,
  setActiveTask,
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragEnd = ({ active, over }) => {
    if (!over) {
      setActiveTask(null);
      return;
    }

    const taskId = active.id;
    const newStatus = over.id;

    const validStatuses = COLUMNS.map((c) => c.status);
    const isColumn = validStatuses.includes(newStatus);

    if (isColumn) {
      updateTaskStatus(taskId, activeProject.id, newStatus);
    }

    setActiveTask(null);
  };
  return { sensors, handleDragEnd };
};
