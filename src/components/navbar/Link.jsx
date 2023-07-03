import React, { useState } from "react";

const Link = ({ url, text, color }) => {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={url}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      style={{
        color: color,
        borderBottomColor: hover && color,
        borderBottomWidth: hover && "3px",
        borderBottomStyle: hover && "solid",
      }}
    >
      {text}
    </a>
  );
};

export default Link;
