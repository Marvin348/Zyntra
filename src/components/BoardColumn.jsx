import { useDroppable } from "@dnd-kit/core";
import useProjectsStore from "../storage/useProjectsStore";
import EmptyTask from "./EmptyTask";
import Task from "./Task";
import { SortableContext } from "@dnd-kit/sortable";

const BoardColumn = ({ label, status }) => {
  const { isOver, setNodeRef } = useDroppable({ id: status });

  const activeProjectId = useProjectsStore((state) => state.activeProjectId);

  const deleteTask = useProjectsStore((state) => state.deleteTask);

  const activeProject = useProjectsStore((state) =>
    state.projects.find((p) => p.id === activeProjectId)
  );

  const columnTasks = activeProject.tasks.filter(
    (task) => task.status === status
  );
  const ids = columnTasks.map((t) => t.id);

  return (
    <div
      className="bg-base-300 flex-1 min-h-140 p-6 rounded-lg"
      ref={setNodeRef}
    >
      <div className="flex items-center justify-between bg-base-100 p-4 rounded-md">
        <h3 className="font-medium">{label}</h3>
        <div className="flex items-center justify-center bg-custom size-6 rounded-full">
          {columnTasks.length}
        </div>
      </div>
      {columnTasks.length === 0 ? (
        <div className="text-center mt-12">
          <EmptyTask />
        </div>
      ) : (
        <SortableContext items={ids}>
          {columnTasks.map((item) => (
            <Task
              key={item.id}
              task={item}
              deleteTask={() => deleteTask(item.id, activeProjectId)}
            />
          ))}
        </SortableContext>
      )}
    </div>
  );
};
export default BoardColumn;
