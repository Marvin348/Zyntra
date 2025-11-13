import logoWhite from "../assets/zyntra-white.svg";
import logoBlack from "../assets/zyntra-black.svg";
import ThemeToggle from "./ThemeToggle";
const Navbar = ({ onCreateProject }) => {
  return (
    <header>
      <nav className="flex items-center justify-between py-4">
        <div className="flex gap-8">
          <img className="w-28" src={logoWhite} alt="zyntra" />
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="hidden sm:block input rounded-lg outline-none"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn rounded-lg font-medium" onClick={onCreateProject}>
            Create Project
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
