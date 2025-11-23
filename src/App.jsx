import { useState } from "react";
import Navbar from "./components/Navbar";
import AddProjectModal from "./components/AddProjectModal";
import Board from "./components/Board";

function App() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <div className="container">
      <Navbar onCreateProject={() => setIsProjectModalOpen(true)} />
      {isProjectModalOpen && (
        <AddProjectModal onClose={() => setIsProjectModalOpen(false)} />
      )}
      <Board />
    </div>
  );
}

export default App;
