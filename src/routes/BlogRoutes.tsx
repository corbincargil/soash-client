import { Route, Routes } from "react-router";
import { Blogs } from "../pages/Blogs";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const postRouter = createBrowserRouter(
  createRoutesFromElements([<Route index element={<Blogs />} />])
);

export function BlogRoutes() {
  return <RouterProvider router={postRouter} />;
}
