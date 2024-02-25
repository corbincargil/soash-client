import React from "react";
import Field from "./helpers/Field";
import { useNavigate } from "react-router-dom";
import Button from "./helpers/Button";

export interface FieldProps {
  label: string;
  value: string;
}

const registerFields: FieldProps[] = [
  { label: "Email", value: "username" },
  { label: "First Name", value: "firstName" },
  { label: "Last Name", value: "lastName" },
  { label: "Password", value: "password" },
  { label: "Confirm Password", value: "password" },
];

interface LoginFormProps {
  onSubmit: (e: Event) => any;
  loading: boolean;
}

export default function RegisterForm({ onSubmit, loading }: LoginFormProps) {
  const navigate = useNavigate();

  return (
    <div className="m-2 p-2 w-full max-w-md">
      <form>
        {registerFields.map((f) => (
          <Field label={f.label} value={f.value} />
        ))}
        <div className="py-4 flex justify-around">
          <Button text="Submit" onClick={onSubmit} disabled={loading} />
        </div>
      </form>
    </div>
  );
}
