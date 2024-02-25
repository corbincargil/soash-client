import { Route, Routes } from "react-router";
import { PostLayout } from "../layouts/PostLayout";
import { Posts } from "../pages/posts/Posts";
import { NewPost } from "../pages/posts/NewPost";
import { PostDetails } from "../pages/posts/PostDetails";
import { PostFallback } from "../pages/posts/PostFallback";

export function PostRoutes() {
  return (
    <Routes>
      <Route element={<PostLayout />}>
        <Route index element={<Posts />} />
        <Route path=":id" element={<PostDetails />} />
        <Route path="new" element={<NewPost />} />
        <Route path="*" element={<PostFallback />} />
      </Route>
    </Routes>
  );
}
