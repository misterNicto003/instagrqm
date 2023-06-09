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
  fullWidth,
  children,
}) => {

  const style ={
    width: fullWidth ? "100% ": '',
  };


  return (
    <button
    style={style}
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
