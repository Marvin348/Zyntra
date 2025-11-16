import useProjectsStore from "../storage/useProjectsStore";
const ProjectSelector = ({ onClose, query }) => {
  const projects = useProjectsStore((state) => state.projects);
  const setActiveProject = useProjectsStore((state) => state.setActiveProject);

  const onSelect = (id) => {
    setActiveProject(id);
    onClose();
  };

  const filteredProjects = projects.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase())
  );


  return (
    <div className="absolute left-36 top-15 w-60 bg-base-300 rounded-md p-2">
      {filteredProjects.map((item) => (
        <div
          key={item.id}
          className="p-2 rounded-md hover:bg-base-content/10 cursor-pointer"
          onClick={() => onSelect(item.id)}
        >
          <p className="block">{item.name}</p>
          <p className="text-base-content/50 text-xs">
            {item.tasks.length} tasks{" "}
          </p>
        </div>
      ))}
    </div>
  );
};
export default ProjectSelector;
