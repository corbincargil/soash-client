import { NavLink } from "react-router-dom";
import InterestsIcon from "@mui/icons-material/Interests";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import BarChartIcon from "@mui/icons-material/BarChart";
import ParkIcon from "@mui/icons-material/Park";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";

//todo: alternate navbar styles - delete once styling is decided
// <nav className="top-0 left-0 min-h-screen h-full w-48 flex flex-col bg-slate-200 border border-r-gray-300 shadow-lg p-4">
// const activeLinkClassNames =
//   "border border-slate-200 bg-gradient-to-r from-blue-800 to-blue-600 hover:underline rounded-lg p-2 shadow-lg";
// const inactiveLinkClassNames = "text-blue-900 hover:underline rounded-md p-2";

const activeLinkClassNames =
  "flex gap-2 bg-slate-200 border text-blue-900 border-slate-200 hover:underline rounded-lg p-2";
const inactiveLinkClassNames =
  "flex gap-2  text-slate-200 font-semibold hover:bg-slate-400  hover:ease-linear hover:duration-300 rounded-lg p-2";
// const inactiveLinkClassNames =
//   " hover:border hover:border-slate-200 rounded-lg p-2";

export interface NavigationLinkInterface {
  label: string;
  to: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const primaryLinks: NavigationLinkInterface[] = [
  { label: "Dashboard", to: "/dashboard", icon: DashboardIcon },
  { label: "Posts", to: "/posts", icon: AutoAwesomeMotionIcon },
  { label: "Analytics", to: "/analytics", icon: BarChartIcon },
  { label: "Evergreen", to: "/evergreen", icon: ParkIcon },
];

const secondaryLinks: NavigationLinkInterface[] = [
  { label: "My profile", to: "/my-profile", icon: PersonIcon },
  { label: "Settings", to: "/settings", icon: SettingsIcon },
  { label: "Log in", to: "/login", icon: LoginIcon },
];

const tertiaryLinks: NavigationLinkInterface[] = [
  { label: "Help", to: "/help", icon: HelpOutlineIcon },
  { label: "Log out", to: "/logout", icon: LogoutIcon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-12 bg-slate-200 sm:w-auto top-0 left-0 h-screen flex flex-col sm:bg-gradient-to-r sm:from-blue-950 sm:to-blue-800 shadow-lg p-4 ">
      <div>
        <InterestsIcon className="text-slate-200" fontSize="large" />
      </div>
      {/* Hamburger Icon */}
      <div className="sm:hidden flex items-center">
        <button onClick={() => setOpen(!open)}>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className="invisible sm:visible h-full flex flex-col justify-between ">
        <div className="my-3 border-b border-slate-200">
          <ul>
            {primaryLinks.map((l) => (
              <li key={l.label} className="my-2 text-slate-200 font-bold">
                <NavLink
                  className={({ isActive }) =>
                    "flex gap-2  text-slate-200 font-semibold hover:bg-slate-400  hover:ease-linear hover:duration-300 rounded-lg p-2"
                  }
                  to={l.to}
                >
                  {l.icon && <l.icon fontSize="small" />}
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-3 border-b border-slate-200">
          <ul>
            {secondaryLinks.map((l) => (
              <li key={l.label} className="my-2 text-slate-200 font-bold">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLinkClassNames : inactiveLinkClassNames
                  }
                  to={l.to}
                >
                  {l.icon && <l.icon fontSize="small" />}
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-3 border-b border-slate-200">
          <ul>
            {tertiaryLinks.map((l) => (
              <li key={l.label} className="my-2 text-slate-200 font-bold">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLinkClassNames : inactiveLinkClassNames
                  }
                  to={l.to}
                >
                  {l.icon && <l.icon fontSize="small" />}
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${open ? "block" : "hidden"} md:hidden`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">
          Features
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">
          Pricing
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">
          About
        </a>
      </div>
    </nav>
  );
}
