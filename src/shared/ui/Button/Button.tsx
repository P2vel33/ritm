import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "danger" | "neutral";
  loading?: boolean;
  text: string;
}

export function Button({ variant = "primary", loading = false, disabled = false, text }: ButtonProps) {
  return (
    <button
      className={`button border raduis-4  ${variant === "primary" ? variant + " offset" : variant} ${loading}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
