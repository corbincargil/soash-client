import { useLoaderData } from "react-router-dom";

export function Blogs() {
  const loaderState = useLoaderData();
  console.log("🚀 ~ PostLayout ~ loaderState:", loaderState);
  return <h1>Blogs</h1>;
}
