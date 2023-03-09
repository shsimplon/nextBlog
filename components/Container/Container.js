import React from "react";
import Nav from "../Nav";
const Container = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default Container;
