import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import fetchPosts from "../utils/fetchPosts";
import { PostFallback } from "../pages/posts/PostFallback";
import { ErrorBoundary } from "react-error-boundary";

interface PostInterface {
  id: number;
  title: string;
}

export function PostLayout() {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  console.log("🚀 ~ PostLayout ~ posts:", posts);

  useEffect(() => {
    (async () => await fetchPosts().then((res) => setPosts(res.posts)))();
  }, []);

  return (
    <ErrorBoundary FallbackComponent={PostFallback}>
      <h1>Posts</h1>
      {posts.length ? (
        posts.map((u, i) => (
          <li key={i}>
            <Link to={`/posts/${u.id}`} state={{ postTitle: u.title }}>
              {u.title}
            </Link>
          </li>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
      <li>
        <Link to="/posts/new">New post</Link>
      </li>
      <Outlet />
    </ErrorBoundary>
  );
}
