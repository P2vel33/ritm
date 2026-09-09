import type { HTMLAttributes } from "react";
import "./Text.css";
import { cls } from "../../helpers";
interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  family?: "sora" | "mono";
  variant?: "primary" | "secondary";
}

export function Text({ text, family = "mono", variant = "primary", ...props }: TextProps) {
  return (
    <p {...props} className={cls(family, variant)}>
      {text}
    </p>
  );
}
