import React from "react";

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} >
      {props.children}
    </button>
  );
};

export default Button;