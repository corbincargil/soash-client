import { NavLink } from "react-router-dom";
import InterestsIcon from "@mui/icons-material/Interests";

//todo: alternate navbar styles - delete once styling is decided
// <nav className="top-0 left-0 min-h-screen h-full w-48 flex flex-col bg-slate-200 border border-r-gray-300 shadow-lg p-4">
// const activeLinkClassNames =
//   "border border-slate-200 bg-gradient-to-r from-blue-800 to-blue-600 hover:underline rounded-lg p-2 shadow-lg";
// const inactiveLinkClassNames = "text-blue-900 hover:underline rounded-md p-2";

const activeLinkClassNames =
  "bg-slate-200 border text-blue-900 border-slate-200 hover:underline rounded-lg p-2";
const inactiveLinkClassNames =
  "hover:bg-slate-400  hover:ease-linear hover:duration-300 rounded-lg p-2";
// const inactiveLinkClassNames =
//   " hover:border hover:border-slate-200 rounded-lg p-2";

export interface NavigationLinkInterface {
  label: string;
  to: string;
}

const primaryLinks: NavigationLinkInterface[] = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Posts", to: "/posts" },
  { label: "Analytics", to: "/analytics" },
  { label: "Evergreen", to: "/evergreen" },
];

const secondaryLinks: NavigationLinkInterface[] = [
  { label: "My profile", to: "/my-profile" },
  { label: "Settings", to: "/settings" },
  { label: "Log in", to: "/login" },
];

const tertiaryLinks: NavigationLinkInterface[] = [
  { label: "Help", to: "/help" },
  { label: "Log out", to: "/logout" },
];

export default function Navbar() {
  return (
    <nav className="top-0 left-0 h-screen w-48 flex flex-col bg-gradient-to-r from-blue-950 to-blue-800 shadow-lg p-4 ">
      <div>
        <InterestsIcon className="text-slate-200" fontSize="large" />
      </div>
      <div className="h-full flex flex-col justify-between ">
        <div className="my-3 border-b border-slate-200">
          <ul>
            {primaryLinks.map((l) => (
              <li className="my-6 text-slate-200 font-bold font-mono">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLinkClassNames : inactiveLinkClassNames
                  }
                  to={l.to}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-3 border-b border-slate-200">
          <ul>
            {secondaryLinks.map((l) => (
              <li className="my-6 text-slate-200 font-bold font-mono">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLinkClassNames : inactiveLinkClassNames
                  }
                  to={l.to}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-3 border-b border-slate-200">
          <ul>
            {tertiaryLinks.map((l) => (
              <li className="my-6 text-slate-200 font-bold font-mono">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? activeLinkClassNames : inactiveLinkClassNames
                  }
                  to={l.to}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
