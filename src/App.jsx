import { useState } from "react";
import Navbar from "./components/Navbar";
import AddProjectModal from "./components/AddProjectModal";
import useProjectsStore from "./storage/useProjectsStore";
import Board from "./components/Board";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const project = useProjectsStore((state) => state.projects);

  console.log(project);

  return (
    <div className="container">
      <Navbar onCreateProject={() => setIsOpen(true)} />
      {isOpen && <AddProjectModal onClose={() => setIsOpen(false)} />}
      <Board />
    </div>
  );
}

export default App;
