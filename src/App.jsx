import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import AddProjectModal from "./components/projects/AddProjectModal";
import Board from "./components/board/Board";
import { Toaster } from "react-hot-toast";
import { customToastOptions } from "./utils/toastOptions";

function App() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <div className="container">
      <Navbar onCreateProject={() => setIsProjectModalOpen(true)} />
      {isProjectModalOpen && (
        <AddProjectModal onClose={() => setIsProjectModalOpen(false)} />
      )}
      <Toaster position="bottom-right" toastOptions={customToastOptions} />
      <Board />
    </div>
  );
}

export default App;
