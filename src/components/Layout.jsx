import React from "react";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="m-4">
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
