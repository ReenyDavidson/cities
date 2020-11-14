import React from "react";

const Header = () => {
  return (
    <div
      style={{
        height: "8rem",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "gold",
          fontFamily: "Amatic SC",
          textDecoration: "line-through",
        }}
      >
        CITIES
      </h1>
    </div>
  );
};

export default Header;
