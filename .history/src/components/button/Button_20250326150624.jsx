import React from "react";

const Button = ({
  onClick,
  className = "",
  full = false,
  type = "button",
  bgColor = "primary",
  children,
}) => {
  let bgClassName = "bg-primaty";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primaty";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg capitalize w-full mt-auto ${bgClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
