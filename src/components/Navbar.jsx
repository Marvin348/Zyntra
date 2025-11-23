import logoWhite from "../assets/zyntra-white.svg";
import logoBlack from "../assets/zyntra-black.svg";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import ProjectSelector from "./ProjectSelector";
const Navbar = ({ onCreateProject }) => {
  const [isSeletctorOpen, setIsSelectorOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <header>
      <nav className="flex items-center justify-between py-4">
        <div className="flex gap-8">
          <img className="w-28" src={logoWhite} alt="zyntra" />
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="hidden sm:block input"
              value={query}
              onChange={(e) => {
                const value = e.target.value;
                setQuery(value);
                setIsSelectorOpen(value !== "");
              }}
            />
            {isSeletctorOpen && (
              <ProjectSelector
                query={query}
                onClose={() => setIsSelectorOpen(false)}
              />
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn" onClick={onCreateProject}>
            Create Project
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
