import React from "react";

const Button = (onClick, className, children) => {
  return (
    <button
      onClick={() => navigate(`/movie/${id}`)}
      className="py-3 px-6 rounded-lg capitalize bg-primaty w-full mt-auto"
    >
      {children}
    </button>
  );
};

export default Button;
