import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  return (
    <div className="p-5 w-full border-b border-y-green-950  flex flex-row justify-between items-center">
      <nav className=" flex flex-row items-center justify-end-safe gap-3">
        <NavLink
          to="/"
          className="text-xs font-thin p-1 px-2 bg-neutral-700/60 backdrop-blur-3xl  rounded-md"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="text-xs font-thin p-1 px-2 bg-neutral-700/60 backdrop-blur-3xl rounded-md"
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className="text-xs font-thin p-1 px-2 bg-neutral-700/60 backdrop-blur-3xl rounded-md"
        >
          Contact
        </NavLink>
      </nav>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavBar;
