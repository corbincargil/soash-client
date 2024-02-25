import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import PrimaryLayout from "./layouts/PrimaryLayout";
import { Dashboard } from "./pages/Dashboard";
import { Analytics } from "./pages/Analytics";
import { MyProfile } from "./pages/MyProfile";
import { PostRoutes } from "./routes/PostRoutes";
import { NotFound } from "./pages/NotFound";

const analyticsLoader = () => {
  return [{ id: 123, platform: "Instagram" }];
};

//todo: use 'replace' prop in Link components to handle not allowing users to click 'back' after redirecting from /login page
const router = createBrowserRouter([
  {
    path: "*",
    element: <PrimaryLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "analytics", element: <Analytics />, loader: analyticsLoader },
      { path: "my-profile", element: <MyProfile /> },
      { path: "posts/*", element: <PostRoutes /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "/", Component: Login },
  { path: "/login", Component: Login },
  { path: "/logout", Component: Logout },
]);

export default function App() {
  return (
    <div className=" flex justify-between h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
}
