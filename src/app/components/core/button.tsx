import { classNames } from "@/app/helpers/class-names";
import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  disabled = false,
  selected = false,
  className,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        "py-1 px-4 border rounded-md border-black hover:bg-black hover:text-white transition-colors duration-300",
        selected ? "bg-black text-white" : "",
        className
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
