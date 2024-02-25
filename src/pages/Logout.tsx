import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Logout() {
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const mimickLogout = () => {
    setTimeout(() => {
      setCompleted(true);
    }, 500);
  };

  const redirect = () =>
    setTimeout(() => {
      navigate("/");
    }, 500);

  useEffect(() => {
    mimickLogout();
  }, []);

  useEffect(() => {
    completed && redirect();
  }, [completed]);

  return completed ? (
    <h1 className="my-6 font-bold text-lg text-blue-500">Success</h1>
  ) : (
    <h1 className="my-6 font-bold text-lg text-blue-500">Signing out...</h1>
  );
}
