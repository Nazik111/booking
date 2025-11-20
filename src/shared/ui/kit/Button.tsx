import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  disabled,
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center rounded-[100px] px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-brand-600 text-white hover:bg-brand-500 focus-visible:ring-brand-600 disabled:bg-slate-300 disabled:text-slate-600"
      : "bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400 disabled:text-slate-400";
  return (
    <button
      className={`${base} ${styles} ${className}`}
      disabled={disabled}
      {...rest}
    />
  );
};
