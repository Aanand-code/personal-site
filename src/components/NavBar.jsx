import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  return (
    <div className="lg:p-3 pb-6 w-full border-b lg:border-y-green-950 border-y-red-950  flex flex-row justify-between items-center">
      <nav className="flex flex-row items-center justify-end-safe gap-3">
        <NavLink
          to="/"
          className="text-sm  lg:text-xs font-thin p-1 px-2 bg-neutral-700/60 backdrop-blur-3xl  rounded-md"
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className="text-sm  lg:text-xs font-thin p-1 px-2 bg-neutral-700/60 backdrop-blur-3xl  rounded-md"
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className="text-sm  lg:text-xs font-thin p-1 px-2 bg-neutral-700/60 backdrop-blur-3xl  rounded-md"
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
