import React from "react";

interface ButtonProps {
  text: string;
  onClick: any;
  disabled: boolean;
  variant?: "primary" | "secondary";
}

const primaryClassNames =
  "m-2 p-2 text-center bg-blue-900 text-slate-200 font-semibold rounded-md shadow-lg hover:bg-blue-500 ";
const secondaryClassNames =
  "m-2 p-2 text-center text-blue-900 bg-slate-200 font-semibold rounded-md shadow-lg border border-blue-900 hover:bg-blue-500 hover:text-slate-200 ";

export default function Button({
  text,
  onClick,
  disabled,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={
        variant === "primary" ? primaryClassNames : secondaryClassNames
      }
      //   className="m-2 p-2 text-center bg-blue-900 text-slate-200 border border-blue-900 font-semibold rounded-md hover:bg-blue-500 shadow-lg"
    >
      {text}
    </button>
  );
}
