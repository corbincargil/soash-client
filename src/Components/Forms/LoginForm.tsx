import React from "react";
import Field from "./helpers/Field";
import { useNavigate } from "react-router-dom";
import Button from "./helpers/Button";

export interface FieldProps {
  label: string;
  value: string;
}

const loginFields: FieldProps[] = [
  { label: "Username/Email", value: "username" },
  { label: "Password", value: "password" },
];

interface LoginFormProps {
  onSubmit: (e: Event) => any;
  loading: boolean;
}

export default function LoginForm({ onSubmit, loading }: LoginFormProps) {
  const navigate = useNavigate();

  return (
    <div className="m-2 p-2 w-full max-w-md">
      <form>
        {loginFields.map((f) => (
          <Field label={f.label} value={f.value} />
        ))}
        <div className="py-4 flex justify-around">
          <Button
            text="Login"
            onClick={(e: Event) => onSubmit(e)}
            disabled={loading}
          />
          <Button
            text="Register"
            onClick={(e: Event) => navigate("/login/register")}
            disabled={loading}
            variant="secondary"
          />
        </div>
      </form>
    </div>
  );
}
