import React from "react";

const Button = (onClick) => {
  return (
    <button
      onClick={() => navigate(`/movie/${id}`)}
      className="py-3 px-6 rounded-lg capitalize bg-primaty w-full mt-auto"
    >
      Watch Now
    </button>
  );
};

export default Button;
