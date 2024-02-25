import { useLocation, useParams } from "react-router-dom";

export function PostDetails({ f }: any) {
  const { state } = useLocation();

  const { id } = useParams();
  return (
    <>
      {state.postTitle && <h2>{state.postTitle}</h2>}
      {id && <h4>ID: {id}</h4>}
    </>
  );
}
