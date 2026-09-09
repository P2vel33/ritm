import "./Text.css";
interface TextProps {
  text: string;
  variant?: "sora" | "mono";
}

export function Text({ text, variant = "mono" }: TextProps) {
  return <p className={variant}>{text}</p>;
}
