import React from "react";

const Button = (
  onClick,
  className,
  type = "button",
  bgColor = "primaty",
  children
) => {
  let bgClassName = "bg-primaty";
  switch (bgColor) {
    case "primaty":
      bgClassName = "bg-primaty";
      break;
case "se"
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg capitalize bg-primaty w-full mt-auto ${bgClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
