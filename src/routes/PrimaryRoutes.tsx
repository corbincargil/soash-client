import { Route, Routes } from "react-router";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { Analytics } from "../pages/Analytics";
import { MyProfile } from "../pages/MyProfile";
import { Logout } from "../pages/Logout";
import { NotFound } from "../pages/NotFound";
import { PostRoutes } from "./PostRoutes";

//todo: use 'replace' prop in Link components to handle not allowing users to click 'back' after redirecting from /login page

export function PrimaryRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/my-profile" element={<MyProfile />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/posts/*" element={<PostRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
