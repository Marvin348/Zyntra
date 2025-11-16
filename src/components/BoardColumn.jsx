import useProjectsStore from "../storage/useProjectsStore";
import Task from "./Task";

const BoardColumn = ({ label }) => {
  const activeProjectId = useProjectsStore((state) => state.activeProjectId);

  const activeProject = useProjectsStore((state) =>
    state.projects.find((p) => p.id === activeProjectId)
  );

  return (
    <>
      <div className="flex items-center justify-between bg-base-100 p-4 rounded-md">
        <h3 className="font-medium">{label}</h3>
        <div className="flex items-center justify-center bg-custom size-6 rounded-full">
          3
        </div>
      </div>
      {activeProject.tasks.map((item) => (
        <div
          key={item.id}
          className="mt-6 p-4 border rounded-md border-base-content/40"
        >
          <Task
            id={item.id}
            title={item.title}
            description={item.description}
            type={item.type}
            priority={item.priority}
          />
        </div>
      ))}
    </>
  );
};
export default BoardColumn;
