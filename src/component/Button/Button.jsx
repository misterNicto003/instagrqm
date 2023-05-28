import React from "react";
import cls from "./button.module.scss";

export const ButtonVariant = {
  SOLID: "solid",
  CLEAR: "clear",
  OUTLINE: "outline",
};

const button = ({
  className,
  disabled,
  variant = ButtonVariant,
  type,
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      className={`${cls.btn} ${cls[variant]} ${className || ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default button;
