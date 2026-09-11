import type { HTMLAttributes } from "react";
import cs from "./Text.module.css";
import { cls } from "../../helpers";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  family?: "sora" | "mono";
  variant?: "primary" | "secondary";
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Text({ text, family = "mono", variant = "primary", as: Tag = "p", className, ...props }: TextProps) {
  return (
    <Tag {...props} className={cls(cs[family], cs[variant], className)}>
      {text}
    </Tag>
  );
}
