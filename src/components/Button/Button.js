import React from "react";
import classNames from "classnames";

import "./Button.css";

const Button = ({ label, priority, className, size, type, onClick }) => {
  const classes = classNames(
    "button",
    {
      [`button--${priority}`]: priority,
      [`button--size-${size}`]: size
    },
    className
  );

  return (
    <button className={classes} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  priority: "primary",
  onClick: () => {}
};

export default Button;
