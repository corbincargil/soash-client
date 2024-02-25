import { NavLink } from "react-router-dom";
import InterestsIcon from "@mui/icons-material/Interests";

export default function Navbar() {
  return (
    <nav className="top-0 left-0 h-screen w-48 flex flex-col bg-gray-400 font-bold font-mono shadow-lg p-4">
      <div>
        <InterestsIcon />
      </div>
      <ul>
        <li className=" mt-3 mb-3">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li className=" mt-3 mb-3">
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li className=" mt-3 mb-3">
          <NavLink to="/analytics">Analytics</NavLink>
        </li>
        <li className=" mt-3 mb-3">
          <NavLink to="/my-profile">My profile</NavLink>
        </li>
        <li className=" mt-3 mb-3">
          <NavLink to="/evergreen">Evergreen</NavLink>
        </li>
        <li className=" mt-3 mb-3">
          <NavLink to="/login">Log in</NavLink>
        </li>
        <li className=" mt-3 mb-3">
          <NavLink to="/logout">Log out</NavLink>
        </li>
      </ul>
    </nav>
  );
}
