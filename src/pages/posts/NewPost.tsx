import { Link, useParams } from "react-router-dom";
import { PostLayout } from "../../layouts/PostLayout";

export function NewPost() {
  const { id } = useParams();
  return <h2>Create new post:</h2>;
}
