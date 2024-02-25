import { useEffect } from "react";
import { useNavigate } from "react-router";

export function PostFallback() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  }, []);

  return <h1>Error loading posts...</h1>;
}
