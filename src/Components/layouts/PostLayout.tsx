import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export function PostLayout() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/v1/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {posts?.length ? (
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
    </>
  );
}
