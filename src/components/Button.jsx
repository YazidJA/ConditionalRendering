import React, { useState } from "react";

const Button = (props) => {
  const [color, setColor] = useState("white");

  const onMouseOver = () => {
    setColor("lightblue");
  };

  const onMouseOut = () => {
    setColor("white");
  };

  return (
    <button
      className="button"
      style={{ backgroundColor: color }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={props.onClick}
      type="submit"
    >
      {props.text}
    </button>
  );
};

export default Button;
