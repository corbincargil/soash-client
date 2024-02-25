import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import PrimaryLayout from "./layouts/PrimaryLayout";
import { Dashboard } from "./pages/Dashboard";
import { Analytics } from "./pages/Analytics";
import { MyProfile } from "./pages/MyProfile";
import { PostRoutes } from "./routes/PostRoutes";
import { NotFound } from "./pages/NotFound";
import { useEffect, useState } from "react";
import { Evergreen } from "./pages/Evergreen";
import { Register } from "./pages/Register";
import { LoginLayout } from "./layouts/LoginLayout";

const analyticsLoader = () => {
  return [{ id: 123, platform: "Instagram" }];
};

//todo: use 'replace' prop in Link components to handle not allowing users to click 'back' after redirecting from /login page
const router = createBrowserRouter([
  {
    path: "*",
    Component: PrimaryLayout,
    children: [
      { path: "dashboard", Component: Dashboard },
      { path: "analytics", Component: Analytics, loader: analyticsLoader },
      { path: "my-profile", Component: MyProfile },
      { path: "evergreen", Component: Evergreen },
      { path: "posts/*", Component: PostRoutes },
      { path: "*", Component: NotFound },
    ],
  },
  { path: "/", Component: Login },
  {
    path: "/login*",
    Component: LoginLayout,
    children: [
      { index: true, Component: Login },
      { path: "register", Component: Register },
      { path: "*", Component: Register },
    ],
  },
  { path: "/logout", Component: Logout },
]);

export default function App() {
  return (
    <div className="m-0 p-0 flex justify-between min-h-screen h-full w-full">
      <RouterProvider router={router} />
    </div>
  );
}
