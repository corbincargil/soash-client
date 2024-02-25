import { Route, Routes } from "react-router";
import { PostLayout } from "../Components/layouts/PostLayout";
import { Posts } from "../pages/Posts";
import { NewPost } from "../pages/NewPost";
import { PostDetails } from "../pages/PostDetails";

export function PostRoutes() {
  return (
    <Routes>
      <Route element={<PostLayout />}>
        <Route index element={<Posts />} />
        <Route path=":id" element={<PostDetails />} />
        <Route path="new" element={<NewPost />} />
      </Route>
    </Routes>
  );
}
