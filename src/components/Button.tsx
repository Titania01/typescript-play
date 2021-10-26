import React from "react";

const Button = (props: any) => {
  return (
    <div>
      <button {...props}>{props.children}</button>
    </div>
  );
};

export default Button;
