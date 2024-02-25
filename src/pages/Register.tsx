import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../Components/Forms/LoginForm";
import RegisterForm from "../Components/Forms/RegisterForm";

export function Register() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const mimimickLogin = (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setUser(true);
    }, 250);
  };

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user]);

  return (
    <>
      {loading ? (
        <h1 className="my-6 font-bold text-lg text-blue-500">Redirecting...</h1>
      ) : (
        <RegisterForm onSubmit={mimimickLogin} loading={loading} />
      )}
      <div className="text-center">
        <p className="text-slate-400 opacity-90">Already have an account?</p>
        <Link to={"/login"} className="hover:text-blue-900">
          Log in
        </Link>
      </div>
    </>
  );
}
