import React from "react";
import { FieldProps } from "../LoginForm";

export default function Field({ label, value }: FieldProps) {
  return (
    <div className="flex flex-col justify-between items-center m-2">
      <label className="self-start my-2">{label}:</label>
      <input
        name={value}
        className="w-full p-2 rounded-md h-10 focus-visible:border-none"
      />
    </div>
  );
}
