import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Forms/LoginForm";

export function Login() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const mimimickLogin = (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setUser(true);
    }, 500);
  };

  useEffect(() => {
    if (user) setTimeout(() => navigate("/dashboard"), 1000);
  }, [user, navigate]);

  return (
    <>
      {loading ? (
        <h1 className="my-6 font-bold text-lg text-blue-500">Redirecting...</h1>
      ) : (
        <LoginForm onSubmit={mimimickLogin} loading={loading} />
      )}
    </>
  );
}
