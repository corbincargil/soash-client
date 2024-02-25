import { ErrorBoundary } from "react-error-boundary";
import { useLocation, useParams } from "react-router-dom";
import { PostFallback } from "./PostFallback";
import { useState, useEffect } from "react";
import fetchPost from "../../utils/fetchPost";

export function PostDetails() {
  const [post, setPost] = useState<any>({});
  const { id } = useParams();
  console.log("🚀 ~ PostDetails ~ post:", post);

  useEffect(() => {
    setPost({});
    (async () =>
      await fetchPost(id!).then((res) =>
        res.ok ? setPost(res.post) : setPost(null)
      ))();
  }, [id]);
  return (
    <ErrorBoundary FallbackComponent={PostFallback}>
      {post ? (
        <h2 className="text-xl font-bold underline">
          {post.title || "Loading..."}
        </h2>
      ) : (
        <h2 className="text-xl font-bold underline">Could not find post</h2>
      )}
      {id && <h4>ID: {id}</h4>}
    </ErrorBoundary>
  );
}
