import React from "react";
import Nav from "../components/Nav/Nav";

// Better to have default layout and pass in children therefore not reusing components
function Default({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}

export default Default;
