import React from "react";

const Button = (
  onClick,
  className,
  type = "button",
  bgColor = "primaty",
  children
) => {
  let bgCLassName;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg capitalize bg-primaty w-full mt-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
