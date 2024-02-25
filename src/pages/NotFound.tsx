import { useEffect } from "react";
import { useNavigate } from "react-router";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);

  return <h1>Page not found</h1>;
}
