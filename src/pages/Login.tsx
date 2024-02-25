import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/Forms/LoginForm";

export function Login() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const mimimickLogin = (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setUser(true);
    }, 1000);
  };

  useEffect(() => {
    if (user) setTimeout(() => navigate("/dashboard"), 1000);
  }, [user]);

  return (
    <>
      {loading ? (
        <h1>Redirecting...</h1>
      ) : (
        <LoginForm onSubmit={mimimickLogin} loading={loading} />
      )}
    </>
  );
}
